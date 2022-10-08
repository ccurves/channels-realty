import React from "react";
import Anncouncement from "./Anncouncement";
import Card from "./Card";
import img from "../../assets/img/Rectangle.png";

const Content = () => {
  return (
    <div class="col-lg-8">
      <Anncouncement img={img} />
      <div className="row">
        <Card type="ref" />
        <Card type="bal" />
      </div>
    </div>
  );
};

export default Content;
