const express = require('express');
const routes = express.Router();

const order = require('../controller/order-controller');

routes.get ('/',order.getorder);
routes.post('/',order.postorder);

module.exports=routes;