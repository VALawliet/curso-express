const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res)=>{
     
    const {size} = req.query;
    let listUsers = [];
    let limit = size || 10;

    for(let i = 0; i < limit; i++){

        listUsers.push(faker.person.fullName());

    }

    res.json(listUsers);
})

module.exports = router