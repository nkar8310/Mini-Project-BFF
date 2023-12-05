// const express = require('express');
// const router = express.Router();
// const axios = require('axios'); // You may need to install axios if not already installed.

// // Base URL of your Spring Boot backend
// const backendBaseUrl = 'http://localhost:8082'; // Replace with the actual URL

// // Define the routes for user-related operations
// router.post('/register', async (req, res) => {
//   try {
//     const response = await axios.post(`${backendBaseUrl}/api/users/register`, req.body);
//     res.status(response.status).send(response.data);
//   } catch (error) {
//     res.status(error.response.status).send(error.response.data);
//   }
// });

// router.get('/:username', async (req, res) => {
//   const username = req.params.username;
//   try {
//     const response = await axios.get(`${backendBaseUrl}/api/users/${username}`);
//     res.status(response.status).send(response.data);
//   } catch (error) {
//     res.status(error.response.status).send(error.response.data);
//   }
// });

// router.get('/byEmail/:email', async (req, res) => {
//   const email = req.params.email;
//   try {
//     const response = await axios.get(`${backendBaseUrl}/api/users/byEmail/${email}`);
//     res.status(response.status).send(response.data);
//   } catch (error) {
//     res.status(error.response.status).send(error.response.data);
//   }
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const userService = require('../services/user_service'); // Import your user service

// router.post('/register', async (req, res) => {
//   const { clientId, username, password, email,name } = req.body;

//   try {
//     const registrationResult = await userService.signUp(clientId, username, password, email,name);
//     // Handle successful registration, e.g., send a response to the client.
//     res.status(201).json({ message: 'User registered successfully', result: registrationResult });
//   } catch (error) {
//     // Handle registration failure, e.g., send an error response.
//     res.status(400).json({ message: 'User registration failed', error: error.message });
//   }
// });

// module.exports = router;

// user_controller.js
const express = require('express');
const router = express.Router();
const userService = require('../services/user_service');
const cors = require('cors'); // Import the cors middleware
router.use(cors());
router.post('/register', async (req, res) => {
  const { clientId, username, password, email, name } = req.body;

  try {
    const registrationResult = await userService.signUp(clientId, username, password, email, name);
    res.status(201).json({ message: 'User registered successfully', result: registrationResult });
  } catch (error) {
    res.status(400).json({ message: 'User registration failed', error: error.message });
  }
});

router.post('/confirm', async (req, res) => {
  const { clientId, username, code } = req.body;

  try {
    await userService.confirmSignUp(clientId, username, code);
    res.status(200).json({ message: 'User confirmed successfully' });
  } catch (error) {
    res.status(400).json({ message: 'User confirmation failed', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { clientId, username, password } = req.body;

  try {
    const authResult = await userService.initiateAuth(clientId, username, password);
    res.status(200).json({ message: 'User authenticated successfully', result: authResult });
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed', error: error.message });
  }
});

module.exports = router;


