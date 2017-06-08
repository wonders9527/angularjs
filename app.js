var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var SessionStore = require('express-mysql-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./server/routes');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 8888);
app.set('views', path.join(__dirname, 'views'));

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
//app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

//这里传入了一个密钥加session id
app.use(cookieParser('keyforcookie'));

//使用就靠这个中间件
app.use(session({
	secret: 'keyforcookie',
	resave: false,
	cookie: {
		maxAge: 60 * 60 * 24 * 30
	},
	saveUninitialized: true
}));

app.all("*", function(req, res, next) {

	　 // 这里是允许跨域的的domain列表
	let allowedOrigins = [
		"http://192.168.3.3:8888",
		"http://127.0.0.1:8020"
	];

	let origin = req.headers.origin;
	if(allowedOrigins.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
//	res.header('withCredentials',true);
	res.header('Content-Type', 'application/json');
	res.header('Access-Control-Allow-Credentials', true); // Allow Cookie
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	next();
});

routes(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});