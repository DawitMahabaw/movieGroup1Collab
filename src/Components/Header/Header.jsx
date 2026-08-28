import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png"; 
import { Search, User, ChevronDown, Bell } from "lucide-react"; 

function Header() {
  const [isHeaderBlack, setIsHeaderBlack] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const searchRef = useRef(null);
 const dropdownRef = useRef(null);


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

      {/* RightSide: Search bar, Bell, Avatar drop down */}
      <div className="header-right">
        {/* Item 1: Expanding Search */}
        <div
          ref={searchRef}
          className={`search-bar-wrapper ${isSearchOpen ? "open" : ""}`}
        >
          <Search
            className="header-icon"
            size={20}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <input
            type="text"
            className="search-input"
            placeholder="Titles, genres..."
          />
        </div>

        {/* Item 2: Notification Bell */}
        <Bell className="header-icon" size={20} />

        {/* Item 3 & 4: Profile Avatar and Chevron */}
        <div ref={dropdownRef} className="header-profile-container">
          <div
            className="header-profile-box"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <User size={20} />
            <ChevronDown
              className={`header-chevron ${isDropdownOpen ? "flipped" : ""}`}
              size={16}
            />
          </div>

          {isDropdownOpen && (
            <div className="profile-dropdown-menu">
              <div className="dropdown-item">Manage Profiles</div>
              <div className="dropdown-item">Account Info</div>
              <div className="dropdown-item border-top">
                Sign Out of Netflix
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
