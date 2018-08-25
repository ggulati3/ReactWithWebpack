const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//const db = require('../database/index.js');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});