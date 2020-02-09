module.exports = async (req, res, next) => {
  if (!req.session.user) return res.redirect('/admin/users/login');

  return next();
};
