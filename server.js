const express = require('express');
const mongoose = require("mongoose");
const routes = require('./routes');

const PORT = process.env.PORT || 2000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/build'));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/restaurant');

app.listen(PORT, () => {
  console.log(`Express running on PORT ${PORT}`);
});