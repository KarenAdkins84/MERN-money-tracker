const express = require('express');
const { createTransCtrl, fetchAllTransCtrl, fetchSingleTransCtrl, deleteTransCtrl, updateTransCtrl } = require('../../controllers/transactions/transactionsController');

const transactionsRoutes = express.Router();

//POST/api/v1/transactions
transactionsRoutes.post('/', createTransCtrl);

//GET/api/v1/transactions
transactionsRoutes.get('/', fetchAllTransCtrl);

//GET/api/v1/transactions/:id
transactionsRoutes.get('/:id', fetchSingleTransCtrl);

//DELETE/api/v1/transactions
transactionsRoutes.delete('/:id', deleteTransCtrl);

//PUT/api/v1/transactions
transactionsRoutes.put('/:id', updateTransCtrl);

module.exports = transactionsRoutes;