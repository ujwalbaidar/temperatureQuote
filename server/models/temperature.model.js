'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TemperatureSchema = new Schema({
    location_id: {
        type: String
    },
    soil_humidity: {
        type: String
    },
    env_temperature: {
        type: String
    },
    env_humidity: {
        type: String
    },
    light_intensity: {
        type: String
    },
    recorded_time: {
        type: Date
    }
});

module.exports = mongoose.model('Temperature', TemperatureSchema);