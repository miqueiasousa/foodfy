class AboutController {
  static index(req, res) {
    return res.render('about/index', { title: 'Sobre' });
  }
}

module.exports = AboutController;
