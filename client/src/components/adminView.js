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
    console.log("form button clicked!");
    console.log(project);
    // pass data back up to parent using props.addProject();
    // don't forget to accept the props in the arguments of the function AdminView
  };

  return (
    <div>
      <form>
        <label>
          Project Title
          <input
            type="text"
            placeholder="My Project Title"
            name="title"
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          Image URL
          <input
            type="url"
            placeholder="http://www.image.com/image.jpg"
            name="imageurl"
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          Project Description
          <input
            as="textarea"
            placeholder="This project is..."
            name="description"
            onChange={e => handleInputChange(e)}
          />
        </label>

        <button type="sumbit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminView;
