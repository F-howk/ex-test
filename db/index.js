var mysql = require('mysql');
var con = mysql.createPool({
  host: 'localhost',
  user: 'test',
  password: 'root111111',
  database: 'testdb'
});
var query = (sql,options,callback)=>{
  con.getConnection((err,conn)=>{
    if(err){
      callback(err,null,null);
    }
    else{
      conn.query(sql,options,(err,results,fields)=>{
        callback(err,results,fields);
      })
      conn.release();
    }
  })
}
module.exports = query;