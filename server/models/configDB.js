//var mysqlDB=angular.module('mysqlDB',[]);

var mysql = require('mysql'); 

//创建连接  
var connection = mysql.createConnection({
  host:'localhost',
  user:'blog',
  password:'123456',
  database:'sunthink_tpa_dev'
});

connection.connect();
console.log('数据库连接成功');

module.exports = connection;
//connection.query(  
//'SELECT * FROM '+TEST_TABLE,  
//function selectCb(err, results, fields) {  
//  if (err) {  
//    throw err;  
//  }  
//    
//    if(results)
//    {
//        for(var i = 0; i < results.length; i++)
//        {
//            console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].age);
//        }
//    }    
//  connection.end();  
//}  
//); 