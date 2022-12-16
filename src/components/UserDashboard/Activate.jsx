import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { isAuth, updateUser } from "../../helpers/auth";
import toast from "react-hot-toast";

const Activate = () => {
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  let refCode = localStorage.getItem("refCode");
  const [formData, setFormData] = useState({
    username: "",
    refBy: refCode,
  });

  const { username, refBy } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const validateInfo = () => {
    if (username) {
      if (username.toLowerCase() === refBy?.toLowerCase()) {
        return setMsg("Invalid! You can't refer yourself");
      }
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/validate`, {
          username,
          refBy,
        })
        .then((res) => {
          setValid(res.data.status);
          setMsg(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setMsg("Username is required");
    }
  };

  const onClose = () => {
    setMsg("Transaction cancelled");
    setValid(false);
    setFormData({
      ...formData,
      username: "",
      refBy: "",
    });
  };

  const handlePayment = () => {
    setLoading(true);
    console.log(process.env.REACT_APP_REG_AMOUNT);
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        confirmPayment(response.transaction_id);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        onClose();
        setLoading(false);
      },
    });
  };

  const handleSkip = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/modify/${isAuth()._id}`, {
        username,
        refBy,
      })
      .then((res) => {
        updateUser(res, () => {
          setFormData({
            ...formData,
            username: "",
            refBy: "",
          });
          // toast.success("Account activated!");
        });
        localStorage.removeItem("refCode");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const confirmPayment = (reference) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/activate/${reference}`)
      .then((res) => {
        updateUser(res, () => {
          setFormData({
            ...formData,
            username: "",
            refBy: "",
          });

          toast.success("Account activated!");
        });
        localStorage.removeItem("refCode");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const config = {
    public_key: "FLWPUBK_TEST-4283c3de42d6688f5992e108956eaf60-X",
    tx_ref: Date.now(),
    amount: process.env.REACT_APP_REG_AMOUNT,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: isAuth().email,
      name: `${isAuth().firstname + " " + isAuth().lastname}`,
    },
    meta: {
      refBy: refBy,
      username: username,
      userId: isAuth()._id,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <main id="content" role="main" class="main">
      <div class="content container-fluid">
        <div class="mb-3 mb-md-6">
          <Link to="/" class=" top-0 start-0 end-0 py-4 ">
            <img
              class="avatar avatar-xl avatar-4x3 avatar-centered"
              src={logo}
              alt=""
              data-hs-theme-appearance="default"
            />
          </Link>
        </div>

        <form class="js-step-form py-md-5 ">
          <div class="row justify-content-lg-center">
            <div class="col-lg-8">
              <ul
                id="addUserStepFormProgress"
                class="js-step-progress step step-sm step-icon-sm step step-inline step-item-between mb-3 mb-md-5"
              >
                <li class="step-item">
                  <a class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">1</span>
                    <div class="step-content">
                      <span class="step-title">Sign up</span>
                    </div>
                  </a>
                </li>

                <li
                  class={
                    valid !== "valid" ? "step-item active focus" : "step-item "
                  }
                >
                  <a class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">2</span>
                    <div class="step-content">
                      <span class="step-title">Complete registration</span>
                    </div>
                  </a>
                </li>

                <li
                  class={
                    valid === "valid" ? "step-item active focus" : "step-item "
                  }
                >
                  <a class="step-content-wrapper" href="">
                    <span class="step-icon step-icon-soft-dark">3</span>
                    <div class="step-content">
                      <span class="step-title">Activate account</span>
                    </div>
                  </a>
                </li>
              </ul>

              <div id="addUserStepFormContent">
                <div id="addUserStepProfile" class="card card-lg active">
                  <div class="card-body">
                    <div
                      class={
                        msg !== ""
                          ? "alert alert-soft-secondary alert-dismissible fade show "
                          : "alert alert-soft-secondary alert-dismissible fade d-none "
                      }
                      role="alert"
                    >
                      {msg}
                      <button
                        type="button"
                        class="btn-close"
                        onClick={() => setMsg("")}
                      ></button>
                    </div>

                    <div class="row mb-4">
                      <label
                        for="usernameLabel"
                        class="col-sm-3 col-form-label form-label"
                      >
                        Select username
                      </label>

                      <div class="col-sm-9">
                        <input
                          type="text"
                          class={
                            valid ? "form-control bg-light" : "form-control"
                          }
                          name="username"
                          id="usernameLabel"
                          placeholder="Username"
                          value={username}
                          readOnly={valid}
                          onChange={handleChange("username")}
                          required
                        />
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label
                        for="refLabel"
                        class="col-sm-3 col-form-label form-label"
                      >
                        Referred by{" "}
                        <span class="form-label-secondary">(Optional)</span>
                      </label>

                      <div class="col-sm-9">
                        <input
                          type="text"
                          class={
                            valid ? "form-control bg-light" : "form-control"
                          }
                          name="refBy"
                          value={refBy}
                          onChange={handleChange("refBy")}
                          id="refLabel"
                          readOnly={valid}
                          placeholder="Referrer"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="card-footer d-flex align-items-center">
                    <div class="ms-auto">
                      {valid ? (
                        <>
                          <div class="d-flex justify-content-end gap-3">
                            <button class="btn btn-white" onClick={handleSkip}>
                              Skip for now
                            </button>
                            <button
                              type="button"
                              onClick={handlePayment}
                              class="btn btn-primary"
                            >
                              {loading ? (
                                <div
                                  class="spinner-grow spinner-grow-sm text-warning ms-4 me-4"
                                  role="status"
                                >
                                  <span class="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              ) : (
                                "Activate"
                              )}
                            </button>
                          </div>
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={validateInfo}
                          class="btn btn-primary"
                        >
                          Proceed <i class="fa fa-chevron-right ms-3"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Activate;
