import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a target="_blank" href="https://www.ctqconsultants.ca/" className='navbar-logo' onClick={closeMobileMenu}>
            <img src="https://www.ctqconsultants.ca/wp-content/uploads/2020/04/logo-white-sml.png"></img>
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                target="_parent"
                to='../applications/guide'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mural Guide
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                target="_parent"
                to='../applications/locator'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mural Locator
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li> */}

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
