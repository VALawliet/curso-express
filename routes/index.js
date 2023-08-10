
const productRouter = require('./products.router.js');
const usersRouter = require('./users.router.js'); 
const categoryRouter = require('./categories.router.js');

function routerApi(app){

    

    app.use('/api/products', productRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/categories', categoryRouter)
}

module.exports = routerApi;