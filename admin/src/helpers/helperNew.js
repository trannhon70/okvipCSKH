import { APIClient } from "./api_helper";
import * as url from "./url_helper_new";
import axios from "axios";
const api = new APIClient();

//Category
export const createCategory = (data) =>
  api.create(`${url.API_CATEGORY}/create`, data);

export const getAllCategory = () => api.get(`${url.API_CATEGORY}/getAll`);
export const deleteCategory = (id) =>
  api.delete(`${url.API_CATEGORY}/delete/${id}`);

export const updateCategory = (data) =>
  api.update(`${url.API_CATEGORY}/update`, data);
export const getPagingCategory = (searchText, pageSize, pageIndex) =>
  api.get(
    `${url.API_CATEGORY}/getPaging?search=${searchText}&pageSize=${pageSize}&pageIndex=${pageIndex}`
  );

export const getCoursesByCategory = (id) =>
  api.get(`${url.API_COURSE}/get-all-courses-by-category-id/${id}`);

export const getAllCourse = () => {
  return api.get(`${url.API_COURSE}/get-all-courses`)
}

//post
export const createPost = (data) => api.create(`${url.API_POST}/create`, data);
export const getPagingPost = (
  searchInput,
  pageIndex,
  pageSize,
  valueStatus,
  valueCate
) =>
  api.get(
    `${url.API_POST}/getPaging?search=${searchInput}&pageIndex=${pageIndex}&pageSize=${pageSize}&valueStatus=${valueStatus}&valueCate=${valueCate}`
  );
export const deletePost = (id) => api.delete(`${url.API_POST}/delete/${id}`);

export const getByIdPost = (id) => api.get(`${url.API_POST}/getById/${id}`);
export const updatePost = (id, data) =>
  api.update(`${url.API_POST}/update/${id}`, data);

//login
export const postLogin = (data) => api.create(url.API_USER_LOGIN, data);

export const getPagingNews = (searchInput, pageIndex, pageSize, status) =>
  api.get(
    `${url.API_NEWS}/getPaging?search=${searchInput}&pageIndex=${pageIndex}&pageSize=${pageSize}&status=${status}`
  );

export const createNew = (data) => api.create(`${url.API_NEWS}`, data);

export const updateNew = (id, data) =>
  api.update(`${url.API_NEWS}/${id}`, data);

export const getNewsById = (id) => api.get(`${url.API_NEWS}/${id}`);

export const deleteNew = (id) => api.delete(`${url.API_NEWS}/${id}`);

export const createCourse = (data) => api.create(`${url.API_COURSE}`, data);
export const updateCourse = (data) => api.update(`${url.API_COURSE}`, data);
export const deleteCourse = (id) => api.delete(`${url.API_COURSE}/${id}`);

export const getPagingCourse = (
  pageIndex = 1,
  pageSize = 10,
  search = "",
  category = ""
) =>
  api.get(
    `${url.API_COURSE}/get-paging?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&category=${category}`
  );

export const getCourseById = (id) =>
  api.get(`${url.API_COURSE}/get-by-id/${id}`);

//lesson
export const createLesson = (data) => api.create(`${url.API_LESSON}`, data);
export const updateLesson = (data) => api.update(`${url.API_LESSON}`, data);
export const deleteLesson = (id) => api.delete(`${url.API_LESSON}/${id}`);

export const getLessonById = (id) =>
  api.get(`${url.API_LESSON}/get-by-id/${id}`);
export const getPagingLesson = (
  pageIndex = 1,
  pageSize = 10,
  search = "",
  course = "",
  status = 0
) =>
  api.get(
    `${url.API_LESSON}/get-paging?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&course=${course}&status=${status}`
  );
