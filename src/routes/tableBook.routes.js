const express = require('express');
const router = express.Router();
const tableBookController = require('../controllers/tableBook.controller');


const tableBookRoutes = function (app) {
    router.get('/', tableBookController.findAllTableBooks);
    router.get('/:id', tableBookController.findOneTableBook);
    router.post('/', tableBookController.addTableBook);
    router.put('/:id', tableBookController.updateTableBook);
    router.delete('/:id', tableBookController.deleteTableBook);

    return router;
}

module.exports = tableBookRoutes;
