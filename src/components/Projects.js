import React, { useState, useEffect } from 'react';

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => {
        // Check if data.services exists and set it to the state
        if (data && data.user && data.user.projects) {
          setProjects(data.user.projects);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setLoading(true);
      });
  }, []);
    return(
        <section className="section project" aria-label="my latest projects" id="project">
      <div className="container">
        <ul className="slider-list">
          {loading ? (
            <p>Loading...</p>
          ) : (
            projects.map(project => (
              <li className="slider-item" key={project._id}>
                <div className="project-card text-center">
                  <div className="card-banner img-holder has-before" style={{ width: "1000px", height: "763px" }}>
                    <img src={project.image.url} style={{ width: "1000px", height: "763px" }} loading="lazy" alt={`Project poster: ${project.title}`} className="img-cover" />
                    <a href="#home" className="btn btn:hover">
                      <span className="span">Project Details</span>
                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </a>
                  </div>
                  <div className="card-content">
                    <p className="card-subtitle">{project.techStack}</p>
                    <h3 className="title h3">
                      <a href="#home" className="card-title">{project.title}</a>
                    </h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}

export default Project;