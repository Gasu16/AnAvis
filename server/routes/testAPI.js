var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
    res.send("CIAO MARIO! FACCIAMO COMUNICARE IL CLIENT (REACT) CON IL SERVER (NODE.JS)!"); // Mandiamo questo messaggio al server
});

module.exports = router;