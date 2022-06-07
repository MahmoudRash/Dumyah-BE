const rp = require('request-promise');

exports.get = (req, path) => {
  const qs = req.query;
  const uri = `${AppConfigs.api.dumyah.baseUrl}${path}`;
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
