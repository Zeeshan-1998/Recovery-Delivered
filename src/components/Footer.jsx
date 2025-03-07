import React from "react";
import "../styles/footer.css";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-logo">LOGO</h2>
          <p className="footer-description">
            Experience The Convenience Of Recovery Delivered, Your
            Trusted Source For Online Medication Delivery. We Bring
            The Pharmacy To Your Doorstep, Ensuring Fast, Discreet,
            And Reliable Service. Whether You're Managing A Chronic
            Condition Or Need A One-Time Prescription Filled, We Make
            The Process Simple And Hassle-Free
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a>Home</a></li>
              <li><a>About Us</a></li>
              <li><a>Owners</a></li>
              <li><a>Tenants</a></li>
              <li><a>Properties</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Other Links</h4>
            <ul className="footer-links">
              <li><a>Online Medications</a></li>
              <li><a>Download App</a></li>
              <li><a>Start Treatment</a></li>
              <li><a>Online Urgent Care</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <img
                src={phone}
                alt="Phone icon"
                className="footer-phone-icon"
              />
              <span className="footer-phone-text">
                1-866-757-9868
              </span>
            </div>

            <h4 className="footer-heading social-heading">Social Media</h4>
            <div className="footer-social">
              <a>
                <img
                  src={twitter}
                  alt="Twitter"
                  className="footer-social-icon"
                />
              </a>
              <a>
                <img
                  src={facebook}
                  alt="Facebook"
                  className="footer-social-icon"
                />
              </a>
              <a>
                <img
                  src={youtube}
                  alt="YouTube"
                  className="footer-social-icon"
                />
              </a>
            </div>

            <p className="footer-ropstam">
              Designed And Developed By Ropstam
            </p>
          </div>
        </div>
      </div>

      <hr className="footer-separator" />

      <p className="footer-copyright">
        ©2024 - Recovery Delivered | All Right Reserved
      </p>
    </footer>
  );
}

export default Footer;