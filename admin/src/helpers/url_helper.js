//permission

export const GET_ALL_PERMISSION = "/api/permission/getPermissions";

//Roles
export const GET_ALL_ROLES = "/api/roles/getRoles";
export const EDIT_ROLE_PERMISSION = "/api/role/editRolePermission";

export const ADD_NEW_ROLES = "/api/roles/addNewRole";
export const DELETE_ROLES = "/api/roles/deleteRole";
export const UPDATE_ROLES = "/api/role/editRole";


export const UPDATE_HOME_BANNER = '/api/v1/banner/update'

export const GET_HOME_BANNER = '/api/v1/banner'

//REGISTER
export const POST_FAKE_REGISTER = "/auth/signup";

//LOGIN
export const POST_FAKE_LOGIN = "/auth/signin";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/auth/forgot-password";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";
export const API_USER_LOGIN = "/api/user/login";

//login
export const POST_AUTHENTICATE = "/api/users/authenticate";

//BUNNY
export const URL_IMAGE_BUNNY = "https://agency88.b-cdn.net/";

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/api/user";

//user
export const GET_USERS = "/api/users";
// export const ADD_USERS = "/signup";
// export const DELETE_USER = "/api/users/delete";
export const SEARCH_USER = "/api/user/searchUser";

export const GET_USER_PERMISSION = "/api/users/user/permission";
// faqs
export const GET_FAQS = "/api/faqs";

export const GET_POSTS = "/api/posts/getPaging";
export const GET_POST_BY_SLUG = "/api/post/getBySlug";
export const GET_POST_BY_ID = "/api/posts/getById";
export const GET_SCHEMAS = "/api/schema";
export const GET_TAXONOMYS = "/api/taxonomy";
export const GET_TAGS = "/api/tag";
export const GET_PAGES = "/api/pages";
// export const GET_CATE = "/api/tag";

export const GET_TAXANOMY = "/api/taxanomy";

//Links
export const GET_LINKS = "/api/linkFooters";

//Google index
export const GOOGLEINDEX = "api/google/index"; //param
export const GOOGLEBATCHINDEX = "api/google/batchIndex"; // body

//Banner
export const BANNER = "api/banners";

//Bing index
export const BINGINDEX = "api/bing/index";

//Google Analytics
export const GGANALYTICS = "api/ggAnalytics";

//POSTS
export const API_POST_INSERT = "/api/posts";
export const API_POST_UPDATE = "/api/posts/update";
export const API_POST_DELETE = "/api/post/delete";

//Category
export const GET_CATES = "/api/category";
export const API_CATE = "/api/category";

//redirect
export const API_REDIRECT = "/api/redirect";
export const API_AUTOLINK = "/api/autolink";

//domains
export const API_DOMAINS = "/api/domains";
//tag
export const API_TAGS = "/api/tag";

//fp
export const API_FP = "/api/fp";

//
export const API_BlackList = "/api/blacklist";
export const API_WhiteList = "/api/whitelist";

//recruit
export const API_RECRUIT = "/api/recruits";

//category
export const API_CATEGORY = "/api/v1/category";


//User
export const API_USER_INSERT = "/api/user/insert";
export const API_USER_UPDATE = "/api/user/update";
export const API_USER_DELETE = "/api/user/delete";
export const API_USER_GETALL = "/api/user/getAll";
export const API_USER_GET_PAGING = "/api/user/getPaging";
export const API_USER_GET_PAGING_BY_ID = "/api/user/getById";

//Role
export const API_ROLE_INSERT = "/api/role/insert";
export const API_ROLE_UPDATE = "/api/role/update";
export const API_ROLE_DELETE = "/api/role/delete";
export const API_ROLE_GETALL = "/api/role/getAll";
export const API_ROLE_GET_PAGING = "/api/role/getPaging";
export const API_ROLE_GET_PAGING_BY_ID = "/api/role/getById";

//Action
export const API_ACTION_INSERT = "/api/action/insert";
export const API_ACTION_UPDATE = "/api/action/update";
export const API_ACTION_DELETE = "/api/action/delete";
export const API_ACTION_GETALL = "/api/action/getAll";
export const API_ACTION_GET_PAGING = "/api/action/getPaging";
export const API_ACTION_GET_PAGING_BY_ID = "/api/action/getById";

//RoleAction
export const API_ROLEACTION_INSERT = "/api/roleaction/insert";
export const API_ROLEACTION_UPDATE = "/api/roleaction/update";
export const API_ROLEACTION_INSERTMANY = "/api/roleaction/insertMany";
export const API_ROLEACTION_UPDATEMANY = "/api/roleaction/updateMany";
export const API_ROLEACTION_DELETE = "/api/roleaction/delete";
export const API_ROLEACTION_GET_PAGING = "/api/roleaction/getPaging";
export const API_ROLEACTION_GET_PAGING_BY_ID = "/api/roleaction/getById";


