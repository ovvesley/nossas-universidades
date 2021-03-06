require('dotenv').config()
var createError = require('http-errors');
var mongoose = require("mongoose");
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require("cors");

var config = require("./config");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addUniversidadeRouter = require('./routes/add');
var universidadeRouter = require('./routes/universidade');

var app = express();


const url = config.mongoUrl;
const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

connect
    .then(
        (db) => {
            let { host, port, name } = db.connection;

            console.log(`Database connected correctly to Server`);
            console.log("--------------------------------------");
            console.log(`HOST =\t${host}; \nPORT =\t${port}; \nNAME =\t${name};`);
            console.log("--------------------------------------");
        },
        (err) => {
            console.error(
                "❌ Database NOT connected correctly to Server: ",
                err.message
            );
        }
    )
    .catch((err) => {
        console.error(
            "❌ Database NOT connected correctly to Server: ",
            err.message
        );
    });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/addUniversidade', addUniversidadeRouter);
app.use('/universidade', universidadeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;