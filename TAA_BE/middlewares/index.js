const cookieParser = require('cookie-parser');

const authenticate = (req, res, next) => {
  // Check if the user is authenticated
  const isAuthenticated = req.cookies.authenticated === 'true';

  // Set a variable in locals to use in EJS templates
  res.locals.isAuthenticated = isAuthenticated;

  next();
};

const authorize = (req, res, next) => {
  // Check if the user is authenticated
  const isAuthenticated = req.cookies.authenticated === 'true';

  if (isAuthenticated) {
    next();
  } else {
    res.redirect('/');
    // res.status(401).json({
    //   statusCode: 401,
    //   msg: 'You are not authorized to view this page',
    // });
  }
};

// const checkOrder = (req, res, next) => {
//   // const prod_id__orders = req.cookies;

//   if (cart_length == 0) {
//     res.redirect('/');
//     return;
//   }

//   next();
// };

module.exports = {
  authenticate,
  authorize,
};