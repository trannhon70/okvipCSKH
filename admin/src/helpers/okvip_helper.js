
import { APIClient } from "./api_helper";
import * as url from "./url_helper";
import axios from "axios";

const api = new APIClient();

//get by id domain 
export const getbyIdDomain = (id) =>
  axios.get(`/api/domain/getByDomainId/${id}`);

  export const getByDomainIdJun41 = (id) =>
  axios.get(`/api/domain/getByDomainIdJun41/${id}`);

  export const uploadImgMenuJun41 = (data) =>
  axios.post(`/api/menu-jun/upload`, data);

  export const upDateUIDomain = (data) =>
  axios.post(`/api/domain/upDateUIDomain`, data);

  export const upDateUIDomainJun41 = (data) =>
  axios.post(`/api/domain/upDateUIDomainJun41`, data);

  export const deleteCardContacts = (id) =>
  axios.delete(`/api/contact/delete/${id}`);

  export const deleteCardOption = (id) =>
  axios.delete(`/api/contactType/delete/${id}`);

  export const uploadImageCard = (data) =>
  axios.post(`/api/contact/upload`, data);

  export const uploadImageOption = (data) =>
  axios.post(`/api/contactType/upload`, data);