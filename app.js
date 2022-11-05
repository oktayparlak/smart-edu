const express = require('express');
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

/**Connect DB */
mongoose.connect('mongodb://localhost/smartedu-db').then(() => {
  console.log('DB Connection Successfuly');
});

const app = express();

/**Template Engine */
app.set('view engine', 'ejs');

/**Middlewares */
app.use(express.static('public'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

/**Routes */
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = process.env.Port || 4000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
