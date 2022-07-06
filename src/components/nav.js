import * as React from "react";

import { Link } from 'react-router-dom';


function Apps() {
  return (
    <div>
      <header>
        <h1>Math Magician</h1>
        <div className="nav-links-container">
          <Link className="links" to="/Home">
            Home
          </Link>
          <Link className="links" to="/maths">
            Calculator
          </Link>
          <Link className="links" to="/Quote">
            Quote
          </Link>
        </div>
      </header>
      
    </div>
  );
}


export default Apps;