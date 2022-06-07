const productsService = require('../../services/products');
const Response = require('../models/Response');
const authHelper = require('../helper/authHelper');

exports.getProducts = async (req) => {
  const auth = authHelper.auth(req);
  if(auth){
    return auth;
  }
  let result = null;
  const response = new Response();
  try {
    result = await productsService.getProducts(req);

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