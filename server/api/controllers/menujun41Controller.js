const path = require("path");
const MenuJun41Model = require("../../database/entities/menuJun41");
const { dashLogger } = require("../../logger");
const ResponseModel = require("../models/ResponseModel");

async function createMenuJun41(req, res) {
    // if (req.actions.includes("createDomain")) {
    try {
      let menuJun = new MenuJun41Model(req.body);
      menuJun.createdTime = Date.now();
      let newMenuJum = await menuJun.save();
      let response = new ResponseModel(1, "Create domain success!", newMenuJum);
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

  async function uploadImgJun41(req, res) {
    // if (req.actions.includes("createDomain")) {
    try {
        const { id, image } = req.body;
		const file = req.files?.file || "";

        if (id) {
            if (req.files?.file) {
              let file = req.files?.file;
              file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
                console.log(err);
              });
            }
            // Find the contact by its ID and update the icon field
            const result = await MenuJun41Model.findOneAndUpdate(
                {
                    _id: id,
                    "imageIntroduce._id": image,
                },
                {
                    $set: {
                      "imageIntroduce.$.img": file?.name,
                    },
                  },
                  { new: true }
            )
            if (result) {
              return res.status(200).json({
                data: result,
                status: 1,
              });
            } else {
              return res.status(404).json({
                status: 0,
                message: "image not found",
              });
            }
          }
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


  exports.createMenuJun41 = createMenuJun41;
  exports.uploadImgJun41 = uploadImgJun41;