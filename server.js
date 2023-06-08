const { readdirSync } = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// console.log(jwt);
const mongoose = require('mongoose');
require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
// console.log(app);
const port = process.env.PORT || 8000;
// console.log(port);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


readdirSync('./routes').map(file => app.use('/api/V1', require(`./routes/${file}`)));


mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`server started on ${process.env.DATABASE_URL}`);
    })
  })
  .catch(err => console.log(err));