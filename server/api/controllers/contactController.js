const { isValidObjectId } = require("mongoose");
const Contacts = require("../../database/entities/Contacts");
const PagedModel = require("../models/PagedModel");
const ResponseModel = require("../models/ResponseModel");
const {dashLogger} = require('../../logger');
const Domains = require("../../database/entities/Domains");
const path = require('path');

async function createContact(req, res) {
	// if (req.actions.includes("createContact")) {
		try {
			let contact = new Contacts(req.body);
			contact.createdTime = Date.now();
			let newContact = await contact.save();
			let response = new ResponseModel(1, "Create contact success!", newContact);
			res.json(response);
		} catch (error) {
			dashLogger.error(`controller: contactController; Request: ${req.originalUrl}; Error: ${error}`);
			let response = new ResponseModel(404, error.message, error);
			res.json(response);
		}
	// } else {	
	// 	res.sendStatus(403);
	// }
}

async function updateContact(req, res) {
	if (req.actions.includes("updateContact")) {
		try {
			let newContact = {
				updatedTime: Date.now(),
				user: req.userId,
				...req.body,
			};
			let updatedContact = await Contacts.findOneAndUpdate(
				{ _id: req.params.id },
				newContact
			);
			if (!updatedContact) {
				let response = new ResponseModel(0, "No item found!", null);
				res.json(response);
			} else {
				let response = new ResponseModel(
					1,
					"Update contact success!",
					newContact
				);
				res.json(response);
			}
		} catch (error) {
			dashLogger.error(`controller: contactController; Request: ${req.originalUrl}; Error: ${error}`);
			let response = new ResponseModel(404, error.message, error);
			res.json(response);
		}
	} else {
		res.sendStatus(403);
	}
}

async function deleteContact(req, res) {
	if (req.actions.includes("deleteContact")) {
		if (isValidObjectId(req.params.id)) {
			try {
				const contact = await Contacts.findByIdAndDelete(req.params.id);
				if (!contact) {
					let response = new ResponseModel(0, "No item found!", null);
					res.json(response);
				} else {
					let response = new ResponseModel(
						1,
						"Delete contact success!",
						null
					);
					res.json(response);
				}
			} catch (error) {
				dashLogger.error(`controller: contactController; Request: ${req.originalUrl}; Error: ${error}`);
				let response = new ResponseModel(-2, error.message, error);
				res.json(response);
			}
		} else {
			res.status(404).json(new ResponseModel(404, "ContactId is not valid!", null));
		}
	} else {
		res.sendStatus(403);
	}
}

async function getPagingContacts(req, res) {
	let pageSize = req.query.pageSize || 10;
	let pageIndex = req.query.pageIndex || 1;

	let searchObj = {};
	if (req.query.search) {
		searchObj = { title: { $regex: ".*" + req.query.search + ".*" } };
	}
	try {
		let contacts = await Contacts.find(searchObj)
			.skip(pageSize * pageIndex - pageSize)
			.limit(parseInt(pageSize))
			.sort({
				createdTime: "desc",
			});
		let count = await Contacts.find(searchObj).countDocuments();
		let totalPages = Math.ceil(count / pageSize);
		let pagedModel = new PagedModel(pageIndex, pageSize, totalPages, contacts);
		res.json(pagedModel);
	} catch (error) {
		dashLogger.error(`controller: contactController; Request: ${req.originalUrl}; Error: ${error}`);
		let response = new ResponseModel(404, error.message, error);
		res.status(404).json(response);
	}
}

async function getContactById(req, res) {
	if (isValidObjectId(req.params.id)) {
		try {
			let contact = await Contacts.findById(req.params.id);
			res.json(contact);
		} catch (error) {
			dashLogger.error(`controller: contactController; Request: ${req.originalUrl}; Error: ${error}`);
			res.status(404).json(404, error.message, error);
		}
	} else {
		res.status(404).json(new ResponseModel(404, "ContactId is not valid!", null));
	}
}

async function uploadImage(req, res) {
	try {
		const { id, contact } = req.body;
		const file = req.files?.file || "";
		if (id) {
		  if (req.files?.file) {
			let file = req.files?.file;
			file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
			  console.log(err);
			});
		  }
		  
		  // Find the contact by its ID and update the icon field
		  const result = await Contacts.findOneAndUpdate(
			{
			  _id: id,
			  "contacts._id": contact,
			},
			{
			  $set: {
				"contacts.$.icon": file?.name,
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
			  message: "Contact not found",
			});
		  }
		}
	  } catch (error) {
		dashLogger.error(`controller: contactController; Request: ${req.originalUrl}; Error: ${error}`);
		res.status(404).json(404, error.message, error);
	  }
}

exports.createContact = createContact;
exports.updateContact = updateContact;
exports.deleteContact = deleteContact;
exports.getPagingContacts = getPagingContacts;
exports.getContactById = getContactById;
exports.uploadImage = uploadImage;
