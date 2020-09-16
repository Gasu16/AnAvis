var express = require('express');
const app = require('../app');
//const DatabaseManage = require('../database/databasemanage');
var router = express.Router();
const sedeAnAvis = require('../routes/sedeAvis');
// Da cambiare path per Stefano
const dbPath = '/home/mob/AnAvis/server/databaseManage.db';
//var rowsSedi = require('../routes/sedeAvis/rows');
var sqlite3 = require('sqlite3').verbose();
/* GET about page. */
global.dati;
const {getSedi} = require('./sedeAvis');

router.get('/', function(req, res, next) {
    res.render('prenotarsiPrimaPagina', {title: 'prenotarsiPrimaPagina'}); // mostriamo la pagina prenotarsiSubmit
    next();
});


router.post('/', async function(req, res, next){    
    res.render('prenotarsiPrimaPagina', {title: 'prenotarsiPrimaPagina'});
    console.log("AIIII");
    var sede_avis = new sedeAnAvis(req, res, next);
    var dati = await sede_avis.getSedi(req, res, next);
    console.log("dati: ", sedeAnAvis.data); // ritorna undefined
    //console.log("data => ", await sedeAnAvis.data); // ritorna undefined
    //res.send(await dati);
    
});





/*
// Durante la scrittura del FORM...
router.use('/', async function(req, res, next){

    console.log("sede Avis");
    var sede_avis = new sedeAnAvis(req, res, next);
    var dati = await sede_avis.getSedi(req, res, next);
    
    console.log("dati: ", dati); // ritorna undefined
    //console.log("data => ", await sedeAnAvis.data); // ritorna undefined
    res.send(await dati);
    
});
*/


// Inserisci nel database le informazioni date nel FORM
router.use(function(req, res, next){
    // vuoto
    
    
      
});

module.exports = router;
