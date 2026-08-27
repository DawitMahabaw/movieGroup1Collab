import React, { useState, useEffect } from "react";
import axios from "axios";

function Banner() {
  // T-10: State management to hold movie data
  const [movie, setMovie] = useState(null);

  return (
    <header className="banner">
      <h1>Netflix Banner Placeholder</h1>
    </header>
  );
}

export default Banner;
