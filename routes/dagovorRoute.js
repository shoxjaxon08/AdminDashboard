    const express = require('express');
    const {createDagovor,getDagovorById,getAlldagovor,deleteDagovor}  = require("../controllers/dagovorController");

    const router = express.Router();
//gewewow   oqhvhjdsa
    router.post('/dagovor',createDagovor)
    router.get('/dagovor/:id',getDagovorById)
    router.get('/dagovor',getAlldagovor)
    router.delete('/dagovor/:id',deleteDagovor)


    module.exports  =  router