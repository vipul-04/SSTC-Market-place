import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>FOR MORE DETAILS CONTACT</h4>
        <p><a href="https://sstc.ac.in/">SSTC</a></p>
        {/* <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>SSTC MARKET PLACE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; SSTC</p>
      </div>

      <div className="rightFooter">
        <h4>CONNECT WITH DEVELOPERS</h4>
        <a href="https://in.linkedin.com/in/g-yashwanth-sharma-a39a4a1b7">YASHWANTH</a>
        <a href="https://www.linkedin.com/in/vipul-dewangan-60b999202">VIPUL</a>
        {/* <a href="http://instagram.com/ngh">Facebook</a> */}
      </div>
    </footer>
  );
};

export default Footer;
