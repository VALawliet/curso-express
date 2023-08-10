
const productRouter = require('./products.router.js');
const usersRouter = require('./users.router.js'); 

function routerApi(app){

    

    app.use('/products', productRouter);
    app.use('/users', usersRouter);
}

module.exports = routerApi;