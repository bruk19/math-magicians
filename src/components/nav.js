import * as React from "react";

import { Routes, Route, Link } from 'react-router-dom';
import Home from "../pages/Home"
import Quote from "../pages/Quote"

function Apps() {
  return (
    <div>
      <header>
        <h1>Math Magician</h1>
      </header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Quote" element={<Quote />} />
      </Routes>
    </div>
  );
}


export default Apps;