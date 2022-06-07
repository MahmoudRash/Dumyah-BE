const brandsService = require('../../services/brands');
const Response = require('../models/Response');

exports.getBrands = async (req) => {
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