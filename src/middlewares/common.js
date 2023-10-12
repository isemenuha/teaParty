const checkUser = (req, res, next) => {
    if (req.session.email) {
      next()
    } else {
      res.redirect('/login');
    }
  }; 
  
  const secureRoute = (req, res, next) => {
    if (!req.session.email) {
      next()
    } else {
      res.redirect('/')
    }
  }
  
  const checkSession = (req, res, next) => {
    next()
  }
  
  module.exports = { checkUser, secureRoute, checkSession };
