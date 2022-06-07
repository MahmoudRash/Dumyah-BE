const provider = require('../../business/helper/serviceHelper');

exports.getProducts = async (req, res) => {
  const result = await provider.get(req, AppConfigs.api.products);
  return res.status(result.statusCode).json(result.data);
};
