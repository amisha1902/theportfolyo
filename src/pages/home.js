import React, { useState, useEffect } from 'react';

function Home() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => {
        if (data && data.user && data.user.about) {
          setHomeData(data.user.about);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
        setLoading(true);
      });
  }, []);

  return (
    <div className="hero text-center" id="home">
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="banner-outline has-after">
              <div className="hero-banner img-holder has-after" style={{ width: "500px", height: "680px" }} data-tilt>
                <img src={homeData.avatar.url} style={{ width: "500px", height: "680px" }} alt="Drew Hays" className="img-cover" />
              </div>
              <span className="span title">{homeData.name}</span>
            </div>
            <div className="hero-content">
              <h1 className="h1 title">{homeData.title}</h1>
              <div className="wrapper">
                <button className="btn btn:hover">
                  <span className="span">Download CV</span>
                  <ion-icon name="cloud-download-outline" aria-hidden="true"></ion-icon>
                </button>
                <p className="hero-text">{homeData.subTitle}</p>
              </div>
            </div>
            <img src="assets/images/hero-shape-1.png" style={{ width: "559px", height: "232px" }} alt="shape" className="shape shape-1" />
            <img src="assets/images/hero-shape-2.png" style={{ width: "1358px", height: "497px" }} alt="shape1" className="shape shape-2" />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
