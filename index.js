const express = require('express');
const app = express();
const routes = require('./routes/default-routes');
const bodyparser = require('body-parser');
const db = require('./config/db');
const port = 3008;

app.use (express.json());
app.use (bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use ('/v1',routes);

app.listen(port , (err) => {

    if(!err) {
        console.log(`server is runnign on http://localhost:${port}/v1`);
    }
})

