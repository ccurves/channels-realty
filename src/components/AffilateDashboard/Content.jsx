import React from "react";
import Card from "../UserDashboard/Card";
import RefLink from "../UserDashboard/RefLink";

const Content = () => {
  return (
    <div class="col-lg-8">
      <div className="row">
        <Card type="ref" page="affilate" />
        <Card type="bal" page="affilate" />
        <Card type="bouns" page="affilate" />
      </div>
      <RefLink page="affilate" />
    </div>
  );
};

export default Content;
