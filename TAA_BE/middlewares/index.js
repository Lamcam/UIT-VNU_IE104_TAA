const cookieParser = require('cookie-parser');

const authenticate = (req, res, next) => {
  // Check if the user is authenticated
  const isAuthenticated = req.cookies.authenticated === 'true';

  // Set a variable in locals to use in EJS templates
  res.locals.isAuthenticated = isAuthenticated;

  next();
};

module.exports = {
  authenticate,
};