import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png"; 

function Header() {
  const [isHeaderBlack, setIsHeaderBlack] = useState(false);





  // Black background toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderBlack(true);
      } else {
        setIsHeaderBlack(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-container ${isHeaderBlack ? "header-solid-black" : ""}`}
    >
      {/* LeftSide: LOGO and Nav-links */}
      <div className="header-left">
        <Link to="/">
          <img className="header-logo" src={logo} alt="Netflix Logo" />
        </Link>
        <nav className="header-nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/tv-shows" className="nav-link">
            TV Shows
          </Link>
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
          <Link to="/latest" className="nav-link">
            New & Popular
          </Link>
          <Link to="/my-list" className="nav-link">
            My List
          </Link>
          <Link to="/browse-languages" className="nav-link">
            Browse by Language
          </Link>
        </nav>
      </div>
      {/* RightSide Core Container Shell */}
      <div className="header-right"></div>
    </header>
  );
}
export default Header;
