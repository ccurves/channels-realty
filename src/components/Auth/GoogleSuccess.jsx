import { CheckCircle } from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate, isAuth } from "../../helpers/auth";

const GoogleSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = () => {
      // axios
      //   .get(`${process.env.REACT_APP_API_URL}/auth/login/success`, {
      //     // mode: "cors",
      //     withCredentials: true,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     // authenticate(res.data, () => {
      //     //   isAuth && navigate("/");
      //     // });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     // setError(err.response.data.errors);
      //   });
      console.log(window.document.cookie);

      fetch(`${process.env.REACT_APP_API_URL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        // credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        cookie:
          "session=eyJwYXNzcG9ydCI6eyJ1c2VyIjp7Im90aGVycyI6eyJyZXNldFBhc3N3b3JkTGluayI6e30sIl9pZCI6IjYzNGFiZjJjYzYyNDBkY2MzYzFiODZmYiIsImZpcnN0bmFtZSI6IlNpbW9uIiwibGFzdG5hbWUiOiJGcm9zdCIsImVtYWlsIjoic2ltb25mcm9zdDkxNkBnbWFpbC5jb20iLCJyZWdTdGF0dXMiOiJOb3QgcHJvY2Vzc2VkIiwidmVyaWZpZWQiOmZhbHNlLCJyb2xlIjoidXNlciIsImlzQWRtaW4iOmZhbHNlLCJyZWZmZXJhbHMiOltdLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTE1VDE0OjA5OjQ4LjMxMloiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTE1VDE0OjA5OjQ4LjMxMloiLCJfX3YiOjB9LCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpmYVdRaU9pSTJNelJoWW1ZeVkyTTJNalF3WkdOak0yTXhZamcyWm1JaUxDSnBZWFFpT2pFMk5qWTVNRGN5T1RFc0ltVjRjQ0k2TVRZMk56VXhNakE1TVgwLmtzNEUzMi1qaDZVTUtwTFAyY0x4MGc2dFlPekgxdkVFd29vRUx2bGFDQVkifX19; session.sig=-tKjM3lsjleIMcjnfKJgs6qt59w",
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject);
          // authenticate(resObject, () => {
          //   isAuth && navigate("/");
          // });
        })
        .catch((err) => {
          console.log(err);
        });
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
