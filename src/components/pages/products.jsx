/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../header";
import Footer from "../footer";
import productsInfo from "../../products_info.json";
import EachProductCard from "../productCard";

const Products = () => {
  // Object.keys(productsInfo).forEach(eachProduct => console.log(eachProduct));

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <h1 className="title">Latest products</h1>
        <div className="product-cards-container">
          {productsInfo.map((eachProduct, index) => (
            <EachProductCard
              thumbnail={
                eachProduct.thumbnail
                  ? eachProduct.thumbnail
                  : "https://dummyimage.com/16:9x263/"
              }
              title={eachProduct.title}
              price={eachProduct.price}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="spacer"></div>
      <Footer />
    </div>
  );
};
export default Products;
