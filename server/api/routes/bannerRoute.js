const express = require('express');
const router = express.Router();
const middlewares = require("./middlewares");
const bannerController = require('../controllers/bannerController');

router.post('/insert'
// , middlewares.authorize
, bannerController.createBanner);
router.put('/update/:id', middlewares.authorize, bannerController.updateBanner);
router.delete('/delete/:id', middlewares.authorize, bannerController.deleteBanner);
router.get('/getPaging', bannerController.getPagingBanners);
router.get('/getById/:id', bannerController.getBannerById);
module.exports = router;
