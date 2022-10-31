import React from "react";

const Actions = ({ loading, verifyNum }) => {
  return (
    <div class="d-flex justify-content-start d-print-none gap-3">
      <button class="btn btn-primary text-center" onClick={verifyNum}>
        {loading ? (
          <div class="spinner-grow spinner-grow-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          "Verify Account No."
        )}
      </button>
      <button class="btn btn-light" data-bs-dismiss="modal" aria-label="Close">
        Cancel
      </button>
    </div>
  );
};

export default Actions;
