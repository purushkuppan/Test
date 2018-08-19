const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geoCodeUrl).then( (response) =>{
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('No records found')
        }

        console.log(response.data.results[0].formatted_address)
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.darksky.net/forecast/4b8ef5e21ac0cffdc57a08e35288fab3/${lat},${lng}`;
        return axios.get(weatherUrl);
    }

).then( (response) => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature= response.data.currently.apparentTemperature;
        console.log(`its currenty ${temperature} but looks like ${apparentTemperature}`)
    }
).catch( (e) => {
    if (e.code== 'ENOTFOUND'){
    console.log('Api down, please try again later')
    } else {
    console.log(e.message)}
}

)