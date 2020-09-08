var express = require('express');
const app = require('../app');
//const DatabaseManage = require('../database/databasemanage');
var router = express.Router();
const sedeAvis = require('../routes/sedeAvis');
// Da cambiare path per Stefano
const dbPath = '/home/mob/AnAvis/server/databaseManage.db';

var sqlite3 = require('sqlite3').verbose();
/* GET about page. */



router.get('/', function(req, res, next) {
    res.render('prenotarsiSubmit', {title: 'prenotarsiSubmit'}); // mostriamo la pagina prenotarsiSubmit
    next();
});


router.post('/', function(req, res, next){
    
    res.render('prenotarsiSubmit', {title: 'prenotarsiSubmit'});
    next();
});

// Durante la scrittura del FORM...
router.use('/',function(req, res, next){
    console.log("sede Avis");
    const sede_avis = new sedeAvis(req, res, next);
    sede_avis.getSedi(req, res, next);
    /*
    var sede = req.body.sede;
    console.log("sede: " , sede);
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
      if(err){
        console.log("Ecco un errore in databasemanage.js");
        console.error(err.message);
      }
      console.log("Database connesso correttamente");
    });
    db.serialize(function() {
      //let sql = 'select nome from REGIONE'; 
      //var query = "INSERT INTO [Category] (CName,CSubCategory) VALUES ('" +req.body.CName+"','"+req.body.CSubCategory+"')";
      let sql = "SELECT Sede FROM PRENOTARSI WHERE (PRENOTARSI.Regione = '"+req.body.regione+"')";
      db.all(sql, [], (err, rows) => {
        if(err)throw err; // errore
        rows.forEach((row) => {
          console.log(row);
        });
      });
    });
    
    db.close();
    */
    next();
});


// Inserisci nel database le informazioni date nel FORM
router.use(function(req, res, next){
    
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if(err){
          console.log("Ecco un errore in databasemanage.js");
          console.error(err.message);
        }
        console.log("Database connesso correttamente");
      });
      db.serialize(function() {
        //let sql = 'select nome from REGIONE'; 
        //var query = "INSERT INTO [Category] (CName,CSubCategory) VALUES ('" +req.body.CName+"','"+req.body.CSubCategory+"')";
        let sql = "INSERT INTO PRENOTARSI(Regione, Sede, DataPrenotazione) VALUES ('"+req.body.regione+"','"+req.body.sede+"' ,'"+req.body.data+"')";
        db.all(sql, [], (err, rows) => {
          if(err)throw err; // errore
          rows.forEach((row) => {
            console.log(row);
          });
        });
      });
      
      db.close();
});

module.exports = router;
