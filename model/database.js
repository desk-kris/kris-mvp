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
    "DROP TABLE if exists projects; CREATE TABLE projects(projectid varchar(15) NOT NULL, projecttitle VARCHAR(40) not null, projectblurb VARCHAR(1000) not null,projectdescription VARCHAR(1000) not null, projectimageurl VARCHAR(512) not null, PRIMARY KEY (projectid)); DROP TABLE if exists categories; CREATE TABLE categories(categoryid VARCHAR(15) NOT NULL, categoryname VARCHAR(15) not null, PRIMARY KEY (categoryid)); INSERT INTO projects (projectid, projecttitle, projectblurb, projectdescription, projectimageurl) values ('test01', 'WF Design + Build', 'High-end, custom residential renovaters serving Fraser Valley homeowners.', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.', 'https://mattfarley.ca/img/projects/wfdesignbuild.png');";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log(
      "Success: Two tables created in database, table 'projects' with one test row and table 'categories'"
    );

    console.log("Closing...You may proceed with next instructions");
  });

  con.end();
});
