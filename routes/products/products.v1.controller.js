const provider = require('../../business/products/products.helper');

exports.getProducts = async (req, res) => {
  const result = await provider.getProducts(req);
  return res.status(result.statusCode).json(result.data);
};
