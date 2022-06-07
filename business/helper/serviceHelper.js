const service = require('../../services');
const Response = require('../models/Response');
const authHelper = require('../helper/authHelper');

exports.get = async (req, path) => {
  const auth = authHelper.auth(req);
  if(auth){
    return auth;
  }
  let result = null;
  const response = new Response();
  try {
    result = await service.get(req, path);

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