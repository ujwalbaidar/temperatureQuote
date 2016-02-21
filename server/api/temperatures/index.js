'use strict';

var express = require('express');
var controller = require('./temperature.controller');

var router = express.Router();

router.post('/record', controller.addTemperatures); 

module.exports = router;