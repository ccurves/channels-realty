import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { getCookie } from "../../helpers/auth";

const DeleteButton = ({ user }) => {
  const authToken = getCookie("token");

  const handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/user/delete/${user}`,

        {
          headers: {
            token: authToken,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        if (err.response === undefined) {
          toast.error("Something went wrong, please try again later");
        } else {
          toast.error(err.response.data.errors);
        }
      });
  };
  return (
    <button type="button" onClick={handleDelete} class="btn btn-danger">
      Delete User
    </button>
  );
};

export default DeleteButton;
