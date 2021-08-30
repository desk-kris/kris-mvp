import React, { useState } from "react";

function AdminView(props) {
  const [project, setProject] = useState([]);

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setProject({
      ...project,
      [name]: value,
      id: +new Date()
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addProject(project);
    alert(`You have submitted ${project.title}. \nPress OK.`);
    // pass data back up to parent using props.addProject();
    // don't forget to accept the props in the arguments of the function AdminView
  };

  return (
    <div>
      <h1 className="display-4 p-3 mb-2 border-bottom border-secondary">
        Admin Panel
      </h1>
      <div className="row">
        <div className="col-6 col-md-4 bg-info text-white rounded">
          <form onSubmit={handleSubmit}>
            <h5 className="p-3">Enter your project details here</h5>
            <div className="form-group">
              <label for="projectTitle">Project Title</label>
              <input
                id="projectTitle"
                type="text"
                className="form-control"
                placeholder="Enter Project Title"
                name="title"
                onChange={e => handleInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="blurb">Short blurb</label>
              <input
                id="blurb"
                type="text"
                className="form-control"
                placeholder="Write a short introduction here"
                name="blurb"
                onChange={e => handleInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="description">Project Description</label>
              <input
                id="description"
                type="textarea"
                className="form-control"
                placeholder="Put in detailed explanation of project here"
                name="description"
                onChange={e => handleInputChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="imageURL">Image URL</label>
              <input
                id="imageURL"
                type="url"
                className="form-control"
                placeholder="Copy and paste the image URL here"
                name="imageurl"
                onChange={e => handleInputChange(e)}
              />
            </div>

            <button
              className="btn btn-outline-light btn-lg btn-block"
              type="sumbit"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="col-12 col-md-8 rounded ">
          <div className="card mb-3 border border-info">
            <div className="card-header alert alert-primary">
              Preview your entry here:
            </div>
            <div className="card-body">
              <h5 className="card-title">Title: {project.title}</h5>
              <p className="card-text">Blurb: {project.blurb}</p>
              <p className="card-text">Description: {project.description}</p>
              <p className="card-text">Image:</p>
              <img
                className="card-img-bottom"
                src={project.imageurl}
                alt={project.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminView;
