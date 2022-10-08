import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Forgot = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //Submit data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      axios
        .put(`${process.env.REACT_APP_API_URL}/auth/forgotPassword`, {
          email,
        })
        .then((res) => {
          setFormData({
            ...formData,
            email: "",
          });
          // toast.success("Reset link sent! Kindly check your inbox");
          window.location.replace("/mail-to?email=" + email + "&&type=reset");
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        });
    } else {
      toast.error("Please fill out all the fields");
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
              <h1 class="display-5">Forgot password?</h1>
              <p>
                Enter the email address you used when you joined and we'll send
                you instructions to reset your password.
              </p>
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label" for="resetPasswordSrEmail" tabindex="0">
              Your email
            </label>

            <input
              type="email"
              class="form-control form-control-lg"
              name="email"
              placeholder="Enter your email address"
              aria-label="Enter your email address"
              onChange={handleChange("email")}
              value={email}
            />
            <span class="invalid-feedback">
              Please enter a valid email address.
            </span>
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-lg">
              Submit
            </button>

            <Link to="/login" class="link">
              <div class="text-center">Back to Sign in</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
