const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const configServ = require("./config/server");
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

/*const authentication = require("./middleware/authentication");
const authorization = require("./middleware/authorization");*/

const seguridad = require('./routes/seguridadRoute');

const app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//app.use(authentication);

app.use('/security', seguridad);

// Directorio raiz
if (!global.hasOwnProperty("dirRaiz")) { global.dirRaiz = __dirname; }

// tokenKey
if (!global.hasOwnProperty("tokenKey")) { global.tokenKey = configServ.tokenKey; }

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
