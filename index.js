const express = require('express');

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
  res.json([
    {
      name: 'uwu',
      precio: 2000
    },

    {
      name: 'owo',
      precio: 3000
    }
  ])
})

app.get('/products/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    productId: id,
    name: 'uwu',
    price: 2000
  })
});

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



