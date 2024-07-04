var mysql =require('mysql');
var express = require ('express');
var db = require.main.require ('./db/db_controller');
var router = express.Router();


router.get('/',function(req,res){
    res.render('landing.ejs');
});

module.exports = router;