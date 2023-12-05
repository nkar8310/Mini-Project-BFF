const axios = require('axios'); // You may need to install axios if not already installed.

// Base URL of your Spring Boot backend
const backendBaseUrl = 'http://localhost:8080'; // Replace with the actual URL

// Function to create a product
const createProduct = async (productRequest) => {
  try {
    const response = await axios.post(`${backendBaseUrl}/api/product`, productRequest);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to retrieve all products
const getAllProducts = async () => {
  try {
    const response = await axios.get(`${backendBaseUrl}/api/product`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to retrieve a product by ID
const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${backendBaseUrl}/api/product/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to update a product by ID
const updateProduct = async (productId, productRequest) => {
  try {
    const response = await axios.put(`${backendBaseUrl}/api/product/${productId}`, productRequest);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to delete a product by ID
const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${backendBaseUrl}/api/product/${productId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}