var express = require('express');
var router = express.Router();

/* GET about page. */

router.get('/', function(req, res, next) {
    res.render('submit', {title: 'Submit'}); // mostriamo la pagina submit
    //res.send("WELCOME TO BACKEND SERVER");
});

router.post('/submit', function(req, res, next){
    //res.send("respond with a resource");
    //console.log("AOOO ANDO STAMO NEL REFERENCE");
    //fetch("http://localhost:3000/registrarsi");
    //res.redirect('/submit');router.get('/', function(req, res, next
    //res.render('submit', {title: 'Submit'});
    //return("AO");
});

module.exports = router;
