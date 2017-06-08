function sessionFun(req, res) {
	if(req.cookies.islogin) {
		req.session.islogin = req.cookies.islogin;
	}
	if(req.session.islogin) {
		res.locals.islogin = req.session.islogin;

	} 
	var resReturn = ({
		state: '已登录',
		username: res.locals.islogin,
		mode: '1'
	});
	return resReturn;
};

function selectFun(client, username, callback) {
	//client为一个mysql连接对象
	client.query('select password from sessiondb where username="' + username + '"', function(err, results, fields) {
		if(err) throw err;

		callback(results);
	});
};

function insertFun(client, username, password, callback) {
	client.query('insert into sessiondb value(?,?)', [username, password], function(err, result) {
		if(err) {
			console.log("error:" + err.message);
			return err;
		}
		callback(err);
	});
};

exports.sessionFun = sessionFun;
exports.selectFun = selectFun;
exports.insertFun = insertFun;