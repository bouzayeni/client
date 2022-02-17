import React from "react";
import "../components/components.css";
import { FaTwitter,FaFacebook,FaLinkedin ,FaYoutube} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="Mylinks">
     
    
        <a className="dav">
          <FaTwitter/>
        </a>
       
        <a className="dav" >
          <FaFacebook/>
        </a>
        
        <a  className="dav">
          <FaYoutube/>
        </a>
        <a  className="dav">
          <FaLinkedin/>
        </a>
        
      </div>
      <br />
      <a href="/" className="copyright">
        <p>&copy; copyright: HTTP200 2022. All Right Reserved.</p>
      </a>
    </div>
  );
};

export default Footer;