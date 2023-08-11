const express = require('express');
const  ProductsService = require('./../services/product.service.js');



const router = express.Router();
const service = new ProductsService()

router.get('/', async (req, res)=>{

  const products = await service.find()

  res.json(products)
})

  router.get('/:id', async (req, res)=>{
    const {id} = req.params;

    try{
      const product = await service.findOne(id);
      res.json(product);
    }catch(err){
      res.status(404).json({
        error: err.message
      })
    }


  });




router.post('/', async (req, res)=>{

  try{

    const body = req.body;

    const newProduct = await service.create(body);


    res.status(201).json(newProduct);
  }catch(err){

    res.status(403).json({
      error: err.message})

  }



});

router.patch('/:id', async (req, res)=>{
  try{

    const bodyPatch = req.body;
    const { id } = req.params;

    let updatedResponse = await service.update(id, bodyPatch);

    res.json(updatedResponse)

  }catch(err){

    res.status(404).json({
      error: err.message
    })
  }

})

router.delete('/:id', async (req, res)=>{

  try{
    const { id } = req.params;



    let confirmation = await service.delete(id);

    res.json(confirmation);
  }catch(err){

    res.status(404).json({
      error: err.message
    })
  }

})
module.exports = router;
