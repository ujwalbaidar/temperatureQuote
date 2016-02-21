var http = require('http');
var express = require('express');
var app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./routes')(app);

app.set('port', process.env.PORT || 3000);


/*
http://www.codexpedia.com/javascript/nodejs-cron-schedule-examples/
cron.scheduleJob('30 * * * * *', function(){
    console.log('This runs at the 30th mintue of every hour.');
});
*/

http.createServer(app).listen(config.port, "localhost");
console.log("Server Running at http://localhost:3000/'");


