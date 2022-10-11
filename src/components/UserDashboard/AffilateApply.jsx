import React, { useState } from "react";
import { getCookie, isAuth, updateUser } from "../../helpers/auth";
import toast from "react-hot-toast";
import axios from "axios";
import DropzoneComponent from "../common/DropzoneComponent";

const AffilateApply = ({ setStep }) => {
  const user = isAuth();
  const [frontFile, setfrontFile] = useState(null);
  const [backFile, setbackFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    docType: "Driver License",
  });

  const { firstname, lastname, email, phoneNumber, docType } = formData;

  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({
      ...formData,
      [text]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    const token = getCookie("token");
    e.preventDefault();
    if (frontFile && backFile && user) {
      axios
        .put(
          `${process.env.REACT_APP_API_URL}/user/affilate/kyc`,
          {
            userId: user._id,
            docType,
            frontFile,
            backFile,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data.others);
          updateUser(res.data.others, () => {
            toast.success(res.data.message);
          });
          // setFileUrl(null);
          setLoading(false);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          toast.error(err.response.data.error);
        });
    } else {
      toast.error("Certain fields are missing");
      setLoading(false);
    }
  };
  return (
    <div className="row">
      <div className="">
        <div class="card">
          <div class="card-header">
            <h2 class="card-title h4">Become An Influencer</h2>
          </div>

          <div class="card-body">
            <form onSubmit={handleSubmit}>
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
                      id="fullNameSrEmail"
                      onChange={handleChange("firstname")}
                      value={firstname}
                      required
                    />
                    <span class="invalid-feedback">
                      Please enter your first name.
                    </span>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      name="lastName"
                      onChange={handleChange("lastname")}
                      value={lastname}
                      required
                    />
                    <span class="invalid-feedback">
                      Please enter your last name.
                    </span>
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <label for="emailLabel" class=" form-label">
                  Email Address
                </label>

                <div class="col-sm-12">
                  <input
                    type="email"
                    class="form-control "
                    name="email"
                    id="emailLabel"
                    onChange={handleChange("email")}
                    value={email}
                    required
                  />
                </div>
              </div>

              <div class="js-add-field row mb-4">
                <label for="phoneLabel" class=" form-label">
                  Phone
                  <span class="form-label-secondary">(Optional)</span>
                </label>

                <div class="col-sm-12">
                  <div class="input-group input-group-sm-vertical">
                    <div class="tom-select-custom tom-select-custom-end">
                      <select class="js-select form-select" autocomplete="off">
                        <option value="Mobile" selected>
                          +234
                        </option>
                      </select>
                    </div>
                    <input
                      type="text"
                      class="js-input-mask form-control"
                      name="phone"
                      id="phoneLabel"
                      p
                      onChange={handleChange("phoneNumber")}
                      value={phoneNumber}
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <label for="phoneLabel" class="form-label">
                  Docunment
                </label>

                <div class="col-sm-12">
                  <div class="tom-select-custom">
                    <select
                      class="js-select form-select"
                      onChange={handleChange("docType")}
                      defaultValue={docType}
                    >
                      <option
                        value="Driver License"
                        data-option-template='<div class="d-flex align-items-start"><div class="flex-shrink-0"><i class="bi-globe"></i></div><div class="flex-grow-1 ms-2"><span class="d-block fw-semibold">Anyone</span><span class="tom-select-custom-hide small">Visible to anyone who can view your content. Accessible by installed apps.</span></div></div>'
                      >
                        Driver License
                      </option>
                      <option
                        value="Voter's Card"
                        data-option-template='<div class="d-flex align-items-start"><div class="flex-shrink-0"><i class="bi-lock"></i></div><div class="flex-grow-1 ms-2"><span class="d-block fw-semibold">Only you</span><span class="tom-select-custom-hide small">Only visible to you.</span></div></div>'
                      >
                        Voter's Card
                      </option>
                      <option
                        value="NIN"
                        data-option-template='<div class="d-flex align-items-start"><div class="flex-shrink-0"><i class="bi-lock"></i></div><div class="flex-grow-1 ms-2"><span class="d-block fw-semibold">Only you</span><span class="tom-select-custom-hide small">Only visible to you.</span></div></div>'
                      >
                        NIN
                      </option>
                      <option
                        value="International Passport"
                        data-option-template='<div class="d-flex align-items-start"><div class="flex-shrink-0"><i class="bi-lock"></i></div><div class="flex-grow-1 ms-2"><span class="d-block fw-semibold">Only you</span><span class="tom-select-custom-hide small">Only visible to you.</span></div></div>'
                      >
                        International Passport
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row pe-6 ps-6 mb-4">
                <div className="col-sm-6 mb-3">
                  <label for="phoneLabel" class="form-label fs-5">
                    Front
                  </label>

                  <DropzoneComponent
                    uploadFor="front"
                    setfrontFile={setfrontFile}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </div>
                <div className="col-sm-6">
                  <label for="phoneLabel" class="form-label fs-6">
                    Back
                  </label>
                  <DropzoneComponent
                    uploadFor="back"
                    setbackFile={setbackFile}
                    loading={loading}
                    setLoading={setLoading}
                  />
                </div>
              </div>

              <div class="d-flex justify-content-start d-print-none gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  class="btn btn-primary text-center"
                >
                  Become an affiliate
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => setStep("step1")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffilateApply;
