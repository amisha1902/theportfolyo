import React from "react";
function Contact(){
    return(
        <section className="section contact" aria-label="contact me" id="contact">
              <div className="container">

                <h2 className="title h2 section-title">Get In Touch</h2>

                <div className="contact-content">

                  <form action="./index.html" method="post" className="contact-form">

                    <input type="text" name="name" placeholder="Full name" autocomplete="off" required className="input-field" />

                    <input type="email" name="email_address" placeholder="Email address" autocomplete="off" required
                      className="input-field" />

                    <input type="tel" name="phone" placeholder="Phone" autocomplete="off" className="input-field" />
                    <textarea name="message" placeholder="Enter massges" required className="input-field"></textarea>


                    <button type="submit" className="btn btn:hover">
                      <span className="span">Get A Quote</span>

                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </button>
                  </form>

                  {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d898.4329239267093!2d-73.91493787358391!3d40.76299026683699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671529019371!5m2!1sen!2sbd"
                        width="600" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" className="map"></iframe> */}

                  <ul className="contact-list">

                    <li className="contact-item">

                      <div className="item-icon">
                        <img src="assets/images/contact-icon-1.png" style={{ "width": "50", "height": "50" }} loading="lazy"
                          alt="contact icon" />
                      </div>

                      <div>
                        <span className="title h6">+91-9212321321</span>

                        {/* <span className="title h6">789 (569) 126 35</span> */}
                      </div>

                    </li>

                    <li className="contact-item">

                      <div className="item-icon">
                        <img src="assets/images/contact-icon-2.png" style={{ "width": "50", "height": "50" }} loading="lazy"
                          alt="contact icon" />
                      </div>

                      <div>
                        <address className="title h6">
                          Los Angeles, America
                        </address>
                      </div>

                    </li>

                    <li className="contact-item">

                      <div className="item-icon">
                        <img src="assets/images/contact-icon-3.png" style={{ "width": "50", "height": "50" }} loading="lazy"
                          alt="contact icon" />
                      </div>

                      <div>
                        <span className="title h6">portfolio3@gmail.com</span>

                        {/* <span className="title h6">jobs@drew.com</span> */}
                      </div>

                    </li>

                  </ul>


                </div>
              </div></section>
    );
}
export default Contact;