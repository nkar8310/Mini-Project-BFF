const express = require('express');
const port = 3001; 

// Include the controllers
const userController = require('./controllers/user_controller');
const productController = require('./controllers/product_controller');
const orderController = require('./controllers/oder_controller');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use('/api/users', userController);
// Use the controllers with their respective base routes
app.use('/api/product', productController);
app.use('/api/order', orderController);
app.use(express.json());

app.listen(port, () => {
  console.log(`BFF server is running on port ${port}`);
});
