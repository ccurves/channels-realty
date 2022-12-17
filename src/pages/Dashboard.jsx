import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import AffilateOverview from "../components/AffilateDashboard/AffilateOverview";
import Application from "../components/AffilateDashboard/Application";
import Withdraw from "../components/AffilateDashboard/Withdraw";
import Activate from "../components/UserDashboard/Activate";
import Header from "../components/UserDashboard/Header";
import Navbar from "../components/UserDashboard/Navbar";
import Overview from "../components/UserDashboard/Overview";
import PendingReg from "../components/UserDashboard/PendingReg";
import Profile from "../components/UserDashboard/Profile";
import Referrals from "../components/UserDashboard/Referrals";
import Sidebar from "../components/UserDashboard/Sidebar";
import Task from "../components/UserDashboard/Task";
import { checkToken, isAuth } from "../helpers/auth";

const Dashboard = ({ page }) => {
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {!isAuth() ? (
        <Navigate to="/login" />
      ) : isAuth() && isAuth().isAdmin ? (
        <Navigate to="/admin" />
      ) : (
        <>
          {isAuth().regStatus === "Not processed" ? (
            <Activate />
          ) : (
            <>
              <Navbar />
              <main id="content" role="main" class="main">
                <Header />
                <div class="content container" style={{ marginTop: "-20rem" }}>
                  <Sidebar page={page} />
                  {isAuth().regStatus === "Pending" ? (
                    <div className="sidebar-detached-content mt-3 mt-lg-0 row">
                      <PendingReg />
                    </div>
                  ) : (
                    <div className="sidebar-detached-content mt-3 mt-lg-0 row">
                      {page === "index" &&
                        (isAuth().role === "affilate" ? (
                          <AffilateOverview />
                        ) : (
                          <Overview />
                        ))}
                      {page === "task" && <Task />}
                      {page === "profile" && <Profile />}
                      {page === "apply" && <Application />}
                      {page === "withdraw" && <Withdraw />}
                      {page === "referrals" && <Referrals />}
                    </div>
                  )}
                </div>
              </main>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
