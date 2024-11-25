const express = require('express');
const routes = express.Router();

const staffrole = require('../controller/staffrole-controller')

routes.get('/' ,staffrole.getstaffRole );
routes.get('/:id',staffrole.getstaffrole);
routes.post('/',staffrole.poststaffrole);
routes.put('/:id',staffrole.putstaffrole);
routes.delete('/:id',staffrole.deletestaffrole);

module.exports = routes;