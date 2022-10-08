import React from "react";
import icon from "../../assets/brands/google-icon.svg";

const GoogleButton = () => {
  const google = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };
  return (
    <>
      <button type="button" class="btn btn-white btn-lg" onClick={google}>
        <span class="d-flex justify-content-center align-items-center">
          <img class="avatar avatar-xss me-2" src={icon} alt="" />
          Sign in with Google
        </span>
      </button>
    </>
  );
};

export default GoogleButton;
