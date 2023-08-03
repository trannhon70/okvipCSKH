
const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares');
const postController = require('../controllers/postController');

router.post('/insert',
//  middlewares.authorize, 
postController.createPost);


module.exports = router;