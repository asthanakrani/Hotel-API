const express = require('express');
const routes = express.Router();

const booking = require('../controller/booking-controller');


routes.get('/',booking.getbooking);
routes.post('/',booking.postbooking);


module.exports= routes;
