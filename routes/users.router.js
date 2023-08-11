const express = require('express');
const UsersService = require('./../services/users.services.js');


const router = express.Router();
const service = new UsersService()

router.get('/', (req, res)=>{
     
    let response = service.find();

    res.json(response);
});

router.get('/:id', (req, res)=>{

    const { id } = req.params;

    let response = service.findOne(id);

    res.json(response);
});

router.post('/', (req, res)=>{

    let body = req.body;

    let response = service.create(body);

    res.json(response);

})

router.patch('/:id', (req, res)=>{

    const { id } = req.params;

    const bodyPatch = req.body;

    let response = service.update(id, bodyPatch);

    res.json(response);
});

router.delete('/:id', (req, res)=>{

    const { id } = req.params;

    let response = service.delete(id);

    res.json(response)
})

module.exports = router