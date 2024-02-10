import React from "react";
import NFT from "../../images/landing.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({

  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99,
  

  
  offset: 120,
  delay: 50, 
  duration: 800, 
  easing: 'ease',
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});

const Landing = () => {
  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-up">
              <div className="spacer-single"></div>
              <h6>
                <span className="text-uppercase id-color-2">
                  Infomania
                </span>
              </h6>
              <div className="spacer-10"></div>
              <h1>Where security and integrity are held.</h1>
              <p className="lead">
                Infomania is a unbiased, journalist-safe platform for journalists to publish their work without fear of censorship or persecution. Dive into the world of transparent journalism with Infomania.
              </p>
              <div className="spacer-10"></div>
              <Link className="btn-main lead" to="/explore">
                Start Diving
              </Link>
              <div className="mb-sm-30"></div>
            </div>
            <div className="col-md-6 xs-hide">
              <img src={NFT} className="lazy img-fluid anas-smaller" alt="" data-aos="fade-in" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
