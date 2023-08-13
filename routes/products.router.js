const express = require('express');
const  ProductsService = require('./../services/product.service.js');
const validatorHandler = require('./../middlewares/validator.handler.js');
const { createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema} = require('./../schemas/product.schema.js');



const router = express.Router();
const service = new ProductsService()

router.get('/', async (req, res)=>{

  const products = await service.find()

  res.json(products)
})

  router.get('/:id', 
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next)=>{
    const {id} = req.params;

    try{
      const product = await service.findOne(id);
      res.json(product);
    }catch(err){
      next(err)
    }


  });




router.post('/', 
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next)=>{

  try{

      const body = req.body;

      const newProduct = await service.create(body);

      console.log(newProduct)


      res.json(newProduct);
  }catch(err){

      next(err)

  }



});

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next)=>{
  try{

    const bodyPatch = req.body;
    const { id } = req.params;

    let updatedResponse = await service.update(id, bodyPatch);

    res.json(updatedResponse)

  }catch(err){

    next(err)
  }

})

router.delete('/:id', 
  validatorHandler(deleteProductSchema, 'params')
  ,async (req, res, next)=>{

  try{
    const { id } = req.params;



    let confirmation = await service.delete(id);

    res.json(confirmation);
  }catch(err){

    next(err)
  }

})
module.exports = router;
