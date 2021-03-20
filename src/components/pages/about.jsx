import React from "react";
import Header from "./header";

import "./app.css";
import Footer from "./footer";

const About = () => {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
      <section  id="about">
            <h1 className="title">About us</h1>
            <div className="content">
              
              <div>
                <h3>
                Values
                </h3>
                <img src="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/content_pages/corporate/about_us/images/values.psd/jcr:content/renditions/cq5dam.web.600.600.jpeg" alt="Values"/>
                <p>The primary vision of our founders wasn't about making quick money. It was about inventing new technologies that would truly benefit people, and creating a culture where innovation and teamwork are valued above all else. Playing for the long run. Achieve this, and good things usually follow.</p>
              </div>
              <div>
                <h3>Innovations/achievements</h3>
                <img src="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/content_pages/corporate/about_us/images/story.psd/jcr:content/renditions/cq5dam.web.600.600.jpeg" alt=""/>
                <p>
                Better sound is just the beginning. We're passionate engineers, developers, researchers, retailers, marketers … and dreamers. One goal unites us—to create products and experiences our customers simply can't get anywhere else. If you want to hear more, we invite you to explore.
                </p>
              </div>
              
            </div>
          </section>
      </div>
      <div className="spacer">
        </div>
    <Footer/>
    </div>
  );
};

export default About;
