import React from "react";

const StepNav = ({ step }) => {
  return (
    <ul
      id="addUserStepFormProgress"
      class="js-step-progress step step-sm step-icon-sm step step-inline step-item-between mb-3 mb-md-5"
    >
      <li class={step === "step1" ? "step-item active focus" : "step-item "}>
        <a class="step-content-wrapper" href="">
          <span class="step-icon step-icon-soft-dark">1</span>
          <div class="step-content">
            <span class="step-title">Intro</span>
          </div>
        </a>
      </li>

      <li class={step === "step2" ? "step-item active focus" : "step-item "}>
        <a class="step-content-wrapper" href="">
          <span class="step-icon step-icon-soft-dark">2</span>
          <div class="step-content">
            <span class="step-title">Terms</span>
          </div>
        </a>
      </li>

      <li class={step === "step3" ? "step-item active focus" : "step-item "}>
        <a class="step-content-wrapper" href="">
          <span class="step-icon step-icon-soft-dark">3</span>
          <div class="step-content">
            <span class="step-title">Submit Application</span>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default StepNav;
