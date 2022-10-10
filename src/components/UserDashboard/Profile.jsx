import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getCookie, isAuth, updateUser } from "../../helpers/auth";
import SideCardRef from "../common/SideCardRef";

const Profile = () => {
  const user = isAuth();
  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    phoneNumber: user.phoneNumber,
    textChange: "Save Changes",
  });

  const { firstname, lastname, phoneNumber, textChange } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({
      ...formData,
      [text]: e.target.value,
    });
  };

  //Submit data to API
  const handleSubmit = (e) => {
    e.preventDefault();
    const authToken = getCookie("token");
    setFormData({ ...formData, textChange: "Submitting..." });

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/user/update/${isAuth()._id}`,
        {
          firstname,
          lastname,
          phoneNumber,
        },
        {
          headers: {
            token: authToken,
          },
        }
      )
      .then((res) => {
        updateUser(res, () => {
          toast.success("Profile Updated Successfully");
          setFormData({ ...formData, textChange: "Save Changes" });
        });
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  return (
    <>
      <div className="col-lg-8">
        <Toaster />
        <div class="card">
          <div class="card-header">
            <h2 class="card-title h4">Your information</h2>
          </div>

          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div class="row mb-4">
                <label
                  for="firstNameLabel"
                  class="col-sm-3 col-form-label form-label"
                >
                  Full name{" "}
                </label>

                <div class="col-sm-9">
                  <div class="input-group input-group-sm-vertical">
                    <input
                      type="text"
                      class="form-control"
                      name="firstName"
                      id="firstNameLabel"
                      onChange={handleChange("firstname")}
                      value={firstname}
                    />
                    <input
                      type="text"
                      class="form-control"
                      name="lastName"
                      id="lastNameLabel"
                      onChange={handleChange("lastname")}
                      value={lastname}
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <label
                  for="emailLabel"
                  class="col-sm-3 col-form-label form-label"
                >
                  Email
                </label>

                <div class="col-sm-9">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="emailLabel"
                    aria-label="Email"
                    value={user.email}
                    readOnly
                  />
                </div>
              </div>

              <div class="row mb-4">
                <label
                  for="phoneLabel"
                  class="col-sm-3 col-form-label form-label"
                >
                  Phone <span class="form-label-secondary">(Optional)</span>
                </label>

                <div class="col-sm-9">
                  <input
                    class="js-input-mask form-control"
                    name="phone"
                    id="phoneLabel"
                    type="text"
                    onChange={handleChange("phoneNumber")}
                    value={phoneNumber}
                  />
                </div>
              </div>

              <div id="accountType" class="row mb-4">
                <label class="col-sm-3 col-form-label form-label">
                  Account type
                </label>

                <div class="col-sm-9">
                  <div class="input-group input-group-sm-vertical">
                    <label class="form-control " for="userAccountTypeRadio1">
                      <span class="form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="userAccountTypeRadio"
                          id="userAccountTypeRadio1"
                          checked={user.role === "user"}
                          readOnly
                        />
                        <span class="form-check-label">User</span>
                      </span>
                    </label>

                    <label class="form-control" for="userAccountTypeRadio2">
                      <span class="form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="userAccountTypeRadio"
                          id="userAccountTypeRadio2"
                          checked={user.role === "affilate"}
                          readOnly
                        />
                        <span class="form-check-label">Affilate</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-start">
                <button type="submit" class="btn btn-primary">
                  {textChange}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SideCardRef />
    </>
  );
};

export default Profile;
