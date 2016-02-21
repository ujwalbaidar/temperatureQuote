var temperature = require('../../models/temperature.model');

exports.addTemperatures = function(req, res) {
	var temperatureData = req.body;
	var temperatures = new temperature();

	temperatures.location_id = temperatureData.location_id;
    temperatures.soil_humidity = temperatureData.soil_humidity;
    temperatures.env_temperature = temperatureData.env_temperature;
    temperatures.env_humidity = temperatureData.env_humidity;
    temperatures.light_intensity = temperatureData.light_intensity;
    temperatures.recorded_time = temperatureData.recorded_time;

    temperatures.save(function(err, temp) {
        if(err){
        	res.send(err);
        }else{
        	res.send(temp);
        }
    });
}


