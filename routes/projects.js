var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* router.get("/", (req, res) => {
  res.send("Welcome to the API");
}); */
// GET student list
router.get("/", (req, res) => {
  db("SELECT * FROM projects ORDER BY projectid DESC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one student
router.get("/:id", function(req, res) {
  //your code here
  db(`select * from projects where projectid='${req.params.id}';`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(404).send("task not found", err));
});

const getAllProjects = (req, res) => {
  // Send back the full list of items
  db("SELECT * FROM projects ORDER BY projectid DESC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
};

router.post("/", (req, res) => {
  // The request's body is available in req.body
  // If the query is successful you should send back the full list of items
  // data.push(req.body);
  db(
    `INSERT INTO projects (projectid, projecttitle, projectblurb, projectdescription, projectimageurl) values ('${req.body.project.id}', '${req.body.project.title}', '${req.body.project.blurb}', '${req.body.project.description}', '${req.body.project.imageurl}');`
  )
    .then(() => {
      getAllProjects(req, res);
    })
    .catch(err => res.status(500).send(err));
});

/* router.put("/:projectid", (req, res) => {
  // The request's body is available in req.body
  // URL params are available in req.params 
  // UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
  db(
    `UPDATE projects SET projecttitle = ${req.body.projecttitle}, projectdescription = ${req.body.projectdescription}, projectimageurl = ${req.body.projectimageurl}, WHERE projectid = ${req.params.projectid};`
  )
    .then(() => {
      getAllProjects(req, res);
    })
    .catch(err => res.status(500).send(err, "Please make sure your title matches the previous title"));
});  */

// DELETE a project from the DB
router.delete("/:id", function(req, res) {
  //your code here
  db(`DELETE FROM projects WHERE projectid = '${req.params.id}';`)
    .then(() => {
      getAllProjects(req, res);
    })
    .catch(err => res.status(500).send("item not found", err));
});

module.exports = router;
