const express = require('express');
const routes = express.Router();


const staff = require('../controller/staff-controller');
const { deletestaffrole } = require('../controller/staffrole-controller');

routes.get('/',staff.getstaff);
routes.get('/:id',staff.getStaff);
routes.post('/',staff.poststaff);
routes.put('/:id',staff.putstaff);
routes.delete('/:id',staff.deletestaff);

module.exports = routes;