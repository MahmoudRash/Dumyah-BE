const rp = require('request-promise');

exports.getProducts = (req) => {
  const qs = req.query;
  const uri = `${AppConfigs.api.dumyah.baseUrl}${AppConfigs.api.products}`;
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
