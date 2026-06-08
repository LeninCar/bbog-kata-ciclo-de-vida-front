import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function createCustomer(customer) {
  const response = await axios.post(`${API_URL}/api/customers`, customer);
  return response.data;
}

export async function getCustomers() {
  const response = await axios.get(`${API_URL}/api/customers`);
  return response.data;
}

export async function getHealth() {
  const response = await axios.get(`${API_URL}/health`)
  return response.data
}