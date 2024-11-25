const express = require('express');
const routes = express.Router();

const menuItemingredient = require('../controller/menuitemingredient-controller');

routes.get('/',menuItemingredient.getmenuitemIngredient);
routes.get('/:id',menuItemingredient.getmenuitemingredient);
routes.post('/',menuItemingredient.postmenuitemingredient);
routes.put('/:id',menuItemingredient.putmenuitemingredient);
routes.delete('/:id',menuItemingredient.deletemenuingredient);

module.exports  = routes;