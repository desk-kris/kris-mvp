import React, { useState, useEffect } from "react";
import AdminView from "./components/adminView";
import UserView from "./components/userView";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  //props.projects[0]
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    fetch("/projects")
      .then(response => response.json())
      .then(projects => {
        setProjects(projects);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleAddProject = project => {
    fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      //4. Why are we passing body : JSON.stringify(input); why not JSON.stringify{firstname: firstname}
      body: JSON.stringify({ project })
    })
      // Continue fetch request here
      .then(res => res.json())
      .then(projects => {
        // upon success, update projects
        setProjects(projects);
      })
      .catch(error => {
        // upon failure, show error message
        console.log(error);
      });
  };

  const handleChangeView = isAdmin => {
    setIsAdmin(isAdmin);
  };

  return (
    <div className="container">
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <button onClick={() => handleChangeView(true)}>ADMIN</button>
        <button onClick={() => handleChangeView(false)}>USER</button>
      </div>
      {isAdmin ? (
        <AdminView addProject={project => handleAddProject(project)} />
      ) : (
        <UserView projects={projects} />
      )}
    </div>
  );
}
/* 
<Button onClick={() => handleChangeView(true)}>ADMIN</Button>
<Button onClick={() => handleChangeView(false)}>USER</Button> */

export default App;
