import { LogoutRounded } from "@mui/icons-material";
import React from "react";
import { signout } from "../../helpers/auth";

const Logout = () => {
  const handleLogout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    signout(() => {
      window.location.replace("/login");
    });
  };
  return (
    <span
      class="nav-link text-dark"
      onClick={handleLogout}
      data-placement="left"
    >
      <LogoutRounded
        sx={{ color: "#667085", width: "22px", margin: "0 7px" }}
      />
      <span class="nav-link-title">Sign out</span>
    </span>
  );
};

export default Logout;
