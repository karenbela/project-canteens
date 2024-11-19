import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database'; 
import './Footer.css';

const Footer = () => {
  const [footerData, setFooterData] = useState({
    about: '',
    contact: { email: '', phone: '' },
    socialLinks: { facebook: '', twitter: '', instagram: '' },
  });

  useEffect(() => {
    const db = getDatabase(); 
    const footerRef = ref(db, 'footerData'); 

    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFooterData(data);
      }
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>{footerData.about}</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: {footerData.contact.email}</p>
          <p>Phone: {footerData.contact.phone}</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a target="_blank" rel="noopener noreferrer" href={footerData.socialLinks.facebook}>
            Facebook
          </a>
          <a target="_blank" rel="noopener noreferrer" href={footerData.socialLinks.twitter}>
            Twitter
          </a>
          <a target="_blank" rel="noopener noreferrer" href={footerData.socialLinks.instagram}>
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Canteen's | Designed by Anonymous
      </div>
    </footer>
  );
};

export default Footer;
