#!/usr/bin/perl

# Start the dev app environment.
# Seth Darbyshire

system("mongod --dbpath ~/data/db 1>/tmp/mongo.log 2>&1 &");
system("redis-server 1>/tmp/redis.log 2>&1 &");
system("nodemon --harmony ~/Dropbox/git_repos/darbyshire_kitchens/app/bin/www 1>/tmp/app.log 2>&1 &");
