var express = require('express');
const app = require('../app');
//const DatabaseManage = require('../database/databasemanage');
var router = express.Router();
//var prenotarsi = require('/home/mob/AnAvis/client/src/components/prenotarsi/prenotarsi');
// Da cambiare per Stefano
const dbPath = '/home/mob/AnAvis/server/databaseManage.db';

var sqlite3 = require('sqlite3').verbose();
/* GET about page. */

router.get('/', function(req, res, next) {
    res.render('submit', {title: 'Submit'}); // mostriamo la pagina submit
    //res.send("WELCOME TO BACKEND SERVER");
});

router.post('/', function(req, res, next){
    console.log("Ecco la richiesta mandata dal POST di react");
    console.log(req.body); // leggiamo la richesta mandata dal client (react)
    res.render('submit', {title: 'Submit'});
    next();
});

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
        let sql = "INSERT INTO REGISTRARSI(Nome, Username, Email, Password_, Cognome, Sesso, DataDiNascita, LuogoDiNascita, Domicilio, Cap, CF) VALUES ('"+req.body.nome+"', '"+req.body.username+"', '"+req.body.email+"', '"+req.body.password+"', '"+req.body.cognome+"', '"+req.body.sesso+"', '"+req.body.dataNascita+"', '"+req.body.luogoNascita+"', '"+req.body.domicilio+"', '"+req.body.cap+"', '"+req.body.codiceFiscale+"')";
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
