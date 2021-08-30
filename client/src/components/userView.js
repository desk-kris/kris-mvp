import React, { useState } from "react";

function UserView(props) {
  console.log(props);
  const [featured, setFeatured] = useState(props?.projects?.[0]);
  // const [deleteCard, setDeleteCard] = useState([])
  // props, in pros is array, so first one is always gon be featered
  const handleDeleteProject = e => {
    console.log(`the id should be ${e}`);
    props.deleteProject(e);
  };

  return (
    <div>
      <h1 className="display-4 p-3 mb-2 border-bottom border-secondary">
        Projects
      </h1>
      <div className="featuredArea">
        {featured && (
          <div className="card">
            <h5 className="card-header">Featured Project</h5>
            <div className="row">
              <img
                className="col-6 col-md-4"
                src={featured.projectimageurl}
                alt={featured.projecttitle}
              />
              <div className="col-12 col-md-8 card-body">
                <h5 className="card-title">{featured.projecttitle}</h5>
                <p className="card-text">{featured.projectdescription}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="projectsGallery">
        <div className="card-columns">
          {props.projects.map(item => {
            return (
              <div key={item.projectid} className="card">
                <img
                  className="card-img-top"
                  src={item.projectimageurl}
                  alt={item.projecttitle}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.projecttitle}</h5>
                  <p className="card-text">{item.projectblurb}</p>
                  <button
                    onClick={() => {
                      setFeatured(item);
                    }}
                    className="btn btn-outline-primary btn-sm"
                  >
                    View more
                  </button>
                  <button
                    onClick={() => handleDeleteProject(item.projectid)}
                    className="btn  btn-outline-primary btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserView;
/* */
