import React, {useState, useEffect} from "react";
function Review(){
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch data from the API endpoint
      fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
        .then(response => response.json())
        .then(data => {
          // Check if data.services exists and set it to the state
          if (data && data.user && data.user.testimonials) {
            setTestimonials(data.user.testimonials);
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching services:', error);
          setLoading(true);
        });
    }, []);
    return(
        <section className="section testi" aria-label="what our client says" id="review">
        <div className="container">
          <div className="testi-content">
            {loading ? (
              <p>Loading testimonials...</p>
            ) : (
              testimonials.map((testimonial, index) => (
                <React.Fragment key={index}>
                  <blockquote className="title h4 section-text" style={{ fontSize: "2rem" }}>
                    &ldquo; {testimonial.review} &rdquo;
                  </blockquote>
  
                  <div className="profile-card">
                    <figure className="card-banner img-holder" style={{ width: "70px", height: "70px" }}>
                      <img
                        src={testimonial.image.url}
                        style={{ width: "70px", height: "70px" }}
                        loading="lazy"
                        alt={testimonial.name}
                        className="img-cover"
                      />
                    </figure>
  
                    <div>
                      <p className="title h5 card-title">{testimonial.name}</p>
                      <p className="card-subtitle">{testimonial.position}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      </section>
    );
  }
  
  export default Review;