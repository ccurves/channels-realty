import React from "react";

const Step1 = () => {
  return (
    <div class="row mb-4">
      <label for="phoneLabel" class=" form-label">
        Amount
      </label>

      <div class="col-sm-12">
        <input
          type="text"
          class="js-input-mask form-control"
          name="acctNum"
          id="emailLabel"
          placeholder="Enter Amount"
          //   onChange={handleChange("acctNum")}
          required
        />
      </div>
    </div>
  );
};

export default Step1;
