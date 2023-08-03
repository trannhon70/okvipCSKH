
const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares');
const noteController = require('../controllers/noteController');

router.post('/insert',
//  middlewares.authorize, 
noteController.createNote);


module.exports = router;