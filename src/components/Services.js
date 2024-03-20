import React, { useState, useEffect } from 'react';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => {
        // Check if data.services exists and set it to the state
        if (data && data.user && data.user.services) {
          setServices(data.user.services);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setLoading(true);
      });
  }, []);

  return (
    <section className="service text-center" aria-label="my services" id="service" >
      <div className="container" style={{ maxWidth: "2000px" }}>
        <ul className="service-list">
          {loading ? (
            <p>Loading...</p>
          ) : (
            services.map(service => (
              <li className="service-item" key={service._id}>
                
                  <div className="card-icon">
                    {service.image && <img src={service.image.url} style={{ width: "100px", height: "100px" }} loading="lazy" alt="service icon" />}
                  </div>
                  <h3 className="card-title">
                    <a href="#home">
                      {service.name}
                    </a>
                  </h3>
                  <p>{service.desc}</p>
                  <p>Charge: {service.charge}</p>
               
              </li>
            ))
          )}
        </ul>
      </div>
      <section className="section cta" aria-label="work with me">
        <div className="container">
          <h2 className="title h2 section-title text-center">
            Let's Work Together On Your Next Project!
          </h2>
          <a href="#home" className="btn btn:hover">
            <span className="span">Hire Me Now</span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </div>
      </section>
    </section>
  );
}

export default Services;
