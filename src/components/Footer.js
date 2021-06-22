import React from 'react';
import './Footer.css';
import { Button } from './Button';

function Footer() {
  const excelTable = ()=> window.location.href="https://ctqconsultants-my.sharepoint.com/:x:/g/personal/ctqgis_ctqconsultants_ca/EYniHJRIKOJEjUNtOAOPiakBgVu-3MTbe9H33mHHgBYCNg?e=hSaElH"
  
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Get the latest Excel table of murals and their addresses here:
        </p>
        <div className='input-areas'>
            <Button 
              buttonStyle='btn--outline'
              onClick = {excelTable}
            >
                Download
            </Button>
        </div>
        <p className='footer-subscription-text'>
          <br></br>
          Go to File, Save As, Download a Copy
        </p>
      </section> */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>© 2021 CTQ Consultants Ltd.. All Rights Reserved</small>
          <div className='social-icons'>
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              href="https://www.facebook.com/CTQ-Consultants-Ltd-128916220493201" 
              className='social-icon-link facebook'
            >
                <i className='fab fa-facebook-f' />
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              href="https://www.instagram.com/ctqkelowna/" 
              className='social-icon-link facebook'
            >
                <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link twitter'
              rel="noopener noreferrer"
              href="https://twitter.com/CtqLtd"
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link twitter'
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/ctq-consultants-ltd.?trk=tabs_biz_home"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
