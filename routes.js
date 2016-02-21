var Forecast = require('forecast');
var forecast = new Forecast({
    service: 'forecast.io',
    key: '9c04330b9ec77d3e92d72c50910f5a17',
    units: 'celcius', // Only the first letter is parsed 
    cache: true, // Cache API requests? 
    ttl: { // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/ 
        minutes: 27,
        seconds: 45
    }
});

module.exports = function(app) {
	var date = new Date();

    app.use('/api/temperatures', require('./server/api/temperatures'));

    var CronJob = require('cron').CronJob;
    new CronJob('59 * * * * *', function() {
        forecast.get([27.7000, 85.3333], true, function(err, weather) {
            if (err) return console.log(err);
            console.log("*******************");
            console.log(date);
            console.log(weather.currently);
            console.log("*********************")
        });
    }, null, true, 'America/Los_Angeles');

    app.route('*')
        .get(function(req, res) {
            res.render('index');
        });
}