import React from "react";
import { isAuth } from "../../helpers/auth";
import { formatDate, timeAgo } from "../../helpers/date";
import { capitalize, truncate } from "../../helpers/utilities";

const Referrals = () => {
  return (
    <div className="col-lg-6 col-md-12">
      <div class="card overflow-hidden">
        {" "}
        <div class="card-header">
          <h4 class="card-header-title">Referrals</h4>
        </div>
        <div class="table-responsive datatable-custom">
          <table
            id="datatable"
            class="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle  card-table"
            data-hs-datatables-options='{
                   "order": [],
                   "info": {
                     "totalQty": "#datatableWithPaginationInfoTotalQty"
                   },
                   "entries": "#datatableEntries",
                   "pageLength": 15,
                   "isResponsive": false,
                   "isShowPaging": false,
                   "pagination": "datatablePagination"
                 }'
          >
            <thead class="thead-light">
              <tr>
                <th>User</th>

                <th className="text-center">Joined</th>
              </tr>
            </thead>

            <tbody>
              {isAuth().refferals.map((user) => (
                <tr key={user._id}>
                  <td>
                    <a
                      class="d-flex align-items-center"
                      href="user-profile.html"
                    >
                      <div class="flex-shrink-0">
                        <div class="avatar avatar-soft-info avatar-circle">
                          <span class="avatar-initials">L</span>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <span class="d-block h5 text-inherit mb-0">
                          {capitalize(user.firstname) +
                            " " +
                            capitalize(user.lastname)}
                        </span>
                        <span class="d-block fs-6 text-body">
                          {truncate(user.email)}
                        </span>
                      </div>
                    </a>
                  </td>
                  <td className="text-center">
                    {timeAgo(formatDate(user.createdAt))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
