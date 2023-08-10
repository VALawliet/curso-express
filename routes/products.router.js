const express = require('express');
const {faker} = require('@faker-js/faker');


const router = express.Router();

router.get('/', (req, res)=>{

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
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      })
    }
  
    res.json(proudctos)
  })
  
  router.get('/filter', (req, res)=>{
    res.send('yo soy un filter');
  })
  
  router.get('/:id', (req, res)=>{
    const {id} = req.params;
    res.json({
      productId: id,
      name: 'uwu',
      price: 2000
    })
  });
  



router.post('/', (req, res)=>{
  const body = req.body;

  res.json({
    message: "Creation",
    data: body
  })
})
module.exports = router;