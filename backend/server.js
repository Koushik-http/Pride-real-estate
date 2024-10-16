const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/real-estate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => console.log(err));

app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
