import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOn, setIsProfileOn] = useState(false);

  //   for blur
  // window.addEventListener() is a side effect.
  // useEffect sets up a scroll listener when the component appears, updates state based on scroll position, and removes the listener when the component disappears.
  // window.scrollY = how many pixels the page has been scrolled vertically.

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // the cleanup code using return
    // When the component is removed from the page(UI), React removes the scroll listener so it doesn't keep listening unnecessarily.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <img className={styles.logo} src={logo} alt="" />

        {/* navigation links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="">
            Home
          </Link>
          <Link className={styles.navLink} to="">
            Tv Shows
          </Link>
          <Link className={styles.navLink} to="">
            Movies
          </Link>
          <Link className={styles.navLink} to="">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="">
            My List
          </Link>
          <Link className={styles.navLink} to="">
            Browse by Language
          </Link>
        </nav>

        {/* right side section */}
        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>

            {/* this is conditional rendering using the && operator.
                it is like this 
                    if (isSearchOpen) {
                    return <input ... />;
                    } 
               && in JSX is basically a short way to say "render this only when this condition is true."
               condition && something
               If condition is true, JavaScript evaluates/returns something.
               If condition is false, it stops there.
          */}

            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* notification */}
          <button className={styles.iconButton}>
            {/* notification icon */}
            <Bell size={20} />
            <span className={styles.notificationBadge}>5</span>
          </button>

          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOn(!isProfileOn)}
              className={styles.profileButton}
            >
              {/* user icon */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown size={20} />

              {/* dropdown icon */}
            </button>
            {isProfileOn && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItem}>Account</Link>
                <Link className={styles.profileMenuItem}>Help Center</Link>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
