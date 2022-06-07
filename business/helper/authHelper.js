const Response = require('../models/Response');

class authHelper {
  static auth(req){
    const response = new Response();
    if(!req.headers.authorization || req.headers.authorization !== AppConfigs.authorizationHeader) {
      response.data = 'Authentication required.';
      response.statusCode = 401;
      return response;
    }
  }
}

module.exports = authHelper;