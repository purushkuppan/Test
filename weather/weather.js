const request = require('request');

var getWeather = (latitude, longitude , callback) => {

    request({
        url: `https://api.darksky.net/forecast/4b8ef5e21ac0cffdc57a08e35288fab3/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast servers.');
        } else if (response.statusCode === 400) {
            callback('Unable to find that address.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;
