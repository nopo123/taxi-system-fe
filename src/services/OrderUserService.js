import api from "../lib/axios";

class OrderUserService {

  static getAll = async () => api.get('/order-user')

  static delete = async (id) => api.delete(`/order-user/${id}`)
}

export default OrderUserService;