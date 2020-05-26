var express = require('express');
const rp = require('request-promise-native')
var router = express.Router();

router.get('/basic-node', async function (req, res, next) {
  const options = {
    method: 'GET',
    url: 'http://localhost:8090/sleep/3000',
    json: true
  }
  const response = await rp(options)
  res.send(response);
});

module.exports = router;
