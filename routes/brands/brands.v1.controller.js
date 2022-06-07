const provider = require('../../business/helper/serviceHelper');

exports.getBrands = async (req, res) => {
  const result = await provider.get(req, AppConfigs.api.brands);
  return res.status(result.statusCode).json(result.data);
};
