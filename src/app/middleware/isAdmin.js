module.exports = (req, res, next) => {
  if (!req.session.user.isAdmin) return res.redirect('/admin/users/profile');

  return next();
};
