import React, { useState, useEffect } from "react";
import AdminView from "./components/adminView";
import UserView from "./components/userView";
import NaviBar from "./components/naviBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

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
  const handleDeleteProject = id => {
    // delete task from database
    // upon success, update tasks
    // upon failure, show error message
    fetch(`/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      // Continue fetch request here
      .then(res => res.json())
      .then(projects => {
        // upon success, update projects
        setProjects(projects);

        //console.log(data);
      })
      .catch(error => {
        // upon failure, show error message
      });
  };

  /* 
  const handleChangeView = (isAdmin) => {
    setIsAdmin(isAdmin);
  }; */

  return (
    <div className="container">
      <header>
        <h1 className="display-1 p-3 mb-2 bg-primary text-white text-right">
          MY-FS-03 Projects
        </h1>
      </header>
      <Router>
        <NaviBar />
        <Switch>
          <Route
            exact
            path="/admin"
            render={() => (
              <AdminView addProject={project => handleAddProject(project)} />
            )}
          />
          <Route
            exact
            path="/userview"
            render={() => (
              <UserView
                projects={projects}
                deleteProject={id => handleDeleteProject(id)}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/* 
<Button onClick={() => handleChangeView(true)}>ADMIN</Button>
<Button onClick={() => handleChangeView(false)}>USER</Button> 

//old buttons
<div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <button onClick={() => handleChangeView(true)}>ADMIN</button>
        <button onClick={() => handleChangeView(false)}>USER</button>
      </div>
      {isAdmin ? (
        <AdminView addProject={(project) => handleAddProject(project)} />
      ) : (
        <UserView
          projects={projects}
          deleteProject={(id) => handleDeleteProject(id)}
        />
      )}
      */
