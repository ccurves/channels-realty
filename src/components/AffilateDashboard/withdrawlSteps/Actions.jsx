import React from "react";

const Actions = ({
  loading,
  verifyNum,
  setStep,
  step,
  amount,
  setBalance,
  handleSubmit,
}) => {
  const handleClick = () => {
    if (amount === 0) {
      setBalance("invalid");
    } else {
      setStep("step2");
    }
  };
  return (
    <div class="d-flex justify-content-start d-print-none gap-3">
      {step === "step1" && (
        <button
          class="btn btn-primary text-center"
          onClick={() => handleClick()}
        >
          {loading ? (
            <div class="spinner-grow spinner-grow-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Next"
          )}
        </button>
      )}
      {step === "step2" && (
        <button class="btn btn-primary text-center" onClick={verifyNum}>
          {loading ? (
            <div class="spinner-grow spinner-grow-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Verify Account No."
          )}
        </button>
      )}
      {step === "step3" && (
        <button class="btn btn-primary text-center" onClick={handleSubmit}>
          {loading ? (
            <div class="spinner-grow spinner-grow-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Submit request"
          )}
        </button>
      )}

      <button class="btn btn-light" data-bs-dismiss="modal" aria-label="Close">
        Cancel
      </button>
    </div>
  );
};

export default Actions;
