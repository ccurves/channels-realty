import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { getCookie } from "../../helpers/auth";

const UserModal = ({ affilate }) => {
  const authToken = getCookie("token");
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState("");

  const handleVerify = (status) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/admin/affilate/verify`,
        {
          status,
          userId: affilate.user._id,
          reason: formData,
        },
        {
          headers: {
            token: authToken,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        if (err.response === undefined) {
          toast.error("Something went wrong, please try again later");
        } else {
          toast.error(err.response.data.error);
        }
      });
  };
  return (
    <div
      class="modal fade"
      id={`editUserModal_${affilate._id}`}
      tabindex="-1"
      aria-labelledby="editUserModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editUserModalLabel">
              Verify affilate
            </h5>
          </div>

          <div class="modal-body">
            <div class="tab-content" id="editUserModalTabContent">
              <div
                class="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <form>
                  <div class="row mb-4">
                    <label
                      for="editFirstNameModalLabel"
                      class="col-sm-3 col-form-label form-label"
                    >
                      Full name
                      <i
                        class="tio-help-outlined text-body ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Displayed on public forums, such as Front."
                      ></i>
                    </label>

                    <div class="col-sm-9">
                      <div class="input-group input-group-sm-vertical">
                        <input
                          type="text"
                          class="form-control"
                          name="editFirstNameModal"
                          id="editFirstNameModalLabel"
                          placeholder="Your first name"
                          aria-label="Your first name"
                          value={affilate.user.firstname}
                        />
                        <input
                          type="text"
                          class="form-control"
                          name="editLastNameModal"
                          id="editLastNameModalLabel"
                          placeholder="Your last name"
                          aria-label="Your last name"
                          value={affilate.user.lastname}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row mb-4">
                    <label
                      for="editEmailModalLabel"
                      class="col-sm-3 col-form-label form-label"
                    >
                      Email
                    </label>

                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control"
                        name="editEmailModal"
                        id="editEmailModalLabel"
                        placeholder="Email"
                        aria-label="Email"
                        value={affilate.user.email}
                      />
                    </div>
                  </div>

                  <div class="row mb-4">
                    <label
                      for="editPhoneLabel"
                      class="col-sm-3 col-form-label form-label"
                    >
                      Phone
                    </label>

                    <div class="col-sm-9">
                      <div class="input-group input-group-sm-vertical">
                        <input
                          type="text"
                          class="js-masked-input form-control"
                          name="phone"
                          id="editPhoneLabel"
                          placeholder="+x(xxx)xxx-xx-xx"
                          aria-label="+x(xxx)xxx-xx-xx"
                          value={affilate.user.phoneNumber}
                        />

                        <div class="tom-select-custom">
                          <select
                            class="js-select form-select"
                            autocomplete="off"
                            name="editPhoneSelect"
                            data-hs-tom-select-options='{
                                  "searchInDropdown": false,
                                  "hideSearch": true
                                }'
                          >
                            <option value="Mobile" selected>
                              +234
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mb-4">
                    <div className="col-6">
                      <img
                        class="card-img"
                        src={affilate.frontDoc}
                        alt="frontDoc"
                        data-hs-theme-appearance="default"
                        style={{ maxWidth: "15rem" }}
                      ></img>
                    </div>
                    <div className="col-6">
                      <img
                        class="card-img"
                        src={affilate.backDoc}
                        alt="backDoc"
                        data-hs-theme-appearance="default"
                        style={{ maxWidth: "15rem" }}
                      ></img>
                    </div>
                  </div>

                  {status === "Failed" && (
                    <di>
                      <div class="mb-4 mt-6">
                        <label class="fs-6 form-label fw-bolder text-dark">
                          Reason for Document Rejection
                        </label>

                        <textarea
                          class="form-control form-control-lg form-control-solid"
                          name=""
                          id=""
                          rows="5"
                          cols="3"
                          onChange={(e) => setFormData(e.target.value)}
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary my-5 "
                        onClick={(e) => {
                          handleVerify("Failed");
                        }}
                        data-bs-dismiss="modal"
                      >
                        Update {affilate.user.firstname}
                      </button>
                    </di>
                  )}

                  <div class="d-flex justify-content-start">
                    <button
                      type="button"
                      onClick={(e) => {
                        setStatus("Failed");
                      }}
                      class="btn btn-danger"
                    >
                      Reject
                    </button>
                  </div>
                  <div class="d-flex justify-content-end">
                    <div class="d-flex gap-3">
                      <button
                        type="button"
                        class="btn btn-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          handleVerify("Verified");
                        }}
                        class="btn btn-primary"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
