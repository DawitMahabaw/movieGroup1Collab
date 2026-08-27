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
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${show ? styles.nav_black : ''}`}>
      
      {/* DIV 1: LOGO */}
      <div className={styles.header_logo}>
        <Link to="/">
          <img
            className={styles.logo}
            src={logo}
            alt="Netflix Logo"
          />
        </Link>
      </div>

      {/* DIV 2: NAV LINKS */}
      <div className={styles.header_nav}>
        <ul className={styles.nav_links}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tv-shows">TV Shows</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/latest">New & Popular</Link></li>
          <li><Link to="/my-list">My List</Link></li>
          <li><Link to="/languages">Browse by Language</Link></li>
        </ul>
      </div>

      {/* DIV 3: RIGHT SECTION */}
      <div className={styles.header_right}>
        {/* Search Container */}
        <div className={styles.search_container}>
          <Search 
            className={styles.icon} 
            onClick={() => setSearchOpen(!searchOpen)} 
          />
          {searchOpen && (
            <input
              type="text"
              placeholder="Search"
              className={styles.search_input}
              autoFocus
            />
          )}
        </div>

        {/* Notification Container */}
        <div className={styles.notification_container}>
          <Bell className={styles.icon} />
          <span className={styles.notification_badge}></span>
        </div>

        {/* Profile & Dropdown Container */}
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
  );
};

export default Header;