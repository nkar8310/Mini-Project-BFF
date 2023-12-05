
// const { SignUpCommand, CognitoIdentityProviderClient } = require("@aws-sdk/client-cognito-identity-provider");


// const signUp = ({ clientId, username, password, email }) => {
//   const client = new CognitoIdentityProviderClient({});

//   const command = new SignUpCommand({
//     ClientId: clientId,
//     Username: username,
//     Password: password,
//     UserAttributes: [{ Name: "email", Value: email }],
//   });

//   return client.send(command);
// };

// module.exports = signUp;

 const { SignUpCommand, CognitoIdentityProviderClient } = require("@aws-sdk/client-cognito-identity-provider");


const signUp = async (clientId, username, password, email) => {
  const client = new CognitoIdentityProviderClient({});


  const command = new SignUpCommand({
    ClientId: clientId,
    Username: username,
    Password: password,
    UserAttributes: [{ Name: "email", Value: email }],
  });

  return client.send(command);
};



module.exports = signUp;
