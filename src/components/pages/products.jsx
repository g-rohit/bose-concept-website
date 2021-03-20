import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./app.css";
const Products = () => {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <h1 className="title">Latest products</h1>
        <div className="product-cards-container">

          <div className="each-product-card">
            <div className="img-container">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
            <div className="card-content">
              <h4 className="each-card-title">
                Product title which can be long
              </h4>
              <p className="price">₹15,000</p>
              <a href="#" className="cta">
                Details{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class=""
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>
        
          <div className="each-product-card">
            <div className="img-container">
              <img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />
            </div>
            <div className="card-content">
              <h4 className="each-card-title">
                Product title which can be long
              </h4>
              <p className="price">₹15,000</p>
              <a href="#" className="cta">
                Details{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class=""
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="each-product-card">
            <div className="img-container">
              <img src="https://images.unsplash.com/photo-1585386726088-9a4c86e49957?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="" />
            </div>
            <div className="card-content">
              <h4 className="each-card-title">
                Product title which can be long
              </h4>
              <p className="price">₹15,000</p>
              <a href="#" className="cta">
                Details{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class=""
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
            </div>
          </div>
        
        
        </div>

        
      </div>
      <div className="spacer"></div>
      <Footer />
    </div>
  );
};
export default Products;
