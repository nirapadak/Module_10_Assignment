const jwt = require('jsonwebtoken');
require('dotenv').config();
const Product = require('../model/productModel');


exports.jwtAuthentication = (req, res, next) => {
  const jwtToken = req.headers['authorization'];

  if (!jwtToken) { 
    res.status(401).json({
      message: 'Unauthorized'
    })
  }

  const token = jwtToken.split(" ");
  const tokenSecret = token[1];
  req.tokenSecret = tokenSecret


  jwt.verify(token, process.env.secret_key, (error, decode) => {
    if (error) {
      return res.status(401).json({ msg: error.message });
    }
    const {_id, name} = decode;
    req.headers._id = _id;
    req.headers.name = name;
    next();
  })
}
