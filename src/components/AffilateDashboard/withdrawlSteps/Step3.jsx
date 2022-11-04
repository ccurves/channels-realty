import React from "react";

const Step3 = ({ acctName, acctNum, bank, amount, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div class="row mb-4">
        <label for="emailLabel" class=" form-label">
          Amount
        </label>

        <div class="col-sm-12">
          <input
            type="email"
            class="form-control "
            name="email"
            id="emailLabel"
            value={amount}
            readOnly
          />
        </div>
      </div>

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
            value={acctName}
            readOnly
          />
        </div>
      </div>

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
            value={acctNum}
            readOnly
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
              value={bank}
              readOnly
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
  );
};

export default Step3;
