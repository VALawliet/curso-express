/* Creación de constantes para uso de dependencias */

const express = require('express');
const { faker } = require('@faker-js/faker');

/* Creación del server */
const app = express();

/* Puerto donde correrá el server */
const port = 6969;

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

app.get('/home', (req, res)=>{
  res.send('Acá se debería cargar html, js y css');
})

app.get('/products', (req, res)=>{

  /* Con req.query accedemos a los parámetros especiales que
  se ponen en las urls al momento de querer realizar una petición.
  Esto se vería así en el navegador:
  
  http://localhost:6969/products?size=100      
  */
  const proudctos = [];
  const { size } = req.query;

  /* Se le da el valor de la variable size a limit u
  otro valor por defecto */
  const limit = size || 10

  /* Finalmente se crean una cantidad de productos que dependen
  de limit para darselo como respuesta al cliente*/
  for(let index = 0; index < limit; index++){
    proudctos.push({
      name:faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }

  res.json(proudctos)
})

app.get('/products/filter', (req, res)=>{
  res.send('yo soy un filter');
})

app.get('/products/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    productId: id,
    name: 'uwu',
    price: 2000
  })
});



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

app.listen(port, ()=>{
  console.log(`port ${port}`);
});



