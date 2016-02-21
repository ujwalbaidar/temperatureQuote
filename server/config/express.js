var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app, config) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    app.use(express.static(config.rootPath + '/client'));

    app.set('views', config.rootPath + '/client');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
}