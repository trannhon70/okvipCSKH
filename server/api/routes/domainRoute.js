const express = require('express');
const router = express.Router();
const middlewares = require('./middlewares');
const domainController = require('../controllers/domainController');

router.post('/insert'
// , middlewares.authorize
, domainController.createDomain);
router.put('/update/:id', middlewares.authorize, domainController.updateDomain);
router.delete('/delete/:id', middlewares.authorize, domainController.deleteDomain);
router.get('/getPaging', domainController.getPagingDomains);
router.get('/getById/:id', domainController.getDomainById);
router.get('/getPageByDomainId/:id', domainController.getPageByDomainId);
router.get('/getByDomainId/:id', domainController.getByDomainId);
router.get('/getByDomainIdJun41/:id', domainController.getByDomainIdJun41);
router.post('/upDateUIDomain', domainController.upDateUIDomain);
router.post('/upDateUIDomainJun41', domainController.upDateUIDomainJun41);

module.exports = router;
