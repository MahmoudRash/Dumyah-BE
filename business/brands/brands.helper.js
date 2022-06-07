const brandsService = require('../../services/brands');
const Response = require('../models/Response');
const authHelper = require('../helper/authHelper');

exports.getBrands = async (req) => {
  const auth = authHelper.auth(req);
  if(auth){
    return auth;
  }
  let result = null;
  const response = new Response();
  try {
    result = await brandsService.getBrands(req);

    if(result){
      response.data = result;
      response.statusCode = 200;
    } 
  } catch (error) {
    response.statusCode = error.statusCode || error.status;
    response.data = error;
  }
  
  return response;
};