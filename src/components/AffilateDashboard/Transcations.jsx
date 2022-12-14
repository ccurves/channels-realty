import { DateTime } from "luxon";
import React from "react";

const Transcations = ({ transactions }) => {
  return (
    <div class="table-responsive datatable-custom ">
      <h6 class="card-subtitle mb-5">Transaction History</h6>
      {transactions.length === 0 ? (
        <div class="row justify-content-sm-center text-center py-10">
          <div class="col-sm-7 col-md-5">
            <p>No transactions yet!</p>
          </div>
        </div>
      ) : (
        <table
          id="datatable"
          class="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
          style={{ width: "100%" }}
          data-hs-datatables-options='{
                   "columnDefs": [{
                      "targets": [0],
                      "orderable": false
                    }],
                   "order": [],
                   "info": {
                     "totalQty": "#datatableWithPaginationInfoTotalQty"
                   },
                   "search": "#datatableSearch",
                   "entries": "#datatableEntries",
                   "pageLength": 12,
                   "isResponsive": false,
                   "isShowPaging": false,
                   "pagination": "datatablePagination"
                 }'
        >
          <thead class="thead-light">
            <tr>
              <th>Date</th>
              <th>Payment status</th>
              <th>Payment method</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>
                  {" "}
                  {DateTime.fromISO(transaction.createdAt).toLocaleString(
                    DateTime.DATETIME_MED
                  )}
                </td>

                <td>
                  {transaction.status === "Paid" && (
                    <span class="badge bg-soft-success text-success">
                      <span class="legend-indicator bg-success"></span>{" "}
                      {transaction.status}
                    </span>
                  )}
                  {transaction.status === "Pending" && (
                    <span class="badge bg-soft-warning text-warning">
                      <span class="legend-indicator bg-warning"></span>{" "}
                      {transaction.status}
                    </span>
                  )}
                  {transaction.status === "Failed" ||
                  transaction.status === "Rejected" ? (
                    <span class="badge bg-soft-danger text-danger">
                      <span class="legend-indicator bg-danger"></span>{" "}
                      {transaction.status}
                    </span>
                  ) : (
                    ""
                  )}
                </td>
                <td>Bank Transfer</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Transcations;
