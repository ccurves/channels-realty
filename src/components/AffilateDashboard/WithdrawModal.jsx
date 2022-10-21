import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getCookie, isAuth } from "../../helpers/auth";

const WithdrawModal = () => {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    acctName: "",
    acctNum: "",
    bank: "",
  });
  const { acctName, acctNum, bank } = formData;
  const authToken = getCookie("token");

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const authToken = getCookie("token");

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
              token: authToken,
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
          `https://api.paystack.co/bank/resolve?account_number=${acctNum}&bank_code=${bank}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
            },
          }
        )
        .then((res) => {
          setFormData({
            ...formData,
            acctName: res.data.data.account_name,
          });
          setLoading(false);

          // toast.success("Account Number is Valid.");
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
            <form>
              {acctName !== "" && (
                <div class="row mb-4">
                  <label for="emailLabel" class=" form-label">
                    Account Name
                  </label>

                  <div class="col-sm-12">
                    <input
                      type="email"
                      class="form-control "
                      name="email"
                      id="emailLabel"
                      placeholder="Enter account name"
                      required
                    />
                  </div>
                </div>
              )}
              <div class="row mb-4">
                <label for="phoneLabel" class=" form-label">
                  Account Number
                </label>

                <div class="col-sm-12">
                  <input
                    type="text"
                    class="js-input-mask form-control"
                    name="acctNum"
                    id="emailLabel"
                    placeholder="Enter account number"
                    onChange={handleChange("acctNum")}
                    required
                  />
                </div>
              </div>
              <div class="row mb-4">
                <label for="phoneLabel" class="form-label">
                  Bank
                </label>

                <div class="col-sm-12">
                  <div class="tom-select-custom">
                    <select
                      name="bank"
                      class="js-select form-select"
                      data-placeholder="Bank"
                      onChange={handleChange("bank")}
                    >
                      <option value=""></option>
                      <option value="044">Access Bank</option>
                      <option value="063">Access Bank (Diamond)</option>
                      <option value="035A">ALAT by WEMA</option>
                      <option value="401">ASO Savings and Loans</option>
                      <option value="023">Citibank Nigeria</option>
                      <option value="050">Ecobank Nigeria</option>
                      <option value="562">Ekondo Microfinance Bank</option>
                      <option value="070">Fidelity Bank</option>
                      <option value="011">First Bank of Nigeria</option>
                      <option value="214">First City Monument Bank</option>
                      <option value="058">Guaranty Trust Bank</option>
                      <option value="030">Heritage Bank</option>
                      <option value="301">Jaiz Bank</option>
                      <option value="082">Keystone Bank</option>
                      <option value="50211">Kuda Bank</option>
                      <option value="526">Parallex Bank</option>
                      <option value="076">Polaris Bank</option>
                      <option value="101">Providus Bank</option>
                      <option value="221">Stanbic IBTC Bank</option>
                      <option value="068">Standard Chartered Bank</option>
                      <option value="232">Sterling Bank</option>
                      <option value="100">Suntrust Bank</option>
                      <option value="032">Union Bank of Nigeria</option>
                      <option value="033">United Bank For Africa</option>
                      <option value="215">Unity Bank</option>
                      <option value="035">Wema Bank</option>
                      <option value="057">Zenith Bank</option>
                      {/* {banks.map((bank) => (
                        <option key={bank.id} value={bank.code}>
                          {bank.name}
                        </option>
                      ))} */}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <div class="d-flex justify-content-start d-print-none gap-3">
              <button class="btn btn-primary text-center">Place request</button>
              <button
                class="btn btn-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
