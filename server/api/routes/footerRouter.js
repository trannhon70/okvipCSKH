const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares');
const footerController = require('../controllers/footerController');

router.post('/insert',
//  middlewares.authorize, 
footerController.createFooter);


module.exports = router;