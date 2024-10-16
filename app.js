const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/driver-location', (req, body) => {
  const { driverId, latitude, longitude } = req.body;
  console.log(`Driver ${driverId} is near the store at location: ${latitude}, ${longitude}`);
  // Here you can add your logic to handle the driver's location
  // For example, you could store it in a database or send a notification

  res.status(200).json({ message: 'Location received' });
});

app.get('/', (req, res) => {
  res.send('Driver Location Tracker is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});