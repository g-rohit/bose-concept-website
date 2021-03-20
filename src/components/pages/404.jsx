/* eslint-disable react/style-prop-object */
import React from 'react';
import cat from '../../images/cat.png'
import robot from '../../images/error-colored.svg';
const PageNotFound = () => {
  return (
    <div className="wrapper text-center">
      <h1>Page Not found</h1>
      <img src={robot} alt="not-found" style={{maxWidth:'800px'}}/>
      {/* <img src={cat} alt="not-found" style={{width:'600px'}}/> */}
   <h3> <a href="/" className="btn-primary">Go Back to Home <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3vh"
              height="3vh"
              fill="currentColor"
              viewBox="0 0 16 16"
            style={{verticalAlign:"middle"}}
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg> </a> </h3>
    </div>
  );
};

export default PageNotFound;
