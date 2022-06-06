var express = require('express');
var {
    Sequelize
} = require("sequelize");
var router = express.Router();
const sequelize = new Sequelize(
    'testdb',
    'root',
    'root', {
        host: 'localhost',
        dialect: 'mysql'
    }
)
const queryInterface = sequelize.getQueryInterface();

router.get('/', function (req, res, next) {
    queryInterface.select('','user').then(data => {
        res.send({
            code: 200,
            data: data || [{}]
        })
    })

});

module.exports = router;