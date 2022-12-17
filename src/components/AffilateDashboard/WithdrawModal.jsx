import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { withdrawNav } from "../../data";
import { getCookie, isAuth } from "../../helpers/auth";
import StepNav from "../common/StepNav";
import Actions from "./withdrawlSteps/Actions";
import Step1 from "./withdrawlSteps/Step1";
import Step2 from "./withdrawlSteps/Step2";
import Step3 from "./withdrawlSteps/Step3";

const WithdrawModal = () => {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState("");
  const [step, setStep] = useState("step1");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    acctName: "",
    acctNum: "",
    bank: "",
  });

  const { acctName, acctNum, bank } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const checkBalance = (e) => {
    let value = e.target.value;
    const re = /^[0-9\b]+$/;

    if (value <= 0 || value === "" || !re.test(value)) {
      setBalance("invalid");
    } else {
      if (isAuth().wallet.refBouns < value) {
        setBalance("insuffcient");
      } else {
        setBalance("");
        setAmount(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = getCookie("token");

    if (amount !== 0 && acctName && acctNum && bank) {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/transaction/withdraw`,
          {
            userId: isAuth()._id,
            amount,
            acctName,
            type: "Withdrawal",
            bank,
            acctNum,
          },
          {
            headers: {
              token: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setFormData({
            ...formData,
            acctName: "",
            acctNum: "",
            bank: "",
            amount: 0,
          });
          toast.success(res.data.message);

          // window.location.reload();
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };

  const verifyNum = (e) => {
    e.preventDefault();

    setLoading(true);
    if (acctNum && bank) {
      axios
        .get(
          `https://api.paystack.co/bank/resolve?account_number=${acctNum}&bank_code=${bank}&currency=NGN`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_SECRET_KEY}`,
            },
          }
        )
        .then((res) => {
          setFormData({
            ...formData,
            acctName: res.data.data.account_name,
          });
          setLoading(false);
          toast.success("Account Number is Valid.");
          setStep("step3");
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.data) {
              if (error.response.data.message) {
                setLoading(false);
                toast.error("Unable to find account");
              }
            }
          }
        });
    } else {
      toast.error("Please fill all fields");
      setLoading(false);
    }
  };

  return (
    <div
      class="modal fade"
      id="uploadFilesModal"
      tabindex="-1"
      aria-labelledby="uploadFilesModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="uploadFilesModalLabel">
              Make Withdrawal{" "}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <StepNav data={withdrawNav} step={step} setStep={setStep} />

            {step === "step1" && (
              <Step1 checkBalance={checkBalance} amount={amount} />
            )}
            {step === "step2" && (
              <Step2
                acctName={acctName}
                handleChange={handleChange}
                acctNum={acctNum}
                bank={bank}
              />
            )}
            {step === "step3" && (
              <Step3
                acctName={acctName}
                amount={amount}
                acctNum={acctNum}
                bank={bank}
              />
            )}
          </div>

          <div class="modal-footer">
            {balance === "" && (
              <Actions
                loading={loading}
                verifyNum={verifyNum}
                setStep={setStep}
                setBalance={setBalance}
                amount={amount}
                handleSubmit={handleSubmit}
                step={step}
              />
            )}
            {balance === "invalid" && (
              <span class="fw-bolder text-danger">Invalid figure</span>
            )}
            {balance === "insuffcient" && (
              <span class="fw-bolder text-danger">Insuffient balance</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
