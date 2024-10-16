const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, 'secret', { expiresIn: '30d' }); // Use your secret key
};

module.exports = generateToken;
