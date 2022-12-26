import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { getCookie } from "../../helpers/auth";

const WithdrawalReqs = () => {
  const [transactions, settransactions] = useState([]);
  const token = getCookie("token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transaction/all`, {
        headers: {
          token: `Bearer ${token}`,
        },
      })
      .then((res) => {
        settransactions(res.data);
        console.log(transactions);
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
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <span class="">
              {params.row.user.firstname + " " + params.row.user.lastname}
            </span>
          </>
        );
      },
    },

    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <span class="">{params.row.amount.toLocaleString()}</span>
          </>
        );
      },
    },
    {
      field: "bank",
      headerName: "Bank",
      width: 100,
    },
    {
      field: "acctNum",
      headerName: "Acct Num",
      width: 150,
    },
    {
      field: "fullname",
      headerName: "Acct Name",
      width: 270,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === "Paid" && (
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
            {params.row.status === "Failed" ||
            params.row.status === "Rejected" ? (
              <>
                <span class="legend-indicator bg-danger"></span>{" "}
                {params.row.status}
              </>
            ) : (
              <></>
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
                onClick={() => handleUpdate(params.id, "Paid")}
                class="btn btn-success me-2"
              >
                Paid
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
        `${process.env.REACT_APP_API_URL}/transaction/update/${id}`,
        { status: value },
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
    <div className="col-lg-12">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title h4">Withdrawal Requests</h2>
        </div>
        <div className="card-body">
          <div className="" style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={transactions}
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

export default WithdrawalReqs;
