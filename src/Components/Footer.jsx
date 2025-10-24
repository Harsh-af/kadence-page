import React from 'react';

function Footer() {
  return (
    <div className="footer-container">
      <div className="banner-image">
        <img src="/Images/banner image.png" alt="Banner" />
      </div>
      
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo-section">
            <img src="/Images/Logo.svg" alt="KADENCE Logo" className="company-logo" />
            
            <div className="country-flags">
              <img src="/Images/countries.png" alt="Country Flags" />
            </div>
            
            <p className="company-unit">A UNIT OF CREDURGE PVT LTD.</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <img src="/Images/map-pin.svg" alt="Location" className="contact-icon" />
                <span>3RD FLOOR, MAHANANDI PLAZA, ST. Marks Road, Bangalore -560001</span>
              </div>
              
              <div className="contact-item">
                <img src="/Images/mail.svg" alt="Email" className="contact-icon" />
                <span>support@kadence.in</span>
              </div>
            </div>
            
            <div className="social-media">
              <p className="follow-text">FOLLOW US AT</p>
              <div className="social-icons">
                <img src="/Images/facebook.svg" alt="Facebook" className="social-icon" />
                <img src="/Images/instagram.svg" alt="Instagram" className="social-icon" />
                <img src="/Images/linkedin.svg" alt="LinkedIn" className="social-icon" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">RECENT POSTS</h3>
          <div className="recent-posts">
            <div className="post-item">
              <img src="/Images/recent_posts_1.png" alt="Recent Post 1" />
              <div className="post-content">
                <h4 className="post-title">Do Digital pianos ever go out of tune ?</h4>
                <p className="post-date">JUNE 23,2025</p>
              </div>
            </div>
            
            <div className="post-separator"></div>
            
            <div className="post-item">
              <img src="/Images/recent_posts_2.png" alt="Recent Post 2" />
              <div className="post-content">
                <h4 className="post-title">Do Digital pianos ever go out of tune ?</h4>
                <p className="post-date">JUNE 23,2025</p>
              </div>
            </div>
            
            <div className="post-separator"></div>
            
            <div className="post-item">
              <img src="/Images/recent_posts_3.png" alt="Recent Post 3" />
              <div className="post-content">
                <h4 className="post-title">Do Digital pianos ever go out of tune ?</h4>
                <p className="post-date">JUNE 23,2025</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ's & service</a></li>
            <li><a href="#">Kadence xperience Stores</a></li>
            <li><a href="#">Kadence Pro</a></li>
            <li><a href="#">Track Your Order</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="terms-links">
            <a href="#">Terms & conditions</a>
            <span className="separator">|</span>
            <a href="#">privacy Policy</a>
          </div>
          <div className="copyright">
            © Copyright 2025 KADENCE.IN All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
