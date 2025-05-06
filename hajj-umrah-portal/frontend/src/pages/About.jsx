import React from 'react'
import './About.css'
import RollingGallery from '../components/RollingGallery'
import SocialShare from '../components/SocialShare';
const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div className="about-top">
          <h1 className="">
            <span className="awal">About</span> Us
          </h1>
        </div>
        <div className="abt-content">
          {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}
          <div className="abt-info">
            <h2>Welcome to our Hajj and Umrah tour Services !</h2>
            <p>
              <span>Since</span> 2001, we have been providing you with the best
              possible
            </p>
            <p>
              We are dedicated to providing you with the best possible
              experience during your Hajj and Umrah journey. Our website offers a
              wide range of services to help you plan your trip with ease and
              confidence.
            </p>
            <p>
              Our team of experienced guides and professionals is dedicated to
              ensuring that you have a safe and enjoyable journey. We understand
              the importance of having a well-planned and well-prepared trip,
              which is why we offer a variety of services to help you achieve
              your goals.
            </p>
          </div>
        </div>
        <div className="btns">
          <SocialShare />
        </div>
      </div>
    </div>
  );
}

export default About
