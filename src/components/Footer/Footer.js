import React from "react";
import "../Footer/Footer.scss";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="left-side">
            <div className="logo">
              <img width={150} src="/images/logo-1.png" alt="alt-image" />
            </div>
            <Link to="/">
              <h5>BritIndia</h5>
            </Link>
          </div>
          <div className="right-side">
            <div className="top">
              <div className="hyperlinks">
                <Link to="/about">About</Link>
                <Link to="/start-your-project">Contact</Link>
                <Link to="/privacy-policy">Privacy & Policy</Link>
              </div>
              <div className="emaillink">hello@britindia.com</div>
            </div>
            <div className="bottom">
              <div>
                <a href="">Services</a>
              </div>
              <div className="socials">
                <Link to="https://www.facebook.com/nexgenelit">
                  <FaFacebookF />
                </Link>
                <Link to="https://www.instagram.com/nexgenelit/">
                  <FaInstagram />
                </Link>
                <Link to="https://www.linkedin.com/company/nexgen-elit">
                  <FaLinkedin />
                </Link>
                <Link to="mailTo:hello@nexgenelit.com">
                  <IoIosMail />
                </Link>
              </div>
              <div className="copyright">© 2088 BritIndia</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
