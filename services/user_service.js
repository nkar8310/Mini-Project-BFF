// const axios = require('axios'); // You may need to install axios if not already installed.

// // Base URL of your Spring Boot backend
// const backendBaseUrl = 'http://localhost:8080'; // Replace with the actual URL

// // Function to create a user
// const createUser = async (userRequest) => {
//   try {
//     const response = await axios.post(`${backendBaseUrl}/api/users/register`, userRequest);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Function to retrieve a user by username
// const getUserByUsername = async (username) => {
//   try {
//     const response = await axios.get(`${backendBaseUrl}/api/users/${username}`);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Function to retrieve a user by email
// const getUserByEmail = async (email) => {
//   try {
//     const response = await axios.get(`${backendBaseUrl}/api/users/byEmail/${email}`);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// module.exports = {
//   createUser,
//   getUserByUsername,
//   getUserByEmail,
// };
// user_service.js
const {
  SignUpCommand,
  ConfirmSignUpCommand,
  AuthFlowType,
  InitiateAuthCommand,
  CognitoIdentityProviderClient,
} = require("@aws-sdk/client-cognito-identity-provider");

const region = "us-east-1"; // Replace with your desired AWS region

const client = new CognitoIdentityProviderClient({
  region,
});

const signUp = async (clientId, username, password, email, name) => {
  const command = new SignUpCommand({
    ClientId: clientId,
    Username: username,
    Password: password,
    UserAttributes: [{ Name: "email", Value: email }, { Name: "name", Value: name }],
  });

  return client.send(command);
};

const confirmSignUp = async (clientId, username, code) => {
  const command = new ConfirmSignUpCommand({
    ClientId: clientId,
    Username: username,
    ConfirmationCode: code,
  });

  return client.send(command);
};

const initiateAuth = async (clientId, username, password) => {
  const command = new InitiateAuthCommand({
    AuthFlow: AuthFlowType.USER_PASSWORD_AUTH,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
    ClientId: clientId,
  });

  return client.send(command);
};

module.exports = {
  signUp,
  confirmSignUp,
  initiateAuth,
};

// const { SignUpCommand, CognitoIdentityProviderClient } = require("@aws-sdk/client-cognito-identity-provider");
// const region = "us-east-1"; 

// const signUp = async (clientId, username, password, email) => {
//   const client = new CognitoIdentityProviderClient({ 
//     region, // Specify the AWS region
//   });
//   const command = new SignUpCommand({
//     ClientId: clientId,
//     Username: username,
//     Password: password,
//     UserAttributes: [{ Name: "email", Value: email },{Name: "name", Value: "nomashi"}],
//   });

//   return client.send(command);
// };

// module.exports = {
//   signUp,
// };




// const registerUser = async (req, res) => {
//   try {
//     const { clientId, username, password, email } = req.body;
//     const registrationResult = await signUp(clientId, username, password, email);

//     // Handle successful registration (you can customize this response)
//     res.status(201).json({ message: 'User registered successfully', result: registrationResult });
//   } catch (error) {
//     // Handle registration errors (you can customize this error response)
//     console.error('User registration error:', error);
//     res.status(500).json({ error: 'User registration failed' });
//   }
// };

// module.exports = {
//   registerUser,
// };
