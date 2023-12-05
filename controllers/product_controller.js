const express = require('express');
const router = express.Router();
const axios = require('axios'); // You may need to install axios if not already installed.

// Base URL of your Spring Boot backend
const backendBaseUrl = 'http://localhost:8080'; // Replace with the actual URL

// Define the routes for product-related operations
router.post('/', async (req, res) => {
  try {
    const response = await axios.post(`${backendBaseUrl}/api/product`, req.body);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${backendBaseUrl}/api/product`);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

router.get('/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
    const response = await axios.get(`${backendBaseUrl}/api/product/${productId}`);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

router.put('/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
    const response = await axios.put(`${backendBaseUrl}/api/product/${productId}`, req.body);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

router.delete('/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
    const response = await axios.delete(`${backendBaseUrl}/api/product/${productId}`);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

module.exports = router;
