import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { Search, User, ChevronDown, Bell } from "lucide-react";
import styles from "./Header.module.css";

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

  // Closes search and dropdown automatically when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header
      className={`${styles["header-container"]} ${isHeaderBlack ? styles["header-solid-black"] : ""}`}
    >
      {/* LeftSide: LOGO and Nav-links */}
      <div className={styles["header-left"]}>
        <Link to="/">
          <img
            className={styles["header-logo"]}
            src={logo}
            alt="Netflix Logo"
          />
        </Link>
        <nav className={styles["header-nav-links"]}>
          <Link to="/" className={styles["nav-link"]}>
            Home
          </Link>
          <Link to="/tv-shows" className={styles["nav-link"]}>
            TV Shows
          </Link>
          <Link to="/movies" className={styles["nav-link"]}>
            Movies
          </Link>
          <Link to="/latest" className={styles["nav-link"]}>
            New & Popular
          </Link>
          <Link to="/my-list" className={styles["nav-link"]}>
            My List
          </Link>
          <Link to="/browse-languages" className={styles["nav-link"]}>
            Browse by Language
          </Link>
        </nav>
      </div>

      {/* RightSide: Search bar, Bell, Avatar drop down */}
      <div className={styles["header-right"]}>
        {/* Item 1: Expanding Search */}
        <div
          ref={searchRef}
          className={`${styles["search-bar-wrapper"]} ${isSearchOpen ? styles.open : ""}`}
        >
          <Search
            className={styles["header-icon"]}
            size={20}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <input
            type="text"
            className={styles["search-input"]}
            placeholder="Titles, genres..."
          />
        </div>

        {/* Item 2: Notification Bell */}
        <Bell className={styles["header-icon"]} size={20} />

        {/* Item 3 & 4: Profile Avatar and Chevron */}
        <div ref={dropdownRef} className={styles["header-profile-container"]}>
          <div
            className={styles["header-profile-box"]}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <User size={20} />
            <ChevronDown
              className={`${styles["header-chevron"]} ${isDropdownOpen ? styles.flipped : ""}`}
              size={16}
            />
          </div>

          {isDropdownOpen && (
            <div className={styles["profile-dropdown-menu"]}>
              <div className={styles["dropdown-item"]}>Manage Profiles</div>
              <div className={styles["dropdown-item"]}>Account Info</div>
              <div
                className={`${styles["dropdown-item"]} ${styles["border-top"]}`}
              >
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
