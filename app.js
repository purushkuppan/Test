
const yargs = require('yargs');

const geocode = require('./getGeoCode/getGeoCode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log('Address', results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Temperature now ${results.temperature} but its feels like a ${results.apparentTemperature} `);
            }
        });
    }
});




