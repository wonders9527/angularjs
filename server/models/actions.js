var connection = require('./configDB');
var connecSession = require('./sessionConfig');
var actionDB = require('./actionDB');
var path = require('path');
var util = require("util");

exports.qushuju = function(req, res) {
	actionDB.selectFun(connection, function(result) {
		if(result[0] !== undefined)  res.send(result);
	});
};

//exports.index= function(req, res) {
//
//	var html = path.normalize(__dirname + '/../../index.html');
//	res.sendfile(html);
//};

exports.checkInfo= function(req, res) {
//	console.log(req.cookies.islogin);
//	console.log(typeof(req.headers.cookie));
//	console.log(req.headers);
//	var cook=req.headers.cookie;
//	var coolid=cook.match(/islogin=(\S*);/)[1];
//
	var resReturn = connecSession.sessionFun(req, res);
	if(resReturn['username'] !== undefined) {
		
		res.json(resReturn);
	}	
};


exports.login = function(req, res) {
//	res.header('Access-Control-Allow-Origin', req.headers.origin);//注意这里不能使用 * 
//	res.header('Access-Control-Allow-Credentials', true);//告诉客户端可以在HTTP请求中带上Cookie
//	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	var resReturn = connecSession.sessionFun(req, res);
	if(resReturn['username'] !== undefined) {
	//	res.json(resReturn);
	} else {
		var result = null;
		connecSession.selectFun(connection, req.body.name, function(result) {
			if(result[0] === undefined) {
				res.send({
					state: '没有该用户',
					username: '',
					mode: '0'
				});
			} else {
				if(result[0].password === req.body.password) {
					req.session.islogin = req.body.name;
					res.locals.islogin = req.session.islogin;
					res.cookie('islogin', res.locals.islogin);
					res.json({
						state: '登录成功***',
						username: res.locals.islogin,
						mode: '1'
					});
					//res.redirect('/index');
				} else {
					//res.sendfile(loginHtml);
					//res.redirect('/login');
					res.send({
						state: '密码错误',
						username: '',
						mode: '0'
					});
				}
			}
		});
	};
};

//注册
exports.reg = function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
	var user = req.body;
	connecSession.selectFun(connection, user.name, function(result) {
		if(result[0] !== undefined) {
			res.send('该用户已注册');
		} else {
			connecSession.insertFun(connection, user.name, user.password, function(err) {
				if(err) throw err;
				res.send('注册成功');
			});
		};
	});
};

//退出
exports.logout = function(req, res) {
	if(res.clearCookie('islogin') && req.session.destroy()) {
		res.json({
			state: '成功退出',
			mode: '1'
		});
	}
};