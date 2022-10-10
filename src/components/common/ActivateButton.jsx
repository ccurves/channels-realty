import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { isAuth, updateUser } from "../../helpers/auth";
import toast from "react-hot-toast";
import axios from "axios";

const ActivateButton = () => {
  const [loading, setLoading] = useState(false);

  const onClose = () => {
    toast.error("Transaction cancelled");
  };

  const handlePayment = () => {
    setLoading(true);
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

  const confirmPayment = (reference) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/activate/${reference}`)
      .then((res) => {
        updateUser(res, () => {
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
    amount: "20000",
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: isAuth().email,
      name: `${isAuth().firstname + " " + isAuth().lastname}`,
    },
    meta: {
      //   refBy: refBy,
      //   username: username,
      userId: isAuth()._id,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <button type="button" onClick={handlePayment} class="btn btn-primary">
      {loading ? (
        <div
          class="spinner-grow spinner-grow-sm text-warning ms-4 me-4"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        "Activate Account"
      )}
    </button>
  );
};

export default ActivateButton;
