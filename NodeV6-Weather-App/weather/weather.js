const request = require('request');

var getWeather = (coordinates, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e4cbbe160be8ec05a1af8e439b868d77/${coordinates[0]},${coordinates[1]}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server');
        } else if (response.statusCode === 400) {
           callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};


module.exports.getWeather = getWeather;

