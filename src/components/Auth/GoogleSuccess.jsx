import { CheckCircle } from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate, isAuth } from "../../helpers/auth";

const GoogleSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/auth/login/success`, {
          mode: "cors",
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          // authenticate(res.data, () => {
          //   isAuth && navigate("/");
          // });
        })
        .catch((err) => {
          console.log(err);
          // setError(err.response.data.errors);
        });

      // fetch(`${process.env.REACT_APP_API_URL}/auth/login/success`, {
      //   method: "GET",
      //   credentials: "include",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((response) => {
      //     if (response.status === 200) return response.json();
      //     throw new Error("authentication has been failed!");
      //   })
      //   .then((resObject) => {
      //     authenticate(resObject, () => {
      //       isAuth && navigate("/");
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    };
    getUser();
  }, [navigate]);

  return (
    <main id="content" role="main" class="main">
      <div class="content container-fluid">
        <div class="row justify-content-sm-center text-center  py-10">
          <div class="col-sm-7 col-md-5 position-absolute top-50 start-50 translate-middle">
            <CheckCircle sx={{ color: "#667085", width: "25px" }} />
            <h2>Authentication successful!</h2>
            <p>Redirecting you to dashboard...</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoogleSuccess;
