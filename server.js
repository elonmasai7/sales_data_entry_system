// Import required modules
const express = require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser for handling JSON requests
const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set up Sequelize to connect to the MySQL database
const sequelize = new Sequelize('salesDB', 'root', 'Masai ', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define the Sale model
const Sale = sequelize.define('Sale', {
  product: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {});

// Sync the database and model
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(error => {
  console.error('Error syncing database:', error);
});

// Insert a record
app.post('/sales', async (req, res) => {
  const { product, amount, date } = req.body;

  try {
    const sale = await Sale.create({ product, amount, date });
    res.send('Sale data inserted successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Database error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
