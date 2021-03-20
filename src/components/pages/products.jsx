/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../header";
import Footer from "../footer";
// import "../css/style.min.css";
// import "./app.css";

import EachProductCard from "../productCard";

const Products = () => {
  const details = {

    product1: {
      thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'product 1',
      price: '₹12,000'
    },
    product2: {
      thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'product 2',
      price: '₹25,000'
    },
    product3: {
      thumbnail: 'https://images.unsplash.com/photo-1585386726088-9a4c86e49957?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
      title: 'product 3',
      price: '₹37,000'
    }
,
    dummyImage: 'https://dummyimage.com/16:9x263/',
  }
  
  return (


    <div className="container">
      <Header />
      <div className="wrapper">
        <h1 className="title">Latest products</h1>
        <div className="product-cards-container">
          <EachProductCard thumbnail={details.product1.thumbnail} title={details.product1.title} price={details.product1.price}/>
          <EachProductCard thumbnail={details.product2.thumbnail} title={details.product2.title} price={details.product2.price}/>
          <EachProductCard thumbnail={details.product3.thumbnail} title={details.product3.title} price={details.product3.price}/>
          <EachProductCard thumbnail={details.dummyImage} title="Product 4" price="₹42,000"/>
          <EachProductCard thumbnail={details.dummyImage} title="Product 5" price="₹55,000"/>
          <EachProductCard thumbnail={details.dummyImage} title="Product 6" price="₹78,000"/>
          
        </div>
      </div>
      <div className="spacer"></div>
      <Footer />
    </div>
  );
};
export default Products;
