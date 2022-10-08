import React from "react";

const Transcations = () => {
  return (
    <div class="table-responsive datatable-custom ">
      <h6 class="card-subtitle mb-5">Transaction History</h6>
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
          <tr>
            <td>Aug 17, 2020, 5:48 (ET)</td>

            <td>
              <span class="badge bg-soft-success text-success">
                <span class="legend-indicator bg-success"></span>Paid
              </span>
            </td>
            <td>Bank Transfer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transcations;
