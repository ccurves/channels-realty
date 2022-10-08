import React from "react";

const Anncouncement = ({ img }) => {
  return (
    <div class="">
      <div
        class="card card-centered mb-3 mb-lg-5 "
        style={{
          background: `url(${img}) no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div class="card-body ">
          <div className="p-lg-6 p-4">
            <h1
              class="text-light page-title"
              style={{ left: "20px", fontWeight: 500 }}
            >
              Become a Land Owner with as low as NGN20,000
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anncouncement;
