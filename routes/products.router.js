const express = require('express');
const  ProductsService = require('./../services/product.service.js');



const router = express.Router();
const service = new ProductsService()

router.get('/', async (req, res)=>{

  const products = await service.find()

  res.json(products)
})
  
  router.get('/filter', (req, res)=>{
    res.send('yo soy un filter');
  })
  
  router.get('/:id', (req, res)=>{
    const {id} = req.params;

    const product = service.findOne(id);
    res.json(product);
    
  });
  



router.post('/', (req, res)=>{
  const body = req.body;

  const newProduct = service.create(body);


  res.status(201).json(newProduct)
});7

router.patch('/:id', (req, res)=>{
  const bodyPatch = req.body;
  const { id } = req.params;

  let updatedResponse = service.update(id, bodyPatch);

  res.json(updatedResponse)
})

router.delete('/:id', (req, res)=>{
  const { id } = req.params;

  

  let confirmation = service.delete(id);

  res.json(confirmation);
})
module.exports = router;