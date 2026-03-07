import api from "./auth.js";

export const getApplications = (params) =>
  api.get("/v2/applications", { params });

export const createApplication = (data) =>
  api.post("/v2/application", data);

export const getApplicationById = (id) =>
  api.get(`/v2/application/${id}`);

export const updateApplication = (id, data) =>
  api.patch(`/v2/application/${id}`, data);

export const deleteApplication = (id) =>
  api.delete(`/v2/application/${id}`);