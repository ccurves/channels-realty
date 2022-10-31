import React from "react";

const StepNav = ({ step, setStep, data }) => {
  return (
    <ul
      id="addUserStepFormProgress"
      class="js-step-progress step step-sm step-icon-sm step step-inline step-item-between mb-3 mb-md-5"
    >
      {data.map((item) => (
        <li
          class={
            step === `step${item.id}` ? "step-item active focus" : "step-item "
          }
        >
          <a
            class="step-content-wrapper"
            onClick={() => setStep(`step${item.id}`)}
          >
            <span class="step-icon step-icon-soft-dark">{item.id}</span>
            <div class="step-content">
              <span class="step-title">{item.title}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default StepNav;
