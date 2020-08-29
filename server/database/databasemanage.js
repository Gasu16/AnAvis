var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../databaseManage.db');

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