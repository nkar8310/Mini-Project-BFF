const express = require('express');
const router = express.Router();
const axios = require('axios');

// Base URL of your Spring Boot backend
const backendBaseUrl = 'http://localhost:8081'; // Replace with the actual URL


// Place an order
router.post('/', async (req, res) => {
  try {
    const response = await axios.post(`${backendBaseUrl}/api/order`, req.body);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${backendBaseUrl}/api/order`);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

// Get orders by user ID
router.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const response = await axios.get(`${backendBaseUrl}/api/order/user/${userId}`);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

// Get a specific order by ID
router.get('/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const response = await axios.get(`${backendBaseUrl}/api/order/${orderId}`);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

// Update an order by ID
router.put('/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const response = await axios.put(`${backendBaseUrl}/api/order/${orderId}`, req.body);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

module.exports = router;
