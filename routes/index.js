
const express = require('express');
const productRouter = require('./products.router.js');
const usersRouter = require('./users.router.js'); 
const categoryRouter = require('./categories.router.js');

function routerApi(app){

    const router = express.Router();

    /* Creación de la ruta principal */

    app.use('/api/v1', router);

    router.use('/products', productRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoryRouter)
}

module.exports = routerApi;