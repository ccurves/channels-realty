import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "../../helpers/auth";
import Stats from "./Stats";
import Users from "./Users";

const Overview = () => {
  const [users, setusers] = useState([]);
  const authToken = getCookie("token");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/users`, {
        headers: {
          token: authToken,
        },
      })
      .then((res) => {
        setusers(res.data);
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Stats users={users} />
      <Users users={users} />
    </div>
  );
};

export default Overview;
