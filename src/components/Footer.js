import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>© 2020 CTQ Consultants Ltd.. All Rights Reserved</small>
          <div class='social-icons'>
            <a 
              target="_blank" 
              href="https://www.facebook.com/CTQ-Consultants-Ltd-128916220493201" 
              class='social-icon-link facebook'
            >
                <i class='fab fa-facebook-f' />
            </a>
            <a 
              target="_blank" 
              href="https://www.instagram.com/ctqkelowna/" 
              class='social-icon-link facebook'
            >
                <i class='fab fa-instagram' />
            </a>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
