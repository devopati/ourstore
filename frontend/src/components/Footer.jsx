import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdPaperPlane } from "react-icons/io";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";

function Footer() {
  const getCurrentYear = new Date().getUTCFullYear();
  return (
    <div className="footer-container">
      <div className="footer-icons-container">
        <div className="footer-icons">
          <div className="footer-icon">
            <FaFacebookF id="f-icon" />
          </div>
          <div className="footer-icon">
            <BsTwitter id="f-icon" />
          </div>
          <div className="footer-icon">
            <BsInstagram id="f-icon" />
          </div>
          <div className="footer-icon">
            <AiFillYoutube id="f-icon" />
          </div>
          <div className="footer-icon">
            <AiFillLinkedin id="f-icon" />
          </div>
        </div>
      </div>

      <div className="footer-links-container">
        <div className="footer-links">
          <div className="footer-link">
            <IoMdPaperPlane id="f-icon" />
            <h3>Contact Us</h3>
          </div>
          <div className="footer-link">
            <VscFeedback id="f-icon" />
            <h3>Help + Feedback</h3>
          </div>
          <div className="footer-link">
            <MdOutlinePrivacyTip id="f-icon" />
            <h3>Privacy</h3>
          </div>
          <div className="footer-link">
            <RiFilePaper2Line id="f-icon" />
            <h3>T&C</h3>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <small>
          Copyright &copy; {getCurrentYear} OurStore. All rights reserved.{" "}
        </small>
      </div>
    </div>
  );
}

export default Footer;
