/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom'; 
const EachProductCard = (props) => {
  const path = 'products/'+props.title.toLowerCase().replaceAll(' ','-').trim();
  return (
    <div className="each-product-card">
      <Link to={path}>
      <div className="img-container">
        <img src={props.thumbnail} alt="proudct-image" />
      </div>
      <div className="card-content">
        <h4 className="each-card-title">{props.title}</h4>
        <p className="price">{props.price}</p>
        <a href={path} className="cta">
          Details{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </a>
      </div>
      </Link>
    </div>
  );
};

export default EachProductCard;
