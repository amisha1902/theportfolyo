import React, { useState, useEffect } from 'react';
function About() {
    const [socialMedia, setSocialMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => {
        if(data && data.user && data.user.skills){
            setSkills(data.user.skills)
        }
        if (data && data.user && data.user.social_handles) {
          setSocialMedia(data.user.social_handles);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(true);
      });
  }, []);

  return (
    <section className="section about" aria-label="about-me" id="about">
  <div className="container">
    <div className="tab-container">
      <ul className="tab-btn-list">
        <li className="tab-btn-item">
          <button className="tab-btn title h6 active" data-tab-btn="about">About Me</button>
        </li>
        <li className="tab-btn-item">
          <button className="tab-btn title h6" data-tab-btn="skillset">Skillset</button>
        </li>
        <li className="tab-btn-item">
          <button className="tab-btn title h6" data-tab-btn="interview">Interview</button>
        </li>
        <li className="tab-btn-item">
          <button className="tab-btn title h6" data-tab-btn="awards">Awards</button>
        </li>
        <li className="tab-btn-item">
          <button className="tab-btn title h6" data-tab-btn="exhibition">Exhibition</button>
        </li>
      </ul>

      <div className="tab-content active" data-tab-content="about">
        <div className="grid-list">
          <figure className="about-banner img-holder" style={{ width: "", height: "" }} data-tilt>
            <img src="assets/images/about-banner.jpg" style={{ width: "570px", height: "420px" }} loading="lazy" alt="about banner" className="img-cover" />
          </figure>
          <div className="about-content">
            <h2 className="h4 title section-title">Software Developer</h2>
            <p className="section-text">
              "As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems."
            </p>
            <ul className="about-list">
              <li className="about-item">
                <p className="list-title">Name</p>
                <span className="span title h5">John Doe</span>
              </li>
              <li className="about-item">
                <p className="list-title">Phone Number</p>
                <span className="span title h5">+91-9212321321</span>
              </li>
              <li className="about-item">
                <p className="list-title">Email Address</p>
                <span className="span title h5">portfolio3@gmail.com</span>
              </li>
              <li className="about-item" >
                <p className="list-title">Social Network</p>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <ul className="social-list" style={{display:"inline-block"}}>
                    {socialMedia.map(social => (
                      <li className="about-item" key={social._id}>
                        <div className="social-item">
                          {social.image && (
                            <img
                              src={social.image.url}
                              style={{ width: "30px", height: "30px" }}
                              loading="lazy"
                              alt="service icon"
                            />
                          )}
                          <div className="social-details">
                            <p>{social.platform}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="tab-content" data-tab-content="skillset">
  <div className="grid-list">
    <div className="skill-content">
      <h3 className="h4 title section-title">We help to create visual strategies.</h3>
      <p className="section-text">A very small stage in a vast cosmic arena great turbulent clouds encyclo-paedia galactica star stuff harvesting star light</p>
      <ul className="skill-list">
        {skills.map(skill => (
          <li key={skill._id}>
            <div className="skill-wrapper">
            <img src={skill.image.url} style={{ width: "30px", height: "20px" }} loading="lazy" alt="skill banner" className="img-cover" />
              <span className="span">{skill.name}</span>
              <span className="value">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <figure className="skill-banner img-holder" style={{ width: "570px", height: "420px" }} data-tilt>
                <img src="assets/images/skill-banner.jpg" style={{ width: "570px", height: "420px" }} loading="lazy" alt="skill banner" className="img-cover" />
              </figure>
  </div>
</div>


          <div className="tab-content" data-tab-content="interview">
            <div className="grid-list">
              <div className="interview-card img-holder" style={{ width: "376px", height: "420px" }} data-tilt>
                <img src="assets/images/interview-1.jpg" style={{ width: "376px", height: "420px" }} loading="lazy" alt="interview 1" className="img-cover" />
                <button className="btn btn:hover">Play</button>
              </div>
              <div className="interview-card img-holder" style={{ width: "376px", height: "420px" }} data-tilt>
                <img src="assets/images/interview-2.jpg" style={{ width: "376px", height: "420px" }} loading="lazy" alt="interview 2" className="img-cover" />
                <button className="btn btn:hover">Play</button>
              </div>
              <div className="interview-card img-holder" style={{ width: "376px", height: "420px" }} data-tilt>
                <img src="assets/images/interview-3.jpg" style={{ width: "376px", height: "420px" }} loading="lazy" alt="interview 3" className="img-cover" />
                <button className="btn btn:hover">Play</button>
              </div>
            </div>
          </div>

          <div className="tab-content" data-tab-content="award">
            <h3 className="h4 title section-title">We’re a team of creatives who are excited about unique ideas and help IT-tech companies to make identity by crafting UI/UX.</h3>
            <ul className="grid-list">
              <li>
                <div className="award-card">
                  <figure className="card-banner img-holder" style={{ width: "534px", height: "383px" }} data-tilt>
                    <img src="assets/images/awward-1.jpg" style={{ width: "534px", height: "383px" }} loading="lazy" alt="certificate" className="img-cover" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="award-card">
                  <figure className="card-banner img-holder" style={{ width: "534px", height: "383px" }} data-tilt>
                    <img src="assets/images/awward-2.jpg" style={{ width: "534px", height: "383px" }} loading="lazy" alt="certificate" className="img-cover" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="award-card">
                  <figure className="card-banner img-holder" style={{ width: "534px", height: "383px" }} data-tilt>
                    <img src="assets/images/awward-3.jpg" style={{ width: "534px", height: "383px" }} loading="lazy" alt="certificate" className="img-cover" />
                  </figure>
                </div>
              </li>
            </ul>
          </div>

          <div className="tab-content" data-tab-content="exhibition">
            <ul className="grid-list">
              <li>
                <div className="exhibition-card">
                  <figure className="card-banner img-holder" style={{ width: "376px", height: "200px" }} data-tilt>
                    <img src="assets/images/exhibition-1.jpg" style={{ width: "376px", height: "200px" }} loading="lazy" alt="ima" className="img-cover" />
                  </figure>
                  <div className="card-icon">
                    <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                  </div>
                </div>
              </li>
              <li>
                <div className="exhibition-card">
                  <figure className="card-banner img-holder" style={{ width: "376px", height: "200px" }} data-tilt>
                    <img src="assets/images/exhibition-2.jpg" style={{ width: "376px", height: "200px" }} loading="lazy" alt="video" className="img-cover" />
                  </figure>
                  <div className="card-icon">
                    <ion-icon name="logo-youtube" aria-hidden="true"></ion-icon>
                  </div>
                </div>
              </li>
              <li>
                <div className="exhibition-card">
                  <figure className="card-banner img-holder" style={{ width: "376px", height: "200px" }} data-tilt>
                    <img src="assets/images/exhibition-3.jpg" style={{ width: "376px", height: "200px" }} loading="lazy" alt="music" className="img-cover" />
                  </figure>
                  <div className="card-icon">
                    <ion-icon name="logo-soundcloud" aria-hidden="true"></ion-icon>
                  </div>
                </div>
              </li>
              <li>
                <div className="exhibition-card">
                  <figure className="card-banner img-holder" style={{ width: "376px", height: "200px" }} data-tilt>
                    <img src="assets/images/exhibition-4.jpg" style={{ width: "376px", height: "200px" }} loading="lazy" alt="ima" className="img-cover" />
                  </figure>
                  <div className="card-icon">
                    <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                  </div>
                </div>
              </li>
              <li>
                <div className="exhibition-card">
                  <figure className="card-banner img-holder" style={{ width: "376px", height: "200px" }} data-tilt>
                    <img src="assets/images/exhibition-5.jpg" width="376" height="200" loading="lazy" alt="ima" className="img-cover" />
                  </figure>
                  <div className="card-icon">
                    <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                  </div>
                </div>
              </li>
              <li>
                <div className="exhibition-card">
                  <figure className="card-banner img-holder" style={{ width: "376px", height: "200px" }} data-tilt>
                    <img src="assets/images/exhibition-6.jpg" width="376" height="200" loading="lazy" alt="ima" className="img-cover" />
                  </figure>
                  <div className="card-icon">
                    <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
    </section>
  );
}

export default About;
