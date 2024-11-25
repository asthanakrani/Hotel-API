const express = require ('express');
const routes = express.Router();

const ordermenuitem = require('../controller/order-menuitem-controller');

routes.get ('/',ordermenuitem.getordermenuItem);
routes.get('/:id',ordermenuitem.getOrdermenuItem);
routes.post('/',ordermenuitem.postordermenuitem);
routes.put('/:id',ordermenuitem.putordermenuitem);
routes.delete('/:id',ordermenuitem.deleteordermenuitem);

module.exports = routes;