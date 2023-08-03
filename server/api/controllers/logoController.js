const Logo = require("../../database/entities/Logo");
const ResponseModel = require("../models/ResponseModel");

async function createLogo(req, res) {
    // if (req.actions.includes("createDomain")) {
    try {
      let domain = new Logo(req.body);
      domain.createdTime = Date.now();
      let newDomain = await domain.save();
      let response = new ResponseModel(1, "Create domain success!", newDomain);
      res.json(response);
    } catch (error) {
      dashLogger.error(
        `controller: domainController; Request: ${req.originalUrl}; Error: ${error}`
      );
      let response = new ResponseModel(404, error.message, error);
      res.json(response);
    }
    // } else {
    // 	res.sendStatus(403);
    // }
  }

  exports.createLogo = createLogo;