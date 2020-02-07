module.exports = async (req, res, next) => {
  if (!req.session) return res.redirect('/admin/users/login');

  if (!req.session.user.isAuthenticated)
    return res.redirect('/admin/users/login');

  return next();
};
