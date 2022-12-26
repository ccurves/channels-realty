import React from "react";

const StepNav = ({ step, setStep, data }) => {
  const handleClick = (id) => {
    let num = step.match(/(\d+|[^\d]+)/g).join(",");

    if (parseInt(num[5]) > id) {
      setStep(`step${id}`);
    }
  };
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
          key={item.id}
        >
          <a class="step-content-wrapper" onClick={() => handleClick(item.id)}>
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
