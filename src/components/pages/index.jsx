/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import headphones from '../../images/red-headphones.png';
import Header from "../header";
import Footer from "../footer";
import "../css/style.min.css";
// import "./app.css"; 
import {  Link } from "react-router-dom";


function Home() {
    return(
      <div className="container">
   <Header />
          <main>
            <section>
                <h3 className="subtitle text-center">THE HOLIDAYS SHINE WITH BOSE SOUND.</h3>
                <img src={headphones}  alt="bose-headphones" className="homeHeadphones" />

                <div className="text-center">
                    <h1 className="title">DISCOVER GREAT GIFT IDEAS.</h1>
                    {/* <a href="/products" className='btn-primary'>Exlore products</a> */}
                    <Link to="/products" className='btn-primary'>Exlore products</Link>
                </div>
            </section>
        </main>
        <div className="spacer">
        </div>
        <Footer/>
      </div>
    )
}

export default Home;

