var express = require('express');
var path = require('path');
var userRouter = require('./routes/user');

var app = express();

//middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.use('/users', userRouter);

//handle error
app.use((req, res, next) => {
  res.status(404).send('Page Not Found!');
});

app.listen(4000, () => {
  console.log('server is listening on port 4000');
});
