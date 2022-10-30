const express = require('express');
const ejs = require('ejs');

const pageController = require('./controllers/pageController');

const app = express();

/**Template Engine */
app.set('view engine', 'ejs');

/**Middlewares */
app.use(express.static('public'));

/**apis */
app.get('/', pageController.getAllCourses);
app.get('/about', pageController.getAboutPage);

const port = 4000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
