import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getCookie } from "../../helpers/auth";

const LandClaims = () => {
  const [claims, setClaims] = useState([]);
  const token = getCookie("token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/claims`, {
        headers: {
          token: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setClaims(res.data);
        console.log(claims);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Username",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <span class="">{params.row.user.username}</span>
          </>
        );
      },
    },

    {
      field: "sqft",
      headerName: "Land SQM",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === "Approved" && (
              <>
                <span class="legend-indicator bg-success"></span>{" "}
                {params.row.status}
              </>
            )}
            {params.row.status === "Pending" && (
              <>
                <span class="legend-indicator bg-warning"></span>{" "}
                {params.row.status}
              </>
            )}
            {params.row.status === "Not processed" && (
              <>
                <span class="legend-indicator bg-danger"></span>{" "}
                {params.row.status}
              </>
            )}
            {params.row.status === "Rejected" && (
              <>
                <span class="legend-indicator bg-danger"></span>{" "}
                {params.row.status}
              </>
            )}
          </>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <>
              <button
                type="button"
                onClick={() => handleUpdate(params.id, "Approved")}
                class="btn btn-success me-2"
              >
                Approve
              </button>
            </>

            <button
              type="button"
              onClick={() => handleUpdate(params.id, "Rejected")}
              class="btn btn-danger"
            >
              Reject
            </button>
          </>
        );
      },
    },
  ];

  const handleUpdate = async (id, value) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/admin/claim/${id}`,
        { value },
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Request updated");
        window.location.reload();
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-lg-9">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title h4"> Land Requests</h2>
        </div>
        <div className="card-body">
          <div className="" style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={claims}
              disableSelectionOnClick
              columns={columns}
              getRowId={(row) => row._id}
              pageSize={25}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandClaims;
