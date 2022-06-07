var express = require('express');
var router = express.Router();
const controller = require('./brands.v1.controller');

router.get('/v1/brands', controller.getBrands);

module.exports = router;