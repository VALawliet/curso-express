const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

const port = 6969;

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

  const proudctos = [];
  const { size } = req.query;
  const limit = size || 10

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



