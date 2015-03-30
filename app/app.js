/**
  * @file app.js - Master file of the Express app. 
  * @author Seth Darbyshire
  * @desc Entry point, loader, and configuration of Express JS application.
  */

// Load application dependencies
const express = require('express'); // Express JS application
const config = require('config'); // JSON Config files in app/config, env var NODE_ENV
const path = require('path'); // System paths
const favicon = require('serve-favicon'); // Web app favicon
const logger = require('morgan'); // HTTP logging
const log = require('npmlog'); // General loggingg
const cookieParser = require('cookie-parser'); // HTTP cookies via Express
const session = require('express-session'); // HTTP sessions via Express
const redisClient = require('redis').createClient(); // Redis database client
const RedisStore = require('connect-redis')(session); // Redis session store
const monk = require('monk'); // Thin MongoDB layer
const db = monk(config.get('mongo_db_config.hostname')); // Create connection to MongoDB
const bodyParser = require('body-parser'); // HTTP/JSON body parser
const app = express(); // Create the express app

// Load the application view routers
const routes = require('./routes/index');
const users = require('./routes/users');

app.set('env', config.get('env')); // Set the app environment

// Set the app logging strategy
if (app.get('env') === 'development') {
  app.use(logger('dev')); // Use Apache standard combined logging if the environment is not dev
} else if (app.get('env') === 'prod') {
  // app.set('trust proxy', 1) // trust first proxy
  // sess.cookie.secure = true // serve secure cookies
  app.use(logger('combined'));
}

// Configure the Redis client to log when ready or erring
// Redis used primarily for session storage
redisClient
  .on('ready', function() { log.info('REDIS', 'ready'); })
  .on('error', function(err) { log.error('REDIS', err.message); });

app.use(bodyParser.json()); // JSON parser
app.use(bodyParser.urlencoded({ extended: false })); // URL parser
app.use(cookieParser()); // HTTP cookie parser

// Session parser and store
app.use(session({
  name: 'connect.sid', // Name of the session cookie
  // List the sessions with redis-cli KEYS 'sess:*'
  store: new RedisStore({ // Build the Redis session store
    client: redisClient
  }),
  secret: 'de93c7ab383edfb6af16473f70ccf6', // Key used to hash session cookie
  resave: false, // Only save session upon change
  saveUninitialized: false // Save all new sessions
}));

// Set the application view routers
app.use('/', routes);
app.use('/users', users);

// EJS view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Load the static public content
app.use(express.static(path.join(__dirname, 'public')));

// Seth test route
app.get('/api/:name', function(req, res) {
  res.status(200).json({ "hello": req.params.name });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Determine the proper error handling strategy
if (app.get('env') === 'development') {
  // development error handler
  // will print stacktrace
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
} else if (app.get('env') === 'production') {
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

module.exports = app; // Export the Express app
