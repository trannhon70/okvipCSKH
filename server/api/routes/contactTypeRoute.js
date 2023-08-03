const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares');
const contactTypeController = require('../controllers/contactTypeController');

router.post('/insert'
// , middlewares.authorize
, contactTypeController.createContactType);
router.put('/update/:id', middlewares.authorize, contactTypeController.updateContactType);
router.delete('/delete/:id', middlewares.authorize, contactTypeController.deleteContactType);
router.get('/getPaging', contactTypeController.getPagingContactTypes);
router.get('/getById/:id', contactTypeController.getContactTypeById);
router.post('/upload', contactTypeController.uploadImage);
module.exports = router;