import React from "react";

const Stats = ({ users }) => {
  let regUsers = [];
  let affilates = [];
  users.map((user) => user.regStatus === "Completed" && regUsers.push(user));
  users.map((user) => user.role === "affilate" && affilates.push(user));

  return (
    <div class="row">
      <div class="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-subtitle mb-2">Total users</h6>

            <div class="row align-items-center gx-2">
              <div class="col">
                <span class="js-counter display-4 text-dark">
                  {users.length}
                </span>
                {/* <span class="text-body fs-5 ms-1">from 22</span> */}
              </div>

              {/* <div class="col-auto">
                <span class="badge bg-soft-success text-success p-1">
                  <i class="bi-graph-up"></i> 5.0%
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-subtitle mb-2">Activated members</h6>

            <div class="row align-items-center gx-2">
              <div class="col">
                <span class="js-counter display-4 text-dark">
                  {regUsers.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-lg-4 mb-3 mb-lg-5">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="card-subtitle mb-2">Affilates</h6>

            <div class="row align-items-center gx-2">
              <div class="col">
                <span class="js-counter display-4 text-dark">
                  {affilates.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
