const rp = require('request-promise');

exports.getBrands = (req) => {
  const qs = req.query;
  const uri = 'https://staging.dumyah.com/coding-test/brands';
  const options = {
    method: 'GET',
    uri,
    qs,
    headers: {
      'Content-Type': 'application/json',
    },
    json: true,
  };

  return rp(options);
};
