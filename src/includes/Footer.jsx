import React from 'react';
import '../build/css/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        

        <div className="socialIcons">
          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://www.whatsapp.com"><i className="fab fa-whatsapp"></i></a>
          <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
        </div>
        

      </div>
      <div className="footerBottom">
        <p>Copyright &copy;2024 Benjamin Humerez</p>
      </div>
    </footer>
  );
};

export default Footer;