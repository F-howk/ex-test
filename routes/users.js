var express = require('express');
var router = express.Router();
let query = require("../db/index");
/* GET users listing. */
router.get('/list', function (req, res, next) {
  query('SELECT * FROM userList', (err, data, field) => {
    res.send({
      code: 200,
      data
    })
  })
});
router.get('/detail', function (req, res, next) {
  let {
    id
  } = req.query
  query(`SELECT * FROM userList WHERE id=${id}`, (err, data, field) => {
    res.send({
      code: 200,
      data:data || [{}]
    })
  })
});
router.post('/save', function (req, res, next) {
  let obj = req.body;
  obj.id = obj.id - 0;
  if(obj.id){
    query(`UPDATE userList SET name='${obj.name}',sex='${obj.sex}',info='${obj.info}' WHERE id='${obj.id}'`, (err, data, field) => {
      res.send({
        code: 200,
        data:''
      })
    })
  }
  else{
    let str = `INSERT INTO userList (name,info,sex) VALUES('${obj.name}','${obj.info}','${obj.sex}')`;
    query(str, (err, data, field) => {
      res.send({
        code: 200,
        data:''
      })
    })
  }
});
router.post('/del', function (req, res, next) {
  let {id} = req.body;
  query(`DELETE FROM userList WHERE id=${id}`, (err, data, field) => {
    res.send({
      code: 200,
      data:''
    })
  })
});
module.exports = router;