import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="reasons">
        <div className="reason reason-1">
          <h2>History</h2>
          <h3>Working Since 1950</h3>
          <p>Decades of experience in providing the best quality Holi colors.</p>
        </div>

        <div className="reason reason-2">
          <h2>Certified</h2>
          <h3>Certified by National Botanical Research Institute</h3>
          <p>Our Holi colors are lab-tested and certified for safety.</p>
        </div>

        <div className="reason reason-3">
          <h2>Eco-Friendly</h2>
          <h3>Chemical-Free & Eco-Friendly</h3>
          <p>Safe for all ages, made from 100% natural ingredients.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
