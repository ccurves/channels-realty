import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmailSent from "./components/Auth/EmailSent";
import EmailVerify from "./components/Auth/EmailVerify";
import GoogleSuccess from "./components/Auth/GoogleSuccess";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
// import ComingSoon from "./pages/ComingSoon";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";

import "./styles/App.css";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard page="index" />} />
          <Route path="/task" element={<Dashboard page="task" />} />
          <Route path="/profile" element={<Dashboard page="profile" />} />
          <Route path="/affilate/apply" element={<Dashboard page="apply" />} />
          <Route path="/login" element={<Auth page="login" />} />
          <Route path="/sign-up" element={<Auth page="signup" />} />
          <Route path="/forgot-password" element={<Auth page="forgot" />} />
          <Route
            path="/reset-password/:token"
            element={<Auth page="reset" />}
          />
          <Route path="/mail-to" element={<EmailSent type="verify" />} />
          <Route path="/activate/:token" element={<EmailVerify />} />
          <Route
            path="/affilate/withdraw"
            element={<Dashboard page="withdraw" />}
          />
          <Route
            path="/affilate/referrals"
            element={<Dashboard page="referrals" />}
          />
          <Route path="/affilate/land" element={<Dashboard page="land" />} />
          <Route path="/admin" element={<Admin page="index" />} />
          <Route
            path="/admin/affilate-requests"
            element={<Admin page="aff-req" />}
          />
          <Route
            path="/admin/land-claims"
            element={<Admin page="land-claims" />}
          />
          <Route
            path="/admin/withdrawal-reqs"
            element={<Admin page="withdrawal-reqs" />}
          />
          <Route path="*" element={<Error404 />} />
          <Route path="/auth/failed" element={<Error500 />} />
          <Route path="/auth/success" element={<GoogleSuccess />} />

          {/* <Route path="" element={<ComingSoon />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
