import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "./GoogleButton";
import { authenticate, isAuth } from "../../helpers/auth";
import axios from "axios";
import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [visible, setVisibilty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleToogle = (e) => {
    if (visible) {
      setVisibilty(false);
    } else {
      setVisibilty(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (email && password) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          authenticate(res, () => {
            setFormData({
              ...formData,
              email: "",
              password1: "",
            });
          });
          // isAuth && navigate("/");

          toast.success(`Hey ${isAuth().firstname}, Welcome back!`);
          isAuth() && isAuth().isAdmin ? navigate("/admin") : navigate("/");

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.errors === undefined) {
            toast.error("Wrong credentials, please check and try again");
            setLoading(false);
          } else {
            toast.error(err.response.data.errors);
            setLoading(false);
          }
        });
    } else {
      toast.error("Please fill out all the fields");
      setLoading(false);
    }
  };
  return (
    <div class="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
      <div
        class="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1"
        style={{ maxWidth: "25rem" }}
      >
        <form class="js-validate needs-validation" onSubmit={handleSubmit}>
          <div class="text-center">
            <div class="mb-5">
              <h1 class="display-5">Sign in</h1>
              <p>
                Don't have an account yet?{" "}
                <Link to="/sign-up" class="link">
                  Sign up here
                </Link>
              </p>
            </div>

            {/* <div class="d-grid mb-4">
              <GoogleButton />
            </div> */}

            <span class="divider-center text-muted mb-4"></span>
          </div>

          <div class="mb-4">
            <label class="form-label" for="signinSrEmail">
              Your email
            </label>
            <input
              type="email"
              class="form-control form-control-lg"
              name="email"
              id="signinSrEmail"
              tabindex="1"
              placeholder="email@address.com"
              aria-label="email@address.com"
              onChange={handleChange("email")}
            />
            <span class="invalid-feedback">
              Please enter a valid email address.
            </span>
          </div>

          <div class="mb-4">
            <label class="form-label w-100" for="signupSrPassword" tabindex="0">
              <span class="d-flex justify-content-between align-items-center">
                <span>Password</span>
                <Link to="/forgot-password" class="form-label-link mb-0">
                  Forgot Password?
                </Link>
              </span>
            </label>

            <div
              class="input-group input-group-merge"
              data-hs-validation-validate-class
            >
              <input
                type={visible ? "text" : "password"}
                class="js-toggle-password form-control form-control-lg"
                name="password"
                id="signupSrPassword"
                placeholder="8+ characters required"
                onChange={handleChange("password")}
              />
              <span
                class="input-group-append input-group-text"
                onClick={handleToogle}
                style={{ cursor: "pointer" }}
              >
                {visible ? (
                  <VisibilityRounded sx={{ color: "#667085", width: "18px" }} />
                ) : (
                  <VisibilityOffRounded
                    sx={{ color: "#667085", width: "18px" }}
                  />
                )}
              </span>
            </div>

            <span class="invalid-feedback">Please enter a valid password.</span>
          </div>

          <div class="form-check mb-4">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="termsCheckbox"
            />
            <label class="form-check-label" for="termsCheckbox">
              Remember me
            </label>
          </div>

          <div class="d-grid">
            <button type="submit" class="btn btn-primary btn-lg">
              {loading ? "Logging in..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
