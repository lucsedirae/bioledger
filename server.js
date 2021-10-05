//* Dependencies
const express = require('express');
const connectDB = require('./config/db');
const app = express();

//* Connect to database
connectDB()

//* Initialize middleware
app.use(express.json({ extended: false }));

//* Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/metrics', require('./routes/metrics'));
app.use('/api/auth', require('./routes/auth'));

//* Define production environment
//TODO Insert code for production environment prior to initial deployment

//* Port and server initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`💻${" "}Server listening on port ${PORT}`));
