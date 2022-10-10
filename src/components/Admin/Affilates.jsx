import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "../../helpers/auth";
import UserModal from "./UserModal";

const Affilates = () => {
  const [affilates, setAffilates] = useState([]);
  const authToken = getCookie("token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/affilates`, {
        headers: {
          token: authToken,
        },
      })
      .then((res) => {
        setAffilates(res.data);
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Affilate",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            {" "}
            <a class="d-flex align-items-center" href="user-profile.html">
              <div class="ms-3">
                <span class="d-block h5 text-inherit mb-0">
                  {params.row.user.firstname + " " + params.row.user.lastname}
                  <i
                    class="bi-patch-check-fill text-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Top endorsed"
                  ></i>
                </span>
                <span class="d-block fs-5 text-body">
                  {params.row.user.email}
                </span>
              </div>
            </a>
          </>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === "Verified" && (
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
            {params.row.status === "Unverified" && (
              <>
                <span class="legend-indicator bg-info"></span>{" "}
                {params.row.status}
              </>
            )}
            {params.row.status === "Failed" && (
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
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {" "}
            <button
              type="button"
              class="btn btn-white btn-sm"
              data-bs-toggle="modal"
              data-bs-target={`#editUserModal_${params.row._id}`}
            >
              <i class="bi-pencil-fill me-1"></i> Edit
            </button>
          </>
        );
      },
    },
  ];
  return (
    <div class="card">
      <div class="card-header card-header-content-md-between">
        <div class="mb-2 mb-md-0">
          <form>
            <div class="input-group input-group-merge input-group-flush">
              <div class="input-group-prepend input-group-text">
                <i class="bi-search"></i>
              </div>
              <input
                id="datatableSearch"
                type="search"
                class="form-control"
                placeholder="Search users"
                aria-label="Search users"
              />
            </div>
          </form>
        </div>

        <div class="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
          <div id="datatableCounterInfo" style={{ display: "none" }}>
            <div class="d-flex align-items-center">
              <span class="fs-5 me-3">
                <span id="datatableCounter">0</span>
                Selected
              </span>
              <a class="btn btn-outline-danger btn-sm" href="">
                <i class="bi-trash"></i> Delete
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={affilates}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={25}
          checkboxSelection
        />
      </div>
      {affilates.map((affilate) => (
        <UserModal affilate={affilate} />
      ))}
    </div>
  );
};

export default Affilates;
