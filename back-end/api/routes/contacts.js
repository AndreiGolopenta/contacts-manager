const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');
const userAuth = require('../middleware/user-auth');

router.post('/', userAuth, contactsController.createContact);
router.get('/', userAuth, contactsController.getContactsForUser);
router.patch('/:id', userAuth, contactsController.updateContact);
router.delete('/:id', userAuth, contactsController.deleteContact);

module.exports = router;
