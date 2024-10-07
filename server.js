// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');
const path = require('path');

// Create an Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Set up Sequelize to connect to the MySQL database
const sequelize = new Sequelize('salesDB', 'root', 'stunna', {
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

// Root route - display notice
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Sales App</title></head>
      <body>
        <h1>Welcome to Sales App</h1>
        <p style="color: red;">Contact the developer, payment is pending.</p>
      </body>
    </html>
  `);
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

// Get all sales
app.get('/sales', async (req, res) => {
  try {
    const sales = await Sale.findAll();
    res.json(sales);
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
