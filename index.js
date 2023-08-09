const express = require('express');

const app = express();

const port = 6969;

app.get('/', (req, res)=>{

  res.send('Hello, world');
});

app.get('/nueva-ruta', (req, res)=>{

  res.send("I'm a new endpoint");
});

app.get('/products', (req, res)=>{
  res.json({
    name: 'uwu',
    precio: 10000
  })
})

app.listen(port, ()=>{
  console.log(`port ${port}`);
});

