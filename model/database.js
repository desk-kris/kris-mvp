require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "krismvp",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists projects; CREATE TABLE projects(projectid varchar(15) NOT NULL, projecttitle VARCHAR(40) not null, projectdescription VARCHAR(1000) not null, projectimageurl VARCHAR(512) not null, PRIMARY KEY (projectid));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `projects` was successful!");

    console.log("Closing...You may proceed with next instructions");
  });

  con.end();
});
