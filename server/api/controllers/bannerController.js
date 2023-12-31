const { isValidObjectId } = require("mongoose");
const Banners = require("../../database/entities/Banners");
const PagedModel = require("../models/PagedModel");
const ResponseModel = require("../models/ResponseModel");
const {dashLogger} = require('../../logger');

async function createBanner(req, res) {
	// if (req.actions.includes("createBanner")) {
		try {
			let banner = new Banners(req.body);
			banner.createdTime = Date.now();
			let newBanner = await banner.save();
			let response = new ResponseModel(1, "Create banner success!", newBanner);
			res.json(response);
		} catch (error) {
			dashLogger.error(`controller: bannerController; Request: ${req.originalUrl}; Error: ${error}`);
			let response = new ResponseModel(404, error.message, error);
			res.json(response);
		}
	// } else {	
	// 	res.sendStatus(403);
	// }
}

async function updateBanner(req, res) {
	if (req.actions.includes("updateBanner")) {
		try {
			let newBanner = {
				updatedTime: Date.now(),
				user: req.userId,
				...req.body,
			};
			let updatedBanner = await Banners.findOneAndUpdate(
				{ _id: req.params.id },
				newBanner
			);
			if (!updatedBanner) {
				let response = new ResponseModel(0, "No item found!", null);
				res.json(response);
			} else {
				let response = new ResponseModel(
					1,
					"Update banner success!",
					newBanner
				);
				res.json(response);
			}
		} catch (error) {
			dashLogger.error(`controller: bannerController; Request: ${req.originalUrl}; Error: ${error}`);
			let response = new ResponseModel(404, error.message, error);
			res.json(response);
		}
	} else {
		res.sendStatus(403);
	}
}

async function deleteBanner(req, res) {
	if (req.actions.includes("deleteBanner")) {
		if (isValidObjectId(req.params.id)) {
			try {
				const banner = await Banners.findByIdAndDelete(req.params.id);
				if (!banner) {
					let response = new ResponseModel(0, "No item found!", null);
					res.json(response);
				} else {
					let response = new ResponseModel(
						1,
						"Delete banner success!",
						null
					);
					res.json(response);
				}
			} catch (error) {
				dashLogger.error(`controller: bannerController; Request: ${req.originalUrl}; Error: ${error}`);
				let response = new ResponseModel(-2, error.message, error);
				res.json(response);
			}
		} else {
			res.status(404).json(new ResponseModel(404, "BannerId is not valid!", null));
		}
	} else {
		res.sendStatus(403);
	}
}

async function getPagingBanners(req, res) {
	let pageSize = req.query.pageSize || 10;
	let pageIndex = req.query.pageIndex || 1;

	let searchObj = {};
	if (req.query.search) {
		searchObj = { slug: { $regex: ".*" + req.query.search + ".*" } };
	}

	if(req.query.domain){
		searchObj = { domain: req.query.domain };
	}

	try {
		let banners = await Banners.find(searchObj)
			.skip(pageSize * pageIndex - pageSize)
			.limit(parseInt(pageSize))
			.sort({
				createdTime: "desc",
			});
		let count = await Banners.find(searchObj).countDocuments();
		let totalPages = Math.ceil(count / pageSize);
		let pagedModel = new PagedModel(pageIndex, pageSize, totalPages, banners);
		res.json(pagedModel);
	} catch (error) {
		dashLogger.error(`controller: bannerController; Request: ${req.originalUrl}; Error: ${error}`);
		let response = new ResponseModel(404, error.message, error);
		res.status(404).json(response);
	}
}

async function getBannerById(req, res) {
	if (isValidObjectId(req.params.id)) {
		try {
			let banner = await Banners.findById(req.params.id);
			res.json(banner);
		} catch (error) {
			dashLogger.error(`controller: bannerController; Request: ${req.originalUrl}; Error: ${error}`);
			res.status(404).json(404, error.message, error);
		}
	} else {
		res.status(404).json(new ResponseModel(404, "BannerId is not valid!", null));
	}
}

exports.createBanner = createBanner;
exports.updateBanner = updateBanner;
exports.deleteBanner = deleteBanner;
exports.getPagingBanners = getPagingBanners;
exports.getBannerById = getBannerById;