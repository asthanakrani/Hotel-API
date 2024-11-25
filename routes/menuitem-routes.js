const express = require('express');
const routes = express.Router();

const menuitem = require('../controller/menuItem-controller');

routes.get ('/',menuitem.getmenuitem);
routes.get('/:id',menuitem.getMenuitem);
routes.post('/',menuitem.postmenuitem);
routes.put('/:id',menuitem.putmenuitem);
routes.delete('/:id',menuitem.deletemenuitem);

module.exports = routes;