import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { authenticate, isAuth } from "../../helpers/auth";

const EmailVerify = () => {
  const [error, setError] = useState(null);

  const location = useLocation();
  const token = location.pathname.split("/")[2];
  console.log(token);

  const navigate = useNavigate();

  useEffect(() => {
    const sendUser = () => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/activation`, {
          token,
        })
        .then((res) => {
          // console.log(res);
          authenticate(res, () => {
            isAuth && navigate("/");
          });
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.errors);
        });
    };
    sendUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(error);
  return (
    <main id="content" role="main" class="main">
      <div class="content container-fluid">
        <div class="row justify-content-sm-center text-center  py-10">
          <div class="col-sm-7 col-md-5 position-absolute top-50 start-50 translate-middle">
            {/* <CheckCircle sx={{ color: "#667085", width: "25px" }} /> */}
            {error ? (
              <>
                <h4>{error}</h4>

                <div class="mt-4 mb-3">
                  <a class="btn btn-primary" href="/sign-up">
                    Sign up
                  </a>
                </div>
              </>
            ) : (
              <>
                <h2>Email successfully verified!</h2>
                <p>Redirecting you to dashboard...</p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmailVerify;
