var express = require('express');
const app = require('../app');
const { json, response } = require('express');

//const DatabaseManage = require('../database/databasemanage');
var router = express.Router();
//var prenotarsi = require('/home/mob/AnAvis/client/src/components/prenotarsi/prenotarsi');
// Da cambiare per Stefano
const dbPath = '/home/mob/AnAvis/server/databaseManage.db';

var sqlite3 = require('sqlite3').verbose();
/* GET about page. */
global.dataRows = [];

router.get('/', function(req, res, next){
    console.log("BRO");
    next();
});


router.use('/', function(req, res, next){
    console.log("FUNZIONE GETSEDI()");        
    next();
});


class sedeAvis {
    constructor(req, res, next){
        this.req = req;
        this.res = res;
        this.next = next;
    }
    
    
    
    async getSedi(req, res, next){
        
        console.log("GET SEDI");
        //var a = 0;
        //console.log("a all'inizio: ", a);
        
        var db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
            if(err){
                console.log("Ecco un errore in sedeAvis.js SERVER");
                console.error(err.message);
            }
            console.log("Database connesso correttamente");
        });

    //db.serialize(function(){
        // Proviamo qui
        //a = a + 1;
        //console.log("a dentro db.serialize: ", a);
        var sql = "SELECT Sede FROM PRENOTARSI WHERE (PRENOTARSI.Regione = '"+req.body.regione+"')";
        var data = []; // Array dove andiamo a mettere i dati riga per riga
        new Promise (function(resolve, reject){
            db.each(sql, function(err, row){
                if(err)throw err;
                data.push(row);
                //global.datarr = data;
                console.log("DENTRO PRENOTARSI PRIMA PAGINA;", row);
                //callback(row);
                //return;
                exports.data = data;
                return data;
            }, function(req, res, next){
                console.log("SONO DENTRO");
                console.log(data);
                
                //res.status(200).json(data);
                
                //res.render('prenotarsiPrimaPagina', {title: 'prenotarsiPrimaPagina'});
                //console.log(res.send(data));
                //console.log(response.end());
                //console.log(response.finished());
                
                console.log("FINITO");
                return data;
            });
        });
        
        
    }

}



module.exports = router;
module.exports = sedeAvis;
