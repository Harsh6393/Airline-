var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "HARSH@123",
   database: "lab20"
});

// Created the Connection
/*con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});*/

// Created the Database named as "gfg"
con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

module.exports=con;