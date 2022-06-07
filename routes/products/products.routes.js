var express = require('express');
var router = express.Router();
const controller = require('./products.v1.controller');

router.get('/api/v1/products', controller.getProducts);

module.exports = router;
