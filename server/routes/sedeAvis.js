var express = require('express');
const app = require('../app');
//const DatabaseManage = require('../database/databasemanage');
var router = express.Router();
//var prenotarsi = require('/home/mob/AnAvis/client/src/components/prenotarsi/prenotarsi');
// Da cambiare per Stefano
const dbPath = '/home/mob/AnAvis/server/databaseManage.db';

var sqlite3 = require('sqlite3').verbose();
/* GET about page. */

class sedeAvis {
    constructor(req, res, next){
        this.req = req;
        this.res = res;
        this.next = next;
    }
    getSedi(req, res, next){
        console.log("PRINTA SEDI");
        let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
            if(err){
                console.log("Ecco un errore in sedeAvis.js SERVER");
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
        
    }
}


router.use('/', function(req, res, next){
//    getSedi(req, res, next);
    console.log("FUNZIONE GETSEDI()");
    /*
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if(err){
            console.log("Ecco un errore in sedeAvis.js SERVER");
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

module.exports = router;
module.exports = sedeAvis;