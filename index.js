const express = require('express');

const app = express();

const port = 6969;

app.get('/', (req, res)=>{

  res.send('Hello, world');
});

app.listen(port, ()=>{
  console.log(`port ${port}`);
});

