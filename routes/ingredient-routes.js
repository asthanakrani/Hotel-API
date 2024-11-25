const express = require ('express');
const routes = express.Router();

const Ingredient = require('../controller/Ingredient-controller');

routes.get ('/',Ingredient.getingredients);
routes.get('/:id',Ingredient.getIngredient);
routes.post('/',Ingredient.postingredient);
routes.put('/:id',Ingredient.putingredient);
routes.delete('/:id',Ingredient.deleteingredient);

module.exports  = routes;