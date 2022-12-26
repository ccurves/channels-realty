import React from "react";
import { isAuth } from "../../helpers/auth";
import { capitalize, truncate } from "../../helpers/utilities";
import SideCardRef from "../common/SideCardRef";
import { DateTime } from "luxon";

const Referrals = () => {
  return (
    <div className="row">
      <div className="col-lg-8 col-md-12 mb-3">
        <div class="card overflow-hidden">
          {" "}
          <div class="card-header">
            <h4 class="card-header-title">Referrals</h4>
          </div>
          <div class="table-responsive datatable-custom">
            {isAuth().refferals.length === 0 ? (
              <div class="row justify-content-sm-center text-center py-10">
                <div class="col-sm-7 col-md-5">
                  <p>You haven't referred anyone yet</p>
                </div>
              </div>
            ) : (
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

                    <th className="text-center">Status</th>
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
                              <span class="avatar-initials">
                                {" "}
                                {capitalize(user.firstname.charAt(0))}
                              </span>
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
                        <span class="legend-indicator bg-success"></span>{" "}
                        {user.regStatus}
                      </td>
                      <td className="text-center">
                        {DateTime.fromISO(user.createdAt).toLocaleString(
                          DateTime.DATETIME_MED
                        )}
                        {/* {transactions.createdAt.toLocaleString()} */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <SideCardRef />
    </div>
  );
};

export default Referrals;
