import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <span className='foot'>
        This application created by 
        <a
          href="https://github.com/bruk19"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <span className="user-link">Bruk Teshome</span>
        </a>
        <span> under CC Licence</span>
      </span>
    </footer>
  );
}

export default Footer;
