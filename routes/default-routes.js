const express = require('express');
const routes = express.Router();

const ingredientTypeRoutes = require('./ingredient_type_routes');
const ingredientRoutes = require('./ingredient-routes');
const menuRoutes = require ('./menu-rotues');
const menuitemRoutes =require('./menuitem-routes');
const menuItemIngredientRoutes = require('./menuitem-ingredient');
const staffroleRoutes = require('./staffrole-routes');
const staffRoutes = require('./staff-routes');
const tableRoutes=require('./table-routes');
const orderRoutes=require('./order-routes');
const orderMenuItemRoute = require('./order-menu-item-routes');
const customerRoutes=require('./customer-routes');
const bookingRoutes= require('./booking-routes');


routes.use ('/IngredientType',ingredientTypeRoutes);
routes.use('/Ingredient',ingredientRoutes);
routes.use('/menu',menuRoutes);
routes.use('/menuitems',menuitemRoutes);
routes.use('/menuItemIngredient',menuItemIngredientRoutes)
routes.use('/staffrole',staffroleRoutes);
routes.use('/staff',staffRoutes);
routes.use('/table',tableRoutes);
routes.use('/order',orderRoutes);
routes.use('/orderMenuItem', orderMenuItemRoute);
routes.use('/customer',customerRoutes);
routes.use('/booking',bookingRoutes);


module.exports = routes;