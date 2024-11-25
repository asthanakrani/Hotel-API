const express = require('express');
const routes = express.Router();

const menu = require('../controller/menu-controller');
const { route } = require('./ingredient_type_routes');

routes.get('/' , menu.getmenu);
routes.get('/:id',menu.getMenu);
routes.post('/',menu.postmenu);
routes.put('/:id',menu.putmenu);
routes.delete('/:id',menu.deletemenu);

module.exports = routes;