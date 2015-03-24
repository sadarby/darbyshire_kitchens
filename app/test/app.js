
const log = require('npmlog'); // General logging
const monk = require('monk'); // Thin MongoDB layer
const db = monk('localhost:27017/appdb'); // Create connection to MongoDB

//test MongoDB
var test = db.get('test');
test.find({ name: 'Seth' }).on('complete', function(err, doc) {
  if (err) throw err;
  log.info('MONGO', doc);

  if (doc.length > 1) {
    log.info('MONGO', 'found something ' + doc[0].name);
  } else {
    test.insert({ name: 'Seth' }).on('complete', function(err, doc2) {
      if (err) throw err;
    });
  }

  db.close();
  process.exit(0);
});

