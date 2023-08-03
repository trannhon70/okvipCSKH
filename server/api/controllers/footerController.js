const Footer = require("../../database/entities/Footer");
const ResponseModel = require("../models/ResponseModel");

async function createFooter(req, res) {
    // if (req.actions.includes("createDomain")) {
    try {
      let footer = new Footer(req.body);
      footer.createdTime = Date.now();
      let newfooter = await footer.save();
      let response = new ResponseModel(1, "Create footer success!", newfooter);
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

  exports.createFooter = createFooter;