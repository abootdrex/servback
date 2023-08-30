// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const BlogData= require('./dataSc')
const cors = require('cors');


app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://durgesh:Thehobby@cluster0.cieshmm.mongodb.net/registrations?', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/blogdatas', async (req, res) => {
  try {
    const blogdatas = await BlogData.find();
    res.json(blogdatas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} OK drex`);
});
