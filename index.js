/* Creación de constantes para uso de dependencias */

const express = require('express');
const routerApi = require('./routes/index');
const {logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler.js');
const cors = require('cors');

/* Creación del server */
const app = express();

/* Puerto donde correrá el server */
const port = 6969;

app.use(express.json())

/* Utilización del método get en la ruta fuente '/' 

  El método get de expressjs necesita que se le pase una
  callback function en el segundo parámetro; ésta tendrá
  acceso a la petición "req" y a la respuesta "res"

*/


app.get('/', (req, res)=>{


  res.send('Hello, world');
});

app.get('/nueva-ruta', (req, res)=>{

  res.send("I'm a new endpoint");
});

app.use(cors())
routerApi(app);


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



/* app.get('/home', (req, res)=>{
  res.send('Acá se debería cargar html, js y css');
})




app.get('/users', (req, res)=>{
  
  const {limit, offset} = req.query;

  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send('No hay parametros');
  }

})

app.get('/categories/:categoryId/products/:productId', (req, res)=>{

  const {categoryId, productId} = req.params;

  res.json({
    name: 'omg',
    precio: 2999,
    categoryId,
    productId

  });
})
 */
app.listen(port, ()=>{
  console.log(`port ${port}`);
});



