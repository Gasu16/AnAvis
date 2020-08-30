var sqlite3 = require('sqlite3').verbose();
class DatabaseManage{
  DatabaseManage(){
    console.log("provaprovaprova");
    /*
    let db = new sqlite3.Database('../databaseManage.db', sqlite3.OPEN_READWRITE, (err) => {
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
*/  
  } 
}

const dbHandle = new DatabaseManage();
module.exports = DatabaseManage;
