const https = require('https');
const querystring = require('querystring');

const payload = querystring.stringify({
  Email: 'mthokozisi@apply.org.za',
  Names: 'Mthokozisi Dhlamini',
});

const options = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(payload),
  },
  hostname: 'hook.eu1.make.com',
  method: 'POST',
  path: '/2n33rcklmmkegg6a3xgppg6gptd3vrab',
};

const request = https.request(options, function (res) {
  res.on('data', function (data) {
    if (res.statusCode !== 200) {
      throw new Error('Not OK (non-200 status code received)');
    }

    if (data) {
      data = JSON.parse(data);

      console.log('Response:', data);

      // Do some other awesome Node.js stuff here...
    }
  });
})

request.on('error', function (e) {
  throw new Error(e.message);
});

request.write(payload);
request.end();
