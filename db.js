var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'RIDE'
});
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log('connected!');
// });
// connection.query('select * from employee',(err,result,fields)=>{
// 	if(err){
// 		return console.log(err);
// 	}
// 	return console.log(result);
// });

module.exports=connection;