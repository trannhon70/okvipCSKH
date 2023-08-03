const { isValidObjectId } = require("mongoose");
const ContactTypes = require("../../database/entities/ContactTypes");
const PagedModel = require("../models/PagedModel");
const ResponseModel = require("../models/ResponseModel");
const {dashLogger} = require('../../logger');
const path = require("path");

async function createContactType(req, res) {
	// if (req.actions.includes("createContactType")) {
		try {
			let contactType = new ContactTypes(req.body);
			contactType.createdTime = Date.now();
			let newContactType = await contactType.save();
			let response = new ResponseModel(1, "Create contact type success!", newContactType);
			res.json(response);
		} catch (error) {
			dashLogger.error(`controller: contactTypeController; Request: ${req.originalUrl}; Error: ${error}`);
			let response = new ResponseModel(404, error.message, error);
			res.json(response);
		}
	// } else {	
	// 	res.sendStatus(403);
	// }
}

async function updateContactType(req, res) {
	if (req.actions.includes("updateContactType")) {
		try {
			let newContactType = {
				updatedTime: Date.now(),
				user: req.userId,
				...req.body,
			};
			let updatedContactType = await ContactTypes.findOneAndUpdate(
				{ _id: req.params.id },
				newContactType
			);
			if (!updatedContactType) {
				let response = new ResponseModel(0, "No item found!", null);
				res.json(response);
			} else {
				let response = new ResponseModel(
					1,
					"Update contact type success!",
					newContactType
				);
				res.json(response);
			}
		} catch (error) {
			dashLogger.error(`controller: contactTypeController; Request: ${req.originalUrl}; Error: ${error}`);
			let response = new ResponseModel(404, error.message, error);
			res.json(response);
		}
	} else {
		res.sendStatus(403);
	}
}

async function deleteContactType(req, res) {
	if (req.actions.includes("deleteContactType")) {
		if (isValidObjectId(req.params.id)) {
			try {
				const contactType = await ContactTypes.findByIdAndDelete(req.params.id);
				if (!contactType) {
					let response = new ResponseModel(0, "No item found!", null);
					res.json(response);
				} else {
					let response = new ResponseModel(
						1,
						"Delete contact type success!",
						null
					);
					res.json(response);
				}
			} catch (error) {
				dashLogger.error(`controller: contactTypeController; Request: ${req.originalUrl}; Error: ${error}`);
				let response = new ResponseModel(-2, error.message, error);
				res.json(response);
			}
		} else {
			res.status(404).json(new ResponseModel(404, "ContactTypeId is not valid!", null));
		}
	} else {
		res.sendStatus(403);
	}
}

async function getPagingContactTypes(req, res) {
	let pageSize = req.query.pageSize || 10;
	let pageIndex = req.query.pageIndex || 1;

	let searchObj = {};
	if (req.query.search) {
		searchObj = { title: { $regex: ".*" + req.query.search + ".*" } };
	}
	try {
		let contactTypes = await ContactTypes.find(searchObj)
			.skip(pageSize * pageIndex - pageSize)
			.limit(parseInt(pageSize))
			.sort({
				createdTime: "desc",
			});
		let count = await ContactTypes.find(searchObj).countDocuments();
		let totalPages = Math.ceil(count / pageSize);
		let pagedModel = new PagedModel(pageIndex, pageSize, totalPages, contactTypes);
		res.json(pagedModel);
	} catch (error) {
		dashLogger.error(`controller: contactTypeController; Request: ${req.originalUrl}; Error: ${error}`);
		let response = new ResponseModel(404, error.message, error);
		res.status(404).json(response);
	}
}

async function getContactTypeById(req, res) {
	if (isValidObjectId(req.params.id)) {
		try {
			let contactType = await ContactTypes.findById(req.params.id);
			res.json(contactType);
		} catch (error) {
			dashLogger.error(`controller: contactTypeController; Request: ${req.originalUrl}; Error: ${error}`);
			res.status(404).json(404, error.message, error);
		}
	} else {
		res.status(404).json(new ResponseModel(404, "ContactTypeId is not valid!", null));
	}
}

async function uploadImage(req, res) {
	try {
		const { id, contactType } = req.body;
		const file = req.files?.file || "";
		if (id) {
		  if (req.files?.file) {
			let file = req.files?.file;
			file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
			  console.log(err);
			});
		  }
		  
		  // Find the contact by its ID and update the icon field
		  const result = await ContactTypes.findOneAndUpdate(
			{
			  _id: id,
			  "contactType._id": contactType,
			},
			{
			  $set: {
				"contactType.$.img": file?.name,
			  },
			},
			{ new: true }
		  );
		  
		  if (result) {
			return res.status(200).json({
			  data: result,
			  status: 1,
			});
		  } else {
			return res.status(404).json({
			  status: 0,
			  message: "Contact type not found",
			});
		  }
		}
	  } catch (error) {
		dashLogger.error(`controller: contactController; Request: ${req.originalUrl}; Error: ${error}`);
		res.status(404).json(404, error.message, error);
	  }
}

exports.createContactType = createContactType;
exports.updateContactType = updateContactType;
exports.deleteContactType = deleteContactType;
exports.getPagingContactTypes = getPagingContactTypes;
exports.getContactTypeById = getContactTypeById;
exports.uploadImage = uploadImage;
