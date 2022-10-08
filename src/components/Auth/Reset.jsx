import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import toast from "react-hot-toast";
import { VisibilityOffRounded, VisibilityRounded } from "@mui/icons-material";

const Reset = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [visible, setVisibilty] = useState(false);
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
    token: "",
  });

  const handleToogle = (e) => {
    if (visible) {
      setVisibilty(false);
    } else {
      setVisibilty(true);
    }
  };

  const { password1, password2, token } = formData;

  useEffect(() => {
    let token = path;
    if (token) {
      setFormData({ ...formData, token });
    }
  }, [formData, path]);

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password2 && password1) {
      if (password1 === password2) {
        axios
          .put(`${process.env.REACT_APP_API_URL}/auth/resetPassword`, {
            newPassword: password1,
            resetPasswordLink: token,
          })
          .then((res) => {
            setFormData({ ...formData, password1: "", password2: "" });
            toast.success(res.data.message);
            localStorage.setItem("currentPage", "login");
            window.location.replace("/login");
          })
          .catch((err) => {
            toast.error(` ${err.response.data.error}`);
          });
      } else {
        toast.error(`Passwords do not match`);
      }
    } else {
      toast.error("Please fill all fields");
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
              <h1 class="display-5">Reset password</h1>
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label" for="resetPasswordSrEmail" tabindex="0">
              New Password
            </label>

            <div
              class="input-group input-group-merge"
              data-hs-validation-validate-class
            >
              <input
                type={visible ? "text" : "password"}
                class="js-toggle-password form-control form-control-lg"
                name="password"
                id="newPassword"
                placeholder="Enter new password"
                aria-label="Enter new password"
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
            <label class="form-label" for="resetPasswordSrEmail" tabindex="0">
              Confirm Password
            </label>

            <div
              class="input-group input-group-merge"
              data-hs-validation-validate-class
            >
              <input
                type={visible ? "text" : "password"}
                class="js-toggle-password form-control form-control-lg"
                name="cpassword"
                id="newPassword"
                placeholder="Confrim new password"
                aria-label="Confrim new password"
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
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reset;
