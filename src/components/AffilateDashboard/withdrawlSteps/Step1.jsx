import React from "react";

const Step1 = ({ checkBalance, amount }) => {
  return (
    <div class="row mb-4">
      <label for="phoneLabel" class=" form-label">
        Amount
      </label>

      <div class="col-sm-12">
        <input
          type="text"
          class="js-input-mask form-control"
          name="wAmount"
          placeholder={amount || "Enter Amount"}
          onChange={checkBalance}
          required
        />
      </div>
    </div>
  );
};

export default Step1;
