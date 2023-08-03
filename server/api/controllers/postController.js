const PostModel = require("../../database/entities/Posts");
const { dashLogger } = require("../../logger");
const ResponseModel = require("../models/ResponseModel");

async function createPost(req, res) {
    // if (req.actions.includes("createDomain")) {
    try {
      let post = new PostModel(req.body);
      post.createdTime = Date.now();
      let newPost = await post.save();
      let response = new ResponseModel(1, "Create domain success!", newPost);
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

  exports.createPost = createPost;