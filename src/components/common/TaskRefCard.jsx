import React from "react";

const TaskRefCard = ({ title, num }) => {
  return (
    <div className="col-lg-6 col-md-12 mb-4">
      <div class="card overflow-hidden">
        <div className="card-body">
          <span class="mb-3 text-body">{title}</span>
          <span class="d-block display-4 text-dark mb-2">{num}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskRefCard;
