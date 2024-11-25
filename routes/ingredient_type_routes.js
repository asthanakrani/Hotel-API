const express = require('express');
const routes = express.Router();

const ingredientType = require('../controller/Ingredienttypecontroller');

routes.get ('/',ingredientType.getingredientType);
routes.get('/:id',ingredientType.getIngredienttypes);
routes.post ('/',ingredientType.postingredientType);
routes.put('/:id',ingredientType.putIngredienttypes)
routes.delete('/:id',ingredientType.deleteingredientType);

module.exports = routes;
