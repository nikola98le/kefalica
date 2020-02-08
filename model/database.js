const mysql= require('mysql');
const env= require('custom-env').env();

let connString={
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}


let connection= mysql.createConnection(connString);

connection.connect(err=> {
  if(err) {
			console.log(err);
			throw err;
	}
  console.log("Connected to db");
});

module.exports= connection;
