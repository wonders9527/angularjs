function selectFun(client, callback) {
	//client为一个mysql连接对象
	client.query('select * from sessiondb', function(err, results, fields) {
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

exports.selectFun=selectFun;
exports.insertFun=insertFun;