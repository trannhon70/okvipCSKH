
const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares');
const menuController = require('../controllers/menujun41Controller');

router.post('/insert',
//  middlewares.authorize, 
menuController.createMenuJun41);
router.post('/upload',
//  middlewares.authorize, 
menuController.uploadImgJun41);


module.exports = router;