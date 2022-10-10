import React, { useState } from "react";
import { isAuth } from "../../helpers/auth";
import AffilateApply from "../UserDashboard/AffilateApply";
import AnncouncentSm from "../UserDashboard/AnncouncentSm";
import PendingVerify from "./PendingVerify";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import StepNav from "./Steps/StepNav";

const Application = () => {
  const [step, setStep] = useState("step1");
  const [msg, setMsg] = useState(
    `Application Rejected! ${isAuth().affilate?.rejectCause}`
  );

  return (
    <div className="row justify-content-lg-center">
      <div className="col-lg-8">
        <StepNav step={step} setStep={setStep} />
      </div>
      <div className="col-lg-8">
        <div
          class={
            msg !== "" && msg !== undefined && msg !== null
              ? "alert alert-soft-danger alert-dismissible fade show "
              : "alert alert-soft-secondary alert-dismissible fade d-none "
          }
          role="alert"
        >
          {msg}
          <button
            type="button"
            class="btn-close"
            onClick={() => setMsg("")}
          ></button>
        </div>

        {step === "step1" && <Step1 setStep={setStep} />}
        {step === "step2" && <Step2 setStep={setStep} />}
        {step === "step3" && (
          <>
            {isAuth().affilate?.status === "Pending" ? (
              <PendingVerify />
            ) : (
              <AffilateApply setStep={setStep} />
            )}
          </>
        )}
      </div>
      <AnncouncentSm />
    </div>
  );
};

export default Application;
