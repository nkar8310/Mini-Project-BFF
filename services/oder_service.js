const axios = require('axios');

// Base URL of your Spring Boot backend
const backendBaseUrl = 'http://localhost:8081'; // Replace with the actual URL

// Function to place an order
const placeOrder = async (orderRequest) => {
  try {
    const response = await axios.post(`${backendBaseUrl}/api/order`, orderRequest);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to get all orders
const getAllOrders = async () => {
  try {
    const response = await axios.get(`${backendBaseUrl}/api/order`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to get orders by user ID
const getOrdersByUserId = async (userId) => {
  try {
    const response = await axios.get(`${backendBaseUrl}/api/order/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to get a specific order by ID
const getOrderById = async (orderId) => {
  try {
    const response = await axios.get(`${backendBaseUrl}/api/order/${orderId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to update an order by ID
const updateOrder = async (orderId, orderRequest) => {
  try {
    const response = await axios.put(`${backendBaseUrl}/api/order/${orderId}`, orderRequest);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

module.exports = {
  placeOrder,
  getAllOrders,
  getOrdersByUserId,
  getOrderById,
  updateOrder,
};
