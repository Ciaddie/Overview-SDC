const express = require('express');
const bodyParser = require('body-parser');
const Products = require('./products.model.js');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true,
useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Connected to db!');
});



//routes
app.get('/products', async (req, res) => {
  try {
    const theProducts = await Products.find().limit(5);
    res.json(theProducts).status(200);
  } catch (err) {
    res.json(err);
  }
});


app.listen(3001, () => {
  console.log(`Server is listening at localhost:3001!`);
});