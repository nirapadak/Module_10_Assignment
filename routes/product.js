const express = require('express');
const { createProduct, getProduct } = require('../controller/product.js');
const routes = express.Router();


routes.post('/createProduct', createProduct);

routes.get('/product', getProduct)

module.exports = routes;

