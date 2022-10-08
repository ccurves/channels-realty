import React from "react";
import RankBoard from "./RankBoard";
import Referrals from "./Referrals";
import RefLink from "./RefLink";

const Task = () => {
  return (
    <div>
      <RefLink />
      <div className="row">
        <RankBoard />
        <Referrals />
      </div>
    </div>
  );
};

export default Task;
