const express = require('express');

const { createClient, deleteClient, getClientById, getClients, updateClient } = require('../controllers/clientController')

const router = express.Router();

router.post('/', createClient);

router.get('/', getClients);

router.get('/:id', getClientById);

router.put('/:id', updateClient);

router.delete('/:id', deleteClient);

module.exports = router;