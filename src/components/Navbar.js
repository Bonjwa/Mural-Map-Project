import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a target="_blank" rel="noopener noreferrer" href="https://www.ctqconsultants.ca/" className='navbar-logo' onClick={closeMobileMenu}>
            <img src="https://i.imgur.com/lg7gSq5.png" alt="CTQ Logo"></img>
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
              <a
                target="_parent"
                href='../applications/mural map'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mural Map
              </a>
            </li>
            <li>
              <Link
                to='/survey'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mural Submission
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
