import { DateTime } from "luxon";
import React from "react";

const LandTable = ({ claims }) => {
  return (
    <div class="table-responsive datatable-custom ">
      <h6 class="card-subtitle mb-5">Land Requests</h6>
      {claims.length === 0 ? (
        <div class="row justify-content-sm-center text-center py-10">
          <div class="col-sm-7 col-md-5">
            <p>You haven't made any claims</p>
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
              <th>Status</th>
              <th>SQM</th>
            </tr>
          </thead>

          <tbody>
            {claims.map((claim) => (
              <tr key={claim._id}>
                <td>
                  {" "}
                  {DateTime.fromISO(claim.createdAt).toLocaleString(
                    DateTime.DATETIME_MED
                  )}
                </td>

                <td>
                  {/* <span class="badge bg-soft-success text-success">
                
                </span> */}
                  {claim.status === "Completed" && (
                    <span class="badge bg-soft-success text-success">
                      <span class="legend-indicator bg-success"></span>{" "}
                      {claim.status}
                    </span>
                  )}
                  {claim.status === "Pending" && (
                    <span class="badge bg-soft-warning text-warning">
                      <span class="legend-indicator bg-warning"></span>{" "}
                      {claim.status}
                    </span>
                  )}
                  {claim.status === "Not processed" ||
                    (claim.status === "Rejected" && (
                      <span class="badge bg-soft-danger text-danger">
                        <span class="legend-indicator bg-danger"></span>{" "}
                        {claim.status}
                      </span>
                    ))}
                </td>
                <td>{claim.sqft} sqm</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LandTable;
