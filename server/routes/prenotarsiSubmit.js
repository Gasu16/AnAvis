var express = require('express');
const app = require('../app');
//const DatabaseManage = require('../database/databasemanage');
var router = express.Router();

/* GET about page. */

router.get('/', function(req, res, next) {
    res.render('prenotarsiSubmit', {title: 'prenotarsiSubmit'}); // mostriamo la pagina prenotarsiSubmit
    //res.send("WELCOME TO BACKEND SERVER");
});

router.post('/', function(req, res, next){
    
    res.render('prenotarsiSubmit', {title: 'prenotarsiSubmit'});
    
});

module.exports = router;
