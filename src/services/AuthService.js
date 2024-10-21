import api from "../lib/axios";

class AuthService {
  static login = ({ email, password }) => api.post('/auth/login', { email, password });

  static me = () => api.get('/auth/me');
}

export default AuthService;