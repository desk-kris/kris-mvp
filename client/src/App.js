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
      body: JSON.stringify({ project })
    })
      .then(res => res.json())
      .then(projects => {
        setProjects(projects);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleDeleteProject = id => {
    fetch(`/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(projects => {
        setProjects(projects);
      })
      .catch(error => {
        console.log(error);
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
