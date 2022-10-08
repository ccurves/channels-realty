import React from "react";
import logo from "../assets/img/logo-white.png";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "../styles/ComingSoon.css";

const ComingSoon = () => {
  const SimpleForm = () => <MailchimpSubscribe url={url} />;
  const url = process.env.REACT_APP_MAILCHIMP_URL;

  return (
    <>
      <div class="topleft">
        <img src={logo} alt="logo" className="logo" srcset="" />
      </div>
      <div class="wrapper">
        <h1>
          coming soon<span class="dot">.</span>
        </h1>
        <p>Our coders are hard at work.</p>

        <SimpleForm />
        {/* <div>
          <input type="text" placeholder="Enter your Email" />
          <button>
            Subscribe <i class="fa fa-paper-plane"></i>
          </button>
        </div> */}
        <p className="cta">
          Subscribe to be among the first to be notified when we launch!
        </p>
      </div>
      <div class="bottomleft">
        <div class="icons">
          <a href="https://instagram.com/channels_realty?igshid=YmMyMTA2M2Y=">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085844872560">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://t.me/channelsrealty">
            <i class="fa fa-paper-plane"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
