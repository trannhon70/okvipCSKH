const Note = require("../../database/entities/Note");
const { dashLogger } = require("../../logger");
const ResponseModel = require("../models/ResponseModel");

async function createNote(req, res) {
    // if (req.actions.includes("createDomain")) {
    try {
      let note = new Note(req.body);
      note.createdTime = Date.now();
      let newNot = await note.save();
      let response = new ResponseModel(1, "Create domain success!", newNot);
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

  exports.createNote = createNote;