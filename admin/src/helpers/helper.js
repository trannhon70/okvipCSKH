import { APIClient } from "./api_helper";
import * as url from "./url_helper";
import axios from "axios";

const api = new APIClient();

export const getLoggedInUser = () => {
  const user = sessionStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};
//permission\
export const getAllPermissions = () => api.get(url.GET_ALL_PERMISSION);
//roles
// export const getAllRole = (pageSize, pageIndex) =>
//   api.get(`${url.GET_ALL_ROLES}?pageSize=${pageSize}&pageIndex=${pageIndex}`);
export const editRolePermission = (permission, roleId) =>
  axios.patch(url.EDIT_ROLE_PERMISSION, {
    permission: permission,
    roleId: roleId,
  });
export const addNewRole = (roleName) =>
  axios.post(`${url.ADD_NEW_ROLES}`, { roleName: roleName });
// export const deleteRole = (roleId) =>
//   axios.delete(`${url.DELETE_ROLES}/${roleId}`);
//login
export const postLogin = (data) => api.create(url.API_USER_LOGIN, data);

// get all faqs
export const getAllFaqs = () => api.get(url.GET_FAQS);
export const getFaqByID = (id) => api.get(url.GET_FAQS + "/" + id);
export const addFaq = (body) => api.create(`${url.GET_FAQS}`, body);
export const updateFaq = (id, body) =>
  api.update(`${url.GET_FAQS}/${id}`, body);
export const deleteFaqs = (id) => api.delete(`${url.GET_FAQS}/remove/${id}`);
export const searchFAQ = (q) => api.get(`${url.GET_FAQS}/faq/search/?q=${q}`);
export const formatFaqData = (data) => {
  if (data) {
    return data.map((item) => ({ ...item, key: item._id }));
  }
  return [];
};

export const getAllUsers = (data) => api.get(`${url.GET_USERS}`);
export const getUser = (id) => api.get(`${url.GET_USERS}/${id}`);
export const addUser = (body) => api.create(`${url.GET_USERS}/signup`, body);
// export const updateUser = (id, body) =>
//   api.update(`${url.GET_USERS}/${id}`, body);
// export const deleteUser = (id) => api.delete(`${url.GET_USERS}/delete/${id}`);
export const searchUser = (search) =>
  api.get(`${url.SEARCH_USER}?search=${search}`);

export const createUserPermission = (body) =>
  api.create(url.GET_USER_PERMISSION, body);
export const getUserPermission = (id) =>
  api.get(`${url.GET_USER_PERMISSION}/${id}`);
export const updateUserPermission = (id, body) =>
  api.update(`${url.GET_USER_PERMISSION}/${id}`, body);
export const deleteUserPermission = (id) =>
  api.delete(`${url.GET_USER_PERMISSION}/delete/${id}`);
// schema
export const getAllSchemas = () => api.get(`${url.GET_SCHEMAS}/getAll`);
export const getSchema = (id) => api.get(`${url.GET_SCHEMAS}/${id}`);
export const addSchema = (body) =>
  api.create(`${url.GET_SCHEMAS}/insert`, body);
export const updateSchema = (id, body) =>
  api.update(`${url.GET_SCHEMAS}/update/${id}`, body);
export const deleteSchema = (id) =>
  api.delete(`${url.GET_SCHEMAS}/delete/${id}`);
export const searchSchema = (q) =>
  api.get(`${url.GET_SCHEMAS}/getPaging/search?q=${q}`);

// Taxonomy
export const getAllTaxonomies = () => api.get(url.GET_TAXONOMYS);
export const getTaxonomy = (id) => api.get(`${url.GET_TAXONOMYS}/${id}`);
export const addTaxonomy = (body) =>
  api.createWithFormData(`${url.GET_TAXONOMYS}`, body);
export const updateTaxonomy = (id, body) =>
  api.updateWithFormData(`${url.GET_TAXONOMYS}/${id}`, body);
export const deleteTaxonomy = (slug) =>
  api.delete(`${url.GET_TAXONOMYS}/remove/${slug}`);
export const deleteAllChildTaxonomy = (slug) =>
  api.delete(`${url.GET_TAXONOMYS}/removeTax/${slug}`);
export const searchTaxonomy = (q) =>
  api.get(`${url.GET_TAXONOMYS}/tax/search?q=${q}`);
export const getByType = (type) =>
  api.get(`${url.GET_TAXONOMYS}/getByType/${type}`);
// Tags


export const updateHomeBanner = (data) => api.update(url.UPDATE_HOME_BANNER, data)

export const getHomeBanner = () => api.get(url.GET_HOME_BANNER)

export const getPagingTags = (pageSize, pageIndex, filter) =>
  api.get(
    `${url.GET_TAGS}/getPaging?pageSize=${pageSize}&pageIndex=${pageIndex}&search=${filter}`
  );
export const getAllTag = () => api.get(`${url.GET_TAGS}/getAllTag`);

export const getTag = (id) => api.get(`${url.GET_TAGS}/${id}`);
export const addTag = (body) => api.create(`${url.GET_TAGS}/insert`, body);
export const updateTag = (id, body) =>
  api.update(`${url.GET_TAGS}/update/${id}`, body);
export const deleteTag = (slug) => api.delete(`${url.GET_TAGS}/delete/${slug}`);
export const deleteAllChildTag = (slug) =>
  api.delete(`${url.GET_TAGS}/removeTax/${slug}`);
export const searchtag = (q, pageSize = 10, pageIndex = 1) =>
  api.get(
    `${url.GET_TAGS}/getPaging?search=${q}&pageSize=${pageSize}&pageIndex=${pageIndex}`
  );
// Categories
export const getAllCategory = (pageSize = 10, pageIndex = 1) =>
  api.get(
    `${url.GET_CATES}/getPaging?pageSize=${pageSize}&pageIndex=${pageIndex}`
  );
export const getAllCateParent = () => api.get(`${url.GET_CATES}/getAllCate`);
export const getCategory = (id) => api.get(`${url.GET_CATES}/${id}`);
export const addCategory = (body) =>
  api.create(`${url.GET_CATES}/insert`, body);
export const updateCategory = (id, body) =>
  api.update(`${url.GET_CATES}/update/${id}`, body);
export const deleteCategory = (slug) =>
  api.delete(`${url.GET_CATES}/delete/${slug}`);
export const deleteCategoryChild = (slug) =>
  api.delete(`${url.GET_CATES}/removeTax/${slug}`);
export const searchCategory = (q, pageSize = 10, pageIndex = 1) =>
  api.get(
    `${url.GET_CATES}/getPaging?search=${q}&pageSize=${pageSize}&pageIndex=${pageIndex}`
  );
// posts
export const getAllPosts = (
  pageSize,
  pageIndex,
  search,
  cate = "",
  status = ""
) => {
  return api.get(
    `${url.GET_POSTS}?pageSize=${pageSize}&pageIndex=${pageIndex}&search=${search}&cate=${cate}&status=${status}`
  );
};

export const getPostOnlyName = () => api.get(`/api/post/getOnlyName`);
export const getPostById = (id) => api.get(`${url.GET_POST_BY_ID}/${id}`);
export const getPostByStatus = (data) =>
  api.get(`${url.GET_POSTS}/getByStatus`, data);
export const getPostByStatusSlug = (data) =>
  api.get(`${url.GET_POSTS}/getBy/StatusAndSlug`, data);
export const getPostByTax = (data) =>
  api.get(`${url.GET_POSTS}/getPostByTax`, data);
export const getPostBySlug = (slug, data) =>
  api.get(`${url.GET_POST_BY_SLUG}/${slug}`, data);
export const searchPost = (limit, skip, q) =>
  api.get(`${url.GET_POSTS}/post/search?q=${q}&limit=${limit}&skip=${skip}`);
export const getRelatedPosts = () => api.get(`${url.GET_POSTS}/related`);
export const createPost = (data) => api.create(`${url.API_POST_INSERT}`, data);
export const editPost = (id, data) =>
  api.update(`${url.API_POST_UPDATE}/${id}`, data);
export const deletePost = (id) => api.delete(`${url.API_POST_DELETE}/${id}`);
export const getAllByTax = (id, limit, skip) =>
  api.get(`${url.GET_POSTS}/getAllByTax?limit=${limit}&skip=${skip}&tax=${id}`);
export const getPostXML = () => api.get(`${url.GET_POSTS}/getPosts/sitemap`);
// pages
export const getAllPages = () => api.get(`${url.GET_PAGES}`);
export const searchPages = (data) =>
  api.get(`${url.GET_PAGES}/page/search`, data);
export const getPageById = (id) => api.get(`${url.GET_PAGES}/${id}`);
export const createPage = (data) => api.create(`${url.GET_PAGES}`, data);
export const updatePage = (data) =>
  api.update(`${url.GET_PAGES}/${data.get("id")}`, data);
export const deletePage = (id) => api.delete(`${url.GET_PAGES}/remove/${id}`);

//links
export const getAllLinks = () => api.get(`${url.GET_LINKS}/getAll`);
export const getLinkSearch = (text) =>
  api.get(`${url.GET_LINKS}/search/?q=${text}`);
export const getLinkByName = (name) =>
  api.get(`${url.GET_LINKS}/getByName/${name}`);
export const getLinkById = (id) => api.get(`${url.GET_LINKS}/getById/${id}`);
export const createLink = (data) => api.create(`${url.GET_LINKS}`, data);
export const updateLink = (id, data) =>
  api.update(`${url.GET_LINKS}/${id}`, data);
export const removeLink = (id) => api.delete(`${url.GET_LINKS}/remove/${id}`);

//google index
export const googleIndex = (link) => api.create(`${url.GOOGLEINDEX}/${link}`);
export const googleBatchIndex = (data) =>
  api.create(`${url.GOOGLEBATCHINDEX}`, data);

//banners
export const getAllBanner = (limit, skip, slug) =>
  api.get(`${url.BANNER}?limit=${limit}&skip=${skip}&slug=${slug}`);
export const getById = (id) => api.get(`${url.BANNER}/getById/${id}`);
export const getByPosition = (position) =>
  api.get(`${api.BANNER}/getByPosition/${position}`);
export const createBanner = (data) => api.create(`${url.BANNER}`, data);
export const updateBanner = (id, data) =>
  api.update(`${url.BANNER}/${id}`, data);
export const removeBanner = (id) => api.delete(`${url.BANNER}/remove/${id}`);
export const getByPage = (slug) => api.get(`${url.BANNER}/getByPage/${slug}`);

// bing index
export const bingIndex = (data) => api.create(`${url.BINGINDEX}`, data);

//statistics
export const getAllByTaxDate = (id, start, end) =>
  api.get(
    `${url.GET_POSTS}/getAllByTaxDate?tax=${id}&start=${start}&end=${end}`
  );
export const getAllByDate = (start, end, limit, skip) =>
  api.get(
    `${url.GET_POSTS}/getAllByDate?start=${start}&end=${end}&limit=${limit}&skip=${skip}`
  );
export const getMaxPosts = () => api.get(`${url.GET_POSTS}/getMax`);
export const getMinPosts = () => api.get(`${url.GET_POSTS}/getMin`);
export const getMaxUsers = () => api.get(`${url.GET_POSTS}/getMax/user`);
export const getMinUsers = () => api.get(`${url.GET_POSTS}/getMin/user`);
export const userStatistics = (start, end, limit, skip, q) =>
  api.get(
    `${url.GET_POSTS}/getStatictis/staff?start=${start}&end=${end}&limit=${limit}&skip=${skip}&q=${q}`
  );

//google analytics
export const ggAnalytics = (metrics, startDate, endDate, dimensions) =>
  api.get(
    `${url.GGANALYTICS}?metrics=${metrics}&startDate=${startDate}&endDate=${endDate}&dimensions=${dimensions}`
  );
export const ggAnalyticsGraph = (metric) =>
  api.get(`${url.GGANALYTICS}/graph?metric=${metric}`);

//Category

export const getPagingCate = (data) =>
  api.get(
    `${url.API_CATE}/getPaging?pageSize=${data.pageSize}&pageIndex=${data.pageIndex}&search=${data.search}`
  );
export const getAllCate = () => api.get(`${url.API_CATE}/getAllCate`);

export const getCateParent = () => api.get(`${url.API_CATE}/getCateParent`);
export const getCateById = (id) => {
  api.get(`${url.API_CATE}/getById/${id}`);
};
export const updateCate = (id, data) => {
  api.update(`${url.API_CATE}/update/${id}`, data);
};
export const deleteCate = (id) => {
  api.delete(`${url.API_CATE}/delete/${id}`);
};
export const insertCate = (data) => {
  api.create(`${url.API_CATE}/insert`, data);
};
//Action
//Action
// export const insertAction = (data) => api.create(url.API_ACTION_INSERT, data);
// export const updateAction = (id, data) =>
//   api.update(`${url.API_ACTION_UPDATE}/${id}`, data);
// export const deleteAction = (id, data) =>
//   api.delete(`${url.API_ACTION_DELETE}/${id}`, data);
// export const getAllAction = (data) => api.get(url.API_ACTION_GETALL, data);
// export const getPagingAction = (data) =>
//   api.get(url.API_ACTION_GET_PAGING, data);
// export const getActionById = (id, data) =>
//   api.get(`${url.API_ACTION_GET_PAGING_BY_ID}/${id}`, data);

//Redirect
export const insertRedirect = (data) =>
  api.create(`${url.API_REDIRECT}/create`, data);
export const updateRedirect = (id, data) =>
  api.update(`${url.API_REDIRECT}/update/${id}`, data);
export const deleteRedirect = (id, data) =>
  api.delete(`${url.API_REDIRECT}/remove/${id}`, data);
// export const getAllAction = (data) => api.get(url.API_ACTION_GETALL, data);
export const getPagingRedirect = (data) =>
  api.get(
    `${url.API_REDIRECT}/getPaging?pageSize=${data.pageSize}&pageIndex=${data.pageIndex}&search=${data.search}`
  );
//autolink
export const getAutolink = (id) => api.get(`${url.API_AUTOLINK}/${id}`);

export const insertAutolink = (data) => api.create(`${url.API_AUTOLINK}`, data);
export const updateAutolink = (id, data) =>
  api.update(`${url.API_AUTOLINK}/${id}`, data);
export const deleteAutolink = (id) =>
  api.delete(`${url.API_AUTOLINK}/remove/${id}`);
// export const getAllAction = (data) => api.get(url.API_ACTION_GETALL, data);
export const getPagingAutolink = (data) =>
  api.get(
    `${url.API_AUTOLINK}?limit=${data.pageSize}&skip=${data.pageIndex}&search=${data.search}`
  );

//domains
export const insertDomains = (data) => api.create(`${url.API_DOMAINS}`, data);

export const getpagingDomains = (pageSize, pageIndex, filter) =>
  api.get(
    `${url.API_DOMAINS}?pageSize=${pageSize}&pageIndex=${pageIndex}&search=${filter}`
  );

export const deleteDomains = (id) =>
  api.delete(`${url.API_DOMAINS}/remove/${id}`);

export const updateDomains = (id, data) =>
  api.update(`${url.API_DOMAINS}/${id}`, data);
export const getAllDomains = () => {
  return api.get(`${url.API_DOMAINS}`);
};
// export const insertDomains = (data) => api.create(`${url.API_DOMAINS}`, data);

// export const getpagingDomains = () => api.get(`${url.API_DOMAINS}`);

//fp
export const getFP = (id) => api.get(`${url.API_FP}/getById/${id}`);
export const addFP = (body) => api.create(`${url.API_FP}/insert`, body);
export const updateFP = (id, body) =>
  api.update(`${url.API_FP}/update/${id}`, body);
export const deleteFP = (slug) => api.delete(`${url.API_FP}/delete/${slug}`);
export const searchFP = (pageSize = 10, pageIndex = 1, q = "") =>
  api.get(
    `${url.API_FP}/getPaging?search=${q}&pageSize=${pageSize}&pageIndex=${pageIndex}`
  );

//blacklist
export const getBlacklist = (data) =>
  api.get(
    `${url.API_BlackList}?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}&search=${data.search}`
  );
export const addBlacklist = (data) => api.create(`${url.API_BlackList}`, data);
export const editBlacklist = (id, data) =>
  api.update(`${url.API_BlackList}/${id}`, data);
export const removeBlacklist = (id) => api.delete(`${url.API_BlackList}/${id}`);

//whitelist
export const getWhitelist = (data) =>
  api.get(
    `${url.API_WhiteList}?pageIndex=${data.pageIndex}&pageSize=${data.pageSize}&search=${data.search}`
  );
export const addWhitelist = (data) => api.create(`${url.API_WhiteList}`, data);
export const editWhitelist = (id, data) =>
  api.update(`${url.API_WhiteList}/${id}`, data);
export const removeWhitelist = (id) => api.delete(`${url.API_WhiteList}/${id}`);

export const addRecruit = (body) => api.create(`${url.API_RECRUIT}`, body);
export const getRecruitById = (id) =>
  api.get(`${url.API_RECRUIT}/getRecruitById/${id}`);

export const getAllRecruits = (
  pageSize = 10,
  pageIndex = 1,
  search = "",
  domain = "",
  status
) =>
  api.get(
    `${url.API_RECRUIT}/getAllRecruits?search=${search}&pageSize=${pageSize}&pageIndex=${pageIndex}&domain=${domain}&status=${status}`
  );

export const deleteRecruit = (id) => api.delete(`${url.API_RECRUIT}/${id}`);
export const updateRecruit = (id, data) =>
  api.update(`${url.API_RECRUIT}/update/${id}`, data);

///category
export const createCategory = (data) =>
  api.create(`${url.API_CATEGORY}/create`, data);


//User
export const insertUser = (data) => api.create(url.API_USER_INSERT, data);
export const updateUser = (id, data) => api.update(`${url.API_USER_UPDATE}/${id}`, data);
export const deleteUser = (id, data) => api.delete(`${url.API_USER_DELETE}/${id}`, data);
export const getAllUser = (data) => api.get(url.API_USER_GETALL, data);
export const getPagingUser = (data) => api.get(url.API_USER_GET_PAGING, data);
export const getUserById = (id, data) => api.get(`${url.API_USER_GET_PAGING_BY_ID}/${id}`, data);

//Role
export const insertRole = (data) => api.create(url.API_ROLE_INSERT, data);
export const updateRole = (id, data) => api.update(`${url.API_ROLE_UPDATE}/${id}`, data);
export const deleteRole = (id, data) => api.delete(`${url.API_ROLE_DELETE}/${id}`, data);
export const getAllRole = (data) => api.get(url.API_ROLE_GETALL, data);
export const getPagingRole = (data) => api.get(url.API_ROLE_GET_PAGING, data);
export const getRoleById = (id, data) => api.get(`${url.API_ROLE_GET_PAGING_BY_ID}/${id}`, data);

//Action
export const insertAction = (data) => api.create(url.API_ACTION_INSERT, data);
export const updateAction = (id, data) => api.update(`${url.API_ACTION_UPDATE}/${id}`, data);
export const deleteAction = (id, data) => api.delete(`${url.API_ACTION_DELETE}/${id}`, data);
export const getAllAction = (data) => api.get(url.API_ACTION_GETALL, data);
export const getPagingAction = (data) => api.get(url.API_ACTION_GET_PAGING, data);
export const getActionById = (id, data) => api.get(`${url.API_ACTION_GET_PAGING_BY_ID}/${id}`, data);

//RoleAction
export const insertRoleAction = (data) => api.create(url.API_ROLEACTION_INSERT, data);
export const updateRoleAction = (id, data) => api.update(`${url.API_ROLEACTION_UPDATE}/${id}`, data);
export const insertManyRoleAction = (data) => api.create(url.API_ROLEACTION_INSERTMANY, data);
export const updateManyRoleAction = (id, data) => api.update(`${url.API_ROLEACTION_UPDATEMANY}/${id}`, data);
export const deleteRoleAction = (id, data) => api.delete(`${url.API_ROLEACTION_DELETE}/${id}`, data);
export const getPagingRoleAction = (data) => api.get(url.API_ROLEACTION_GET_PAGING, data);
export const getRoleActionById = (id, data) => api.get(`${url.API_ROLEACTION_GET_PAGING_BY_ID}/${id}`, data);

