import React, { useState } from "react";
import AffilateApply from "../UserDashboard/AffilateApply";
import AnncouncentSm from "../UserDashboard/AnncouncentSm";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import StepNav from "./Steps/StepNav";

const Application = () => {
  const [step, setStep] = useState("step1");
  return (
    <div className="row justify-content-lg-center">
      <div className="col-lg-8">
        <StepNav step={step} />
      </div>
      <div className="col-lg-8">
        {step === "step1" && <Step1 setStep={setStep} />}
        {step === "step2" && <Step2 setStep={setStep} />}
        {step === "step3" && <AffilateApply setStep={setStep} />}
      </div>
      <AnncouncentSm />
    </div>
  );
};

export default Application;
