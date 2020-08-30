var express = require('express');
const app = require('../app');
//const DatabaseManage = require('../database/databasemanage');
var router = express.Router();

// Da cambiare per Stefano
const dbPath = '/home/mob/AnAvis/server/databaseManage.db';

var sqlite3 = require('sqlite3').verbose();
/* GET about page. */

router.get('/', function(req, res, next) {
    res.render('submit', {title: 'Submit'}); // mostriamo la pagina submit
    //res.send("WELCOME TO BACKEND SERVER");
});

router.post('/', function(req, res, next){
    
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
        let sql = 'select nome from REGIONE'; 
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
