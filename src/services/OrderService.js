import api from '../lib/axios';

class OrderService {
  static getAll = (page) => api.get(`/order?page=${page}`);

  static createOrder = (orderData) => api.post('/order', orderData);

  static findOne = (id) => api.get(`/order/${id}`);

  static updateOrder = (id, values) => api.put(`/order/${id}`, values);

  static delete = (id) => api.delete(`/order/${id}`);

  static getOrders = (page) => api.get(`/order/user?page=${page}`);

  static getPdfOrders = (from, to) => api.get(`/order/pdf?from=${from}&to=${to}`);
}

export default OrderService;
