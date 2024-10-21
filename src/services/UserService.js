import api from '../lib/axios';

class UserService {
  static createUser = (userData) => api.post('/user', userData);

  static getAll = () => api.get('/user');

  static updatePassword = (id, values) => api.put(`/user/${id}/password`, values);

  static updateUser = (id, values) => api.put(`/user/${id}`, values);

  static delete = (id) => api.delete(`/user/${id}`);
}

export default UserService;
