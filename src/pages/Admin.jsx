import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Affilates from "../components/Admin/Affilates";
import Header from "../components/Admin/Header";
import LandClaims from "../components/Admin/LandClaims";
import Overview from "../components/Admin/Overview";
import Sidebar from "../components/Admin/Sidebar";
import WithdrawalReqs from "../components/Admin/WithdrawalReqs";
import Navbar from "../components/UserDashboard/Navbar";
import { isAuth } from "../helpers/auth";

const Admin = ({ page }) => {
  useEffect(() => {
    // console.log(isAuth());
  }, []);
  return (
    <>
      {!isAuth() ? (
        <>
          <Navigate to="/login" />
        </>
      ) : (
        <>
          {!isAuth().isAdmin ? (
            <>
              {" "}
              <Navigate to="/" />
            </>
          ) : (
            <>
              {" "}
              <Navbar />
              <main id="content" role="main" class="main">
                <Header />
                <div class="content container" style={{ marginTop: "-20rem" }}>
                  <Sidebar page={page} />

                  <div className="sidebar-detached-content mt-3 mt-lg-0 row">
                    {page === "index" && <Overview />}
                    {page === "aff-req" && <Affilates />}
                    {page === "land-claims" && <LandClaims />}
                    {page === "withdrawal-reqs" && <WithdrawalReqs />}
                  </div>
                </div>
              </main>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Admin;
