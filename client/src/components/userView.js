import React, { useState } from "react";

function UserView(props) {
  const [featured, setFeatured] = useState(props.projects[0]);
  // props, in pros is array, so first one is always gon be featered
  return (
    <div>
      <h1>User View</h1>
      <div className="featuredArea">
        {featured && (
          <div>
            <h3>Project Name: {featured.title}</h3>
            <p>
              Project Description: <br />
              {featured.description}
            </p>
          </div>
        )}
        <img src={featured.imageurl} alt={featured.title} />
      </div>

      <div className="projectsGallery">
        {props.projects.map(item => {
          return (
            <div key={item.id} className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={item.imageurl}
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  onClick={() => {
                    setFeatured(item);
                    console.log(item.id + item.title);
                  }}
                  className="btn btn-primary"
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserView;
