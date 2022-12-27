const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');

/**Connect DB */
mongoose.connect('mongodb://localhost/smartedu-db').then(() => {
  console.log('DB Connection Successfuly');
});

const app = express();

/**Template Engine */
app.set('view engine', 'ejs');

/**Global Variable */
global.userID = null;

/**Middlewares */
app.use(express.static('public'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db' }),
  })
);

/**Routes */
app.use('*', (req, res, next) => {
  userID = req.session.userID;
  next();
});
app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);

const port = process.env.Port || 4000;

app.listen(port, () => {
  console.log(`App started on port: ${port}`);
});
// deneme