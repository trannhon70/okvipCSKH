const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares');
const contactController = require('../controllers/contactController');

router.post('/insert'
// , middlewares.authorize
, contactController.createContact);
router.put('/update/:id', middlewares.authorize, contactController.updateContact);
router.delete('/delete/:id', middlewares.authorize, contactController.deleteContact);
router.get('/getPaging', contactController.getPagingContacts);
router.get('/getById/:id', contactController.getContactById);
router.post('/upload', contactController.uploadImage);
module.exports = router;