import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import GoogleButton from "./GoogleButton";

const Signup = () => {
  const [visible, setVisibilty] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { email, firstname, lastname, password1, password2 } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //Password visibility
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

    if (firstname && lastname && email && password1) {
      if (password1 === password2) {
        axios
          .post(`${process.env.REACT_APP_API_URL}/auth/register`, {
            firstname,
            lastname,
            email,
            password: password1,
          })
          .then((res) => {
            setFormData({
              ...formData,
              firstname: "",
              lasttname: "",
              email: "",
              password1: "",
              password2: "",
            });
            setLoading(false);

            toast.success(res.data.message);
            window.location.replace(
              "/mail-to?email=" + email + "&&type=verify"
            );
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.error);
          });
      } else {
        toast.error("Passwords don't match");
        setLoading(false);
      }
    } else {
      toast.error("Please fill all fields");
      setLoading(false);
    }
  };

  return (
    <div class="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
      <div
        class="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1"
        style={{ maxWidth: "25rem" }}
      >
        <form
          class="js-validate needs-validation"
          onSubmit={handleSubmit}
          novalidate
        >
          <div class="text-center">
            <div class="mb-5">
              <h1 class="display-5">Create your account</h1>
              <p>
                Already have an account?{" "}
                <Link to="/login" class="link">
                  Sign in here
                </Link>
              </p>
            </div>

            <div class="d-grid mb-4">
              <GoogleButton />
            </div>

            <span class="divider-center text-muted mb-4">OR</span>
          </div>

          <label class="form-label" for="fullNameSrEmail">
            Full name
          </label>

          <div class="row">
            <div class="col-sm-6">
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control form-control-lg "
                  name="firstName"
                  placeholder="Name"
                  onChange={handleChange("firstname")}
                  value={firstname}
                />
              </div>
            </div>

            <div class="col-sm-6">
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  name="lastName"
                  placeholder="Surname"
                  onChange={handleChange("lastname")}
                  value={lastname}
                />
              </div>
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label" for="signupSrEmail">
              Your email
            </label>
            <input
              type="email"
              class="form-control form-control-lg"
              placeholder="Email address"
              name="email"
              onChange={handleChange("email")}
              value={email}
            />
          </div>

          <div class="mb-4">
            <label class="form-label" for="signupSrPassword">
              Password
            </label>

            <div
              class="input-group input-group-merge"
              data-hs-validation-validate-class
            >
              <input
                type={visible ? "text" : "password"}
                class="js-toggle-password form-control form-control-lg"
                name="password"
                placeholder="8+ characters required"
                autocomplete="off"
                onChange={handleChange("password1")}
                value={password1}
              />
              <span
                class="js-toggle-password-target-1 input-group-append input-group-text"
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
          </div>

          <div class="mb-4">
            <label class="form-label" for="signupSrConfirmPassword">
              Confirm password
            </label>

            <div
              class="input-group input-group-merge"
              data-hs-validation-validate-class
            >
              <input
                type={visible ? "text" : "password"}
                class="js-toggle-password form-control form-control-lg"
                name="password2"
                id="signupSrConfirmPassword"
                placeholder="8+ characters required"
                autocomplete="off"
                onChange={handleChange("password2")}
                value={password2}
              />
              <span
                class="js-toggle-password-target-1 input-group-append input-group-text"
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

            <span class="invalid-feedback">
              Password does not match the confirm password.
            </span>
          </div>

          <div class="form-check mb-4">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="termsCheckbox"
              required
            />
            <label class="form-check-label" for="termsCheckbox">
              I accept the <a href="#">Terms and Conditions</a>
            </label>
            <span class="invalid-feedback">
              Please accept our Terms and Conditions.
            </span>
          </div>

          <div class="d-grid gap-2">
            <button
              type="submit"
              // disabled={loading}
              class="btn btn-primary btn-lg"
            >
              {loading ? (
                <div class="spinner-grow spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                " Create an account"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
