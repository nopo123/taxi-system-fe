import api from "../lib/axios";

class OrganizationService {

  static create = (organizationData) => api.post('/organization', organizationData);
  
  static getAll = () => api.get('/organization');

  static findOne = (id) => api.get(`/organization/${id}`);

  static update = (id, organizationData) => api.put(`/organization/${id}`, organizationData);

  static delete = (id) => api.delete(`/organization/${id}`);
}

export default OrganizationService;