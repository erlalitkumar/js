const https = require('https');
const request = require('request');

function parse() {
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
    });
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`);
  });
}
function parseWithRequestApi() {
  request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true },
    (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body.url);
      console.log(body.explanation);
    });
}

// parse();
parseWithRequestApi();
