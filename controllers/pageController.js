exports.getAllCourses = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.render('about', {
    page_name: 'about',
  });
};
