import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

function Quote() {
    return (
      <>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/Quote">Quote</Link>
        </nav>
      </>
    );
  }
export default Quote;