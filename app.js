const express = require('express');

const pageController = require('./controllers/pageController');

const app = express();

app.get('/', pageController.getAllCourses);

const port = 4000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
