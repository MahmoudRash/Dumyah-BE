const productsService = require('../../services/products');
const Response = require('../models/Response');

exports.getProducts = async (req) => {
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