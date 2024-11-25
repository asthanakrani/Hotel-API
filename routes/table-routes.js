const express = require('express');
const routes = express.Router();

const table = require('../controller/table-controller');


routes.get('/',table.getTable);
routes.post('/',table.posttable);

module.exports= routes; 