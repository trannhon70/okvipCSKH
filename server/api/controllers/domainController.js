const { isValidObjectId } = require("mongoose");
const Domains = require("../../database/entities/Domains");
const PagedModel = require("../models/PagedModel");
const ResponseModel = require("../models/ResponseModel");
const { dashLogger } = require("../../logger");
const Contacts = require("../../database/entities/Contacts");
const ContactTypes = require("../../database/entities/ContactTypes");
const Banners = require("../../database/entities/Banners");
const Logo = require("../../database/entities/Logo");
const NoteModel = require("../../database/entities/Note");
const FooterModel = require("../../database/entities/Footer");
const path = require("path");
const LogoModel = require("../../database/entities/Logo");
const menuJun41 = require("../../database/entities/menuJun41");
const Posts = require("../../database/entities/Posts");

async function createDomain(req, res) {
  // if (req.actions.includes("createDomain")) {
  try {
    let domain = new Domains(req.body);
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

async function updateDomain(req, res) {
  if (req.actions.includes("updateDomain")) {
    try {
      let newDomain = {
        updatedTime: Date.now(),
        user: req.userId,
        ...req.body,
      };
      let updatedDomain = await Domains.findOneAndUpdate(
        { _id: req.params.id },
        newDomain
      );
      if (!updatedDomain) {
        let response = new ResponseModel(0, "No item found!", null);
        res.json(response);
      } else {
        let response = new ResponseModel(
          1,
          "Update domain success!",
          newDomain
        );
        res.json(response);
      }
    } catch (error) {
      dashLogger.error(
        `controller: domainController; Request: ${req.originalUrl}; Error: ${error}`
      );
      let response = new ResponseModel(404, error.message, error);
      res.json(response);
    }
  } else {
    res.sendStatus(403);
  }
}

async function deleteDomain(req, res) {
  if (req.actions.includes("deleteDomain")) {
    if (isValidObjectId(req.params.id)) {
      try {
        const domain = await Domains.findByIdAndDelete(req.params.id);
        if (!domain) {
          let response = new ResponseModel(0, "No item found!", null);
          res.json(response);
        } else {
          let response = new ResponseModel(1, "Delete domain success!", null);
          res.json(response);
        }
      } catch (error) {
        dashLogger.error(
          `controller: domainController; Request: ${req.originalUrl}; Error: ${error}`
        );
        let response = new ResponseModel(-2, error.message, error);
        res.json(response);
      }
    } else {
      res
        .status(404)
        .json(new ResponseModel(404, "DomainId is not valid!", null));
    }
  } else {
    res.sendStatus(403);
  }
}

async function getPagingDomains(req, res) {
  let pageSize = req.query.pageSize || 10;
  let pageIndex = req.query.pageIndex || 1;

  let searchObj = {};
  if (req.query.search) {
    searchObj = { domain: { $regex: ".*" + req.query.search + ".*" } };
  }
  try {
    let domains = await Domains.find(searchObj)
      .skip(pageSize * pageIndex - pageSize)
      .limit(parseInt(pageSize))
      .sort({
        createdTime: "desc",
      });
    let count = await Domains.find(searchObj).countDocuments();
    let totalPages = Math.ceil(count / pageSize);
    let pagedModel = new PagedModel(pageIndex, pageSize, totalPages, domains);
    res.json(pagedModel);
  } catch (error) {
    dashLogger.error(
      `controller: domainController; Request: ${req.originalUrl}; Error: ${error}`
    );
    let response = new ResponseModel(404, error.message, error);
    res.status(404).json(response);
  }
}

async function getDomainById(req, res) {
  if (isValidObjectId(req.params.id)) {
    try {
      let domain = await Domains.findById(req.params.id).populate("domain");
      res.json(domain);
    } catch (error) {
      dashLogger.error(
        `controller: domainController; Request: ${req.originalUrl}; Error: ${error}`
      );
      res.status(404).json(404, error.message, error);
    }
  } else {
    res
      .status(404)
      .json(new ResponseModel(404, "DomainId is not valid!", null));
  }
}

async function getPageByDomainId(req, res) {
  if (req.params.id) {
    try {
      let datas = [];
      let contactTypes = [];
      let listContactType = [];

      let domain = await Domains.findById(req.params.id);
      if (!domain) {
        let response = new ResponseModel(0, "Domain not found!", null);
        return res.json(response);
      } else {
        datas.push(domain);

        let contacts = await Contacts.find({ domain: domain._id })
          .populate("contactType")
          .sort({ order: "asc" });
        if (!contacts) {
          let response = new ResponseModel(0, "contact Not  found!", null);
          return res.json(response);
        } else {
          contacts.map((contact) => {
            if (listContactType.length == 0) {
              listContactType.push(contact.contactType);
            } else {
              if (
                !listContactType.find(
                  (item) => item._id == contact.contactType._id
                )
              ) {
                listContactType.push(contact.contactType);
              }
            }
          });

          contactTypes = listContactType.map((contactType) => {
            let listContact = contacts
              .filter((contact) => contact.contactType._id == contactType._id)
              .map((item) => {
                return {
                  _id: item._id,
                  title: item.title,
                  img: item.img,
                  slug: item.slug,
                  order: item.order,
                  description: item.description,
                  content: item.content,
                };
              });

            if (listContact.length > 0) {
              return {
                contactType,
                listContact,
              };
            }
          });
        }
        datas.push(contactTypes);
        res.json(datas);
      }
    } catch (error) {
      dashLogger.error(
        `controller: contactController; Request: ${req.originalUrl}; Error: ${error}`
      );
      let response = new ResponseModel(404, error.message, error);
      res.status(404).json(response);
    }
  } else {
    res
      .status(404)
      .json(
        new ResponseModel(404, "Not found domainId in query params!", null)
      );
  }
}

async function getByDomainId(req, res) {
  if (isValidObjectId(req.params.id)) {
    try {
      const domain = await Domains.findById(req.params.id);
      const [contact, contactType, banner, logo, note, footer] =
        await Promise.all([
          Contacts.findOne({ domain: domain._id }).sort({
            order: "asc",
          }),
          ContactTypes.findOne({ domain: domain._id }),
          Banners.findOne({ domain: domain._id }),
          Logo.findOne({ domain: domain._id }),
          NoteModel.findOne({ domain: domain._id }),
          FooterModel.findOne({ domain: domain._id }),
        ]);

      const result = [
        { key: "logo", result: logo },
        { key: "note", result: note },
        { key: "contact", result: contact },
        { key: "contact_type", result: contactType },
        { key: "footer", result: footer },
      ];

      return res.status(200).json({
        status: 1,
        data: result,
        // domain: domain,
        banner: banner,
        // logo: logo,
        // note: note,
        // contact: contact,
        // contactType: contactType,
        // footer: footer,
      });
    } catch (error) {
      dashLogger.error(
        `controller: domainController; Request: ${req.originalUrl}; Error: ${error}`
      );
      res.status(404).json(404, error.message, error);
    }
  } else {
    res
      .status(404)
      .json(new ResponseModel(404, "DomainId is not valid!", null));
  }
}

async function upDateUIDomain(req, res) {
  try {
    const {
      id,
      data,
    } = req.body;
    const parsedData = JSON.parse(data);
   
    if (id) {
      // banner
      const background = req.files?.background || "";
      if (req.files?.background) {
        let file = req.files?.background;
        file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
          console.log(err);
        });
      }
      // logo 
      const fileLogo = req.files?.fileLogo || "";
      if (req.files?.fileLogo) {
        let file = req.files?.fileLogo;
        file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
          console.log(err);
        });
      }

      // logo1 
      const fileLogo1 = req.files?.fileLogo1 || "";
      if (req.files?.fileLogo1) {
        let file = req.files?.fileLogo1;
        file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
          console.log(err);
        });
      }

      // note logo
      const filenote = req.files?.noteLogo || "";
      if (req.files?.noteLogo) {
        let file = req.files?.noteLogo;
        file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
          console.log(err);
        });
      }

      await Banners.findOneAndUpdate({domain: id},{
        img: background.name
      })

 
      parsedData.map(async(item, index) => {
        if(item.key === 'logo'){
          await LogoModel.findOneAndUpdate({domain : item?.result.domain, _id : item?.result?._id},
            {
              order1: item?.result?.order1,
              logo: fileLogo?.name,
              logo1: fileLogo1?.name,
              title: item?.result?.title,
              content: item?.result?.content
            }
            )
        }
        if(item?.key === "note"){
          await NoteModel.findOneAndUpdate({_id :item?.result?._id, domain : id}, {
            title: item?.result?.title,
            icon: filenote.name,
            description: item?.result?.description,
            borderRadius: item?.result?.borderRadius,
            backgroundColor: item?.result?.backgroundColor,
            color: item?.result?.color,
            order1: item?.result?.order1,
          })
        }
        if(item?.key === "contact"){
          
          await Contacts.findOneAndUpdate({_id: item?.result?._id, domain: id}, {
            order1: item?.result?.order1,
            contacts: item?.result?.contacts,
            updatedTime:Date.now(),
          },{new: true})
        }
        if(item?.key === "contact_type"){
          
          await ContactTypes.findOneAndUpdate({_id: item?.result?._id, domain: id}, {
            order1: item?.result?.order1,
            contactType: item?.result?.contactType,
            updatedTime:Date.now(),
          },{new: true})
        }
        if(item?.key === "footer"){
          await FooterModel.findOneAndUpdate({_id :item?.result?._id, domain : id}, {
            title: item?.result?.title,
            icon: filenote.name,
            description: item?.result?.description,
            borderRadius: item?.result?.borderRadius,
            backgroundColor: item?.result?.backgroundColor,
            color: item?.result?.color,
            order1: item?.result?.order1,
            slug: item?.result?.slug,
          })
        }
      })
      return res.status(200).json({
        status: 1,
      });
    }
  } catch (error) {
    console.log(error);
    dashLogger.error(
      `controller: domainController; Request: ${req.originalUrl}; Error: ${error}`
    );
    res.status(404).json(404, error.message, error);
  }
}

async function upDateUIDomainJun41(req, res){
  try {
    const {
      id,
      data,
    } = req.body;
    const parsedData = JSON.parse(data);
   
    if (id) {
      // banner
      const background = req.files?.background || "";
      if (req.files?.background) {
        let file = req.files?.background;
        file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
          console.log(err);
        });
      }
      // logo 
      const fileLogo = req.files?.fileLogo || "";
      if (req.files?.fileLogo) {
        let file = req.files?.fileLogo;
        file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
          console.log(err);
        });
      }

      // logo1 
      const fileLogo1 = req.files?.fileLogo1 || "";
      if (req.files?.fileLogo1) {
        let file = req.files?.fileLogo1;
        file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
          console.log(err);
        });
      }

      // note logo
      const filenote = req.files?.noteLogo || "";
      if (req.files?.noteLogo) {
        let file = req.files?.noteLogo;
        file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
          console.log(err);
        });
      }

       // footer logo
       const logoFooter = req.files?.logoFooter || "";
       if (req.files?.logoFooter) {
         let file = req.files?.logoFooter;
         file?.mv(path.join(__dirname, `../../public/${file?.name}`), (err) => {
           console.log(err);
         });
       }

      await Banners.findOneAndUpdate({domain: id},{
        img: background.name
      })

      parsedData.map(async(item, index) => {
        if(item.key === 'logo'){
          await LogoModel.findOneAndUpdate({domain : item?.result.domain, _id : item?.result?._id},
            {
              order1: item?.result?.order1,
              logo: fileLogo?.name,
              logo1: fileLogo1?.name,
              title: item?.result?.title,
              content: item?.result?.content
            }
            )
        }
        if(item?.key === "note"){
          await NoteModel.findOneAndUpdate({_id :item?.result?._id, domain : id}, {
            title: item?.result?.title,
            icon: filenote.name,
            description: item?.result?.description,
            borderRadius: item?.result?.borderRadius,
            backgroundColor: item?.result?.backgroundColor,
            color: item?.result?.color,
            order1: item?.result?.order1,
          })
        }
        if(item?.key === "contact"){
          
          await Contacts.findOneAndUpdate({_id: item?.result?._id, domain: id}, {
            order1: item?.result?.order1,
            contacts: item?.result?.contacts,
            updatedTime:Date.now(),
          },{new: true})
        }
        if(item?.key === "contact_type"){
          
          await ContactTypes.findOneAndUpdate({_id: item?.result?._id, domain: id}, {
            order1: item?.result?.order1,
            contactType: item?.result?.contactType,
            updatedTime:Date.now(),
          },{new: true})
        }
        if(item?.key === "menu_jun41"){
          await menuJun41.findOneAndUpdate({_id :item?.result?.menuJun?._id, domain : id}),{
            titleLink: item?.result?.menuJun?.titleLink,
            backgroundColor: item?.result?.menuJun?.backgroundColor,
            borderRadius: item?.result?.menuJun?.borderRadius,
            color: item?.result?.menuJun?.color,
            order1: item?.result?.menuJun?.order1,
            city: item?.result?.menuJun?.city,
            titleIntroduce: item?.result?.menuJun?.titleIntroduce,
            descriptionIntroduce: item?.result?.menuJun?.descriptionIntroduce,
            imageIntroduce: item?.result?.menuJun?.imageIntroduce,
            titleNew: item?.result?.menuJun?.titleNew,
            titleCustormor: item?.result?.menuJun?.titleCustormor,
            custormor: item?.result?.menuJun?.custormor,
            titleQA: item?.result?.menuJun?.titleQA,
            descriptionQA: item?.result?.menuJun?.descriptionQA,
            descriptionQA: item?.result?.menuJun?.descriptionQA,
            titleNT: item?.result?.menuJun?.titleNT,
            domain: item?.result?.menuJun?.domain,
          }
          await Posts.findOneAndUpdate({_id :item?.result?.postRT?._id, domain : id},{
            description: item?.result?.postRT?.description
          })
        }
        if(item?.key === "footer"){
          await FooterModel.findOneAndUpdate({_id :item?.result?._id, domain : id}, {
            title: item?.result?.title,
            logo: logoFooter.name,
            description: item?.result?.description,
            borderRadius: item?.result?.borderRadius,
            backgroundColor: item?.result?.backgroundColor,
            color: item?.result?.color,
            order1: item?.result?.order1,
            slug: item?.result?.slug,
          })
        }
      })
      return res.status(200).json({
        status: 1,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function getByDomainIdJun41(req, res) {
  if (isValidObjectId(req.params.id)) {
    try {
      const domain = await Domains.findById(req.params.id);
      const [contact, contactType, banner, logo, note, footer, menuJun, postNT, postRT, post] =
        await Promise.all([
          Contacts.findOne({ domain: domain._id }).sort({
            order: "asc",
          }),
          ContactTypes.findOne({ domain: domain._id }),
          Banners.findOne({ domain: domain._id }),
          Logo.findOne({ domain: domain._id }),
          NoteModel.findOne({ domain: domain._id }),
          FooterModel.findOne({ domain: domain._id }),
          menuJun41.findOne({ domain: domain._id }),
          Posts.findOne({ domain: domain._id, status: 0 }),
          Posts.findOne({ domain: domain._id, status: 1 }),
          Posts.find({ domain: domain._id, status: 2 }),
        ]);
        const menu = { }
        menu.menuJun = menuJun,
        menu.postNT = postNT,
        menu.postRT = postRT,
        menu.post = post
        
        const result = [
          { key: "logo", result: logo },
          { key: "note", result: note },
          { key: "contact", result: contact },
          { key: "contact_type", result: contactType },
          {key: "menu_jun41", result : menu},
          { key: "footer", result: footer },
        ];

      return res.status(200).json({
        status: 1,
        data: result,
        banner: banner,
      });
    } catch (error) {
      console.log(error);
      dashLogger.error(
        `controller: domainController; Request: ${req.originalUrl}; Error: ${error}`
      );
      res.status(404).json(404, error.message, error);
    }
  }
  else {
    res
      .status(404)
      .json(new ResponseModel(404, "DomainId is not valid!", null));
  }
  
}
exports.createDomain = createDomain;
exports.updateDomain = updateDomain;
exports.deleteDomain = deleteDomain;
exports.getPagingDomains = getPagingDomains;
exports.getDomainById = getDomainById;
exports.getPageByDomainId = getPageByDomainId;
exports.getByDomainId = getByDomainId;
exports.upDateUIDomain = upDateUIDomain;
exports.getByDomainIdJun41 = getByDomainIdJun41;
exports.upDateUIDomainJun41 = upDateUIDomainJun41;
