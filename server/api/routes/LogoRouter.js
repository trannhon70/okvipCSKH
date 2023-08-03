const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares');
const logoController = require('../controllers/logoController');

router.post('/insert',
//  middlewares.authorize, 
logoController.createLogo);


module.exports = router;