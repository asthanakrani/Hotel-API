const express = require('express');
const routes = express.Router();

const customer = require('../controller/customerController.js');


routes.get('/' , customer.getcustomer);
routes.get('/:id' , customer.getCustomer);
routes.post('/' ,customer.postcustomer);
routes.put('/:id' ,customer.putcustomer); 

module.exports = routes;