const provider = require('../../business/brands/brands.helper');

exports.getBrands = async (req, res) => {
  const result = await provider.getBrands(req);
  return res.status(result.statusCode).json(result.data);
};
