//@TS-Check

const express = require('express');
const router = express.Router();

const {
    getAllContacts, 
    getContactById, 
    createContact, 
    updateContact, 
    deleteContact
} = require('../controllers/contacts.controllers');

// Main
router.get('/', getAllContacts);

router.get('/:id', getContactById);

router.post('/', createContact)

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

// Exports
module.exports = router;