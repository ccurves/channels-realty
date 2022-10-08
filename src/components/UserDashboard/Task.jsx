import React from "react";
import img from "../../assets/img/Rectangle-2.png";
import Anncouncement from "./Anncouncement";
import TaskProgress from "./TaskProgress";
import SideCardRef from "../common/SideCardRef";
import TaskRefCard from "../common/TaskRefCard";
import { isAuth } from "../../helpers/auth";

const Task = () => {
  let regUsers = [];
  isAuth().refferals.map(
    (user) => user.regStatus === "Completed" && regUsers.push(user)
  );
  console.log(regUsers);
  return (
    <>
      <div class="col-lg-8">
        <Anncouncement img={img} />
        <TaskProgress />

        {/* <RefLink /> */}
        <div className="row">
          <TaskRefCard
            title="Number of people referred"
            num={isAuth().refferals.length}
          />
          <TaskRefCard
            title="Number of registered referrals"
            num={regUsers.length}
          />
        </div>
      </div>
      <SideCardRef />
    </>
  );
};

export default Task;
