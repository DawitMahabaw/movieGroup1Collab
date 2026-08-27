import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';
import logo from '../../assets/image/logo.png';

const Header = () => {
  const [show, setShow] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${show ? styles.nav_black : ''}`}>
        {/* LOGO */}
        <div className={styles.header_logo}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Netflix Logo" />
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className={styles.header_nav}>
          <ul className={styles.nav_links}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tv-shows">TV Shows</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/latest">New & Popular</Link></li>
            <li><Link to="/my-list">My List</Link></li>
            <li><Link to="/languages">Browse by Language</Link></li>
          </ul>
        </nav>

        {/* RIGHT SECTION */}
        <div className={styles.header_right}>
          <div className={styles.search_container}>
            <Search className={styles.icon} onClick={() => setSearchOpen(!searchOpen)} />
            {searchOpen && (
              <input type="text" placeholder="Search" className={styles.search_input} autoFocus />
            )}
          </div>

          <div className={styles.notification_container}>
            <Bell className={styles.icon} />
            <span className={styles.notification_badge} />
          </div>

          <div 
            className={styles.profile_container}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className={styles.profile_trigger}>
              <div className={styles.avatar_box}>
                <User className={styles.avatar_icon} />
              </div>
              <ChevronDown className={styles.arrow_icon} />
            </div>

            {dropdownOpen && (
              <div className={styles.dropdown_menu}>
                <ul>
                  <li><Link to="/account">Account</Link></li>
                  <li><Link to="/help">Help Center</Link></li>
                  <hr className={styles.divider} />
                  <li>Sign out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Scroll Test Content (CSS Module Fayyadama) */}
      <div className={styles.testContainer}>
        <h2>Header Test Page</h2>
        <p>Header background-ni gurraacha ta'uu isaa mirkaneessuuf fuula gadi scroll godhi...</p>
      </div>
    </>
  );
};

export default Header;