import React from "react";
import { getPercent } from "../../helpers/utilities";

const ProgressBar = ({ refferals, goal }) => {
  return (
    <div
      class="progress-bar bg-primary"
      role="progressbar"
      style={{
        width: `${getPercent(refferals, goal)}%`,
      }}
      aria-valuenow={refferals}
      aria-valuemin="0"
      aria-valuemax={goal}
    ></div>
  );
};

export default ProgressBar;
