import React from "react";
import img from "../../assets/img/Rectangle.png";

const AnncouncentSm = () => {
  return (
    <div class="col-lg-4 d-none d-lg-block">
      <div
        class="card card-centered mb-3 mb-lg-5 "
        style={{
          background: `url(${img}) no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div class="card-body  py-10">
          <div className="">
            <h3 class="text-light">
              Become a Land Owner with as low as NGN
              {parseInt(process.env.REACT_APP_REG_AMOUNT).toLocaleString()}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnncouncentSm;
