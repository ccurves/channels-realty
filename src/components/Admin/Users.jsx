import { DataGrid } from "@mui/x-data-grid";
import { getPercent } from "../../helpers/utilities";
import DeleteButton from "../common/DeleteButton";
import ProgressBar from "../common/ProgressBar";

const Users = ({ users }) => {
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "First name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "regStatus",
      headerName: "Reg Status",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            {params.row.regStatus === "Completed" && (
              <>
                <span class="legend-indicator bg-success"></span>{" "}
                {params.row.regStatus}
              </>
            )}
            {params.row.regStatus === "Pending" && (
              <>
                <span class="legend-indicator bg-warning"></span>{" "}
                {params.row.regStatus}
              </>
            )}
            {params.row.regStatus === "Not processed" && (
              <>
                <span class="legend-indicator bg-danger"></span>{" "}
                {params.row.regStatus}
              </>
            )}
          </>
        );
      },
    },
    {
      field: "referrals",
      headerName: "Task",
      width: 130,
      renderCell: (params) => {
        return (
          <div class="d-flex align-items-center">
            <span class="fs-5 me-2">
              {getPercent(
                params.row.refferals.length,
                process.env.REACT_APP_USER_GOAL
              )}
              %
            </span>
            <div class="progress table-progress">
              <ProgressBar
                refferals={params.row.refferals.length}
                goal={process.env.REACT_APP_USER_GOAL}
              />
            </div>
          </div>
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
            <DeleteButton user={params.row._id} />
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
          rows={users}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={25}
          checkboxSelection
        />
      </div>

      {/* <div class="table-responsive datatable-custom position-relative">
        <table
          id="datatable"
          class="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
          data-hs-datatables-options='{
                   "columnDefs": [{
                      "targets": [0, 7],
                      "orderable": false
                    }],
                   "order": [],
                   "info": {
                     "totalQty": "#datatableWithPaginationInfoTotalQty"
                   },
                   "search": "#datatableSearch",
                   "entries": "#datatableEntries",
                   "pageLength": 15,
                   "isResponsive": false,
                   "isShowPaging": false,
                   "pagination": "datatablePagination"
                 }'
        >
          <thead class="thead-light">
            <tr>
              <th class="table-column-pe-0">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="datatableCheckAll"
                  />
                  <label
                    class="form-check-label"
                    for="datatableCheckAll"
                  ></label>
                </div>
              </th>
              <th class="table-column-ps-0">Name</th>
              <th>Status</th>
              <th>Portfolio</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="table-column-pe-0">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="datatableCheckAll1"
                  />
                  <label
                    class="form-check-label"
                    for="datatableCheckAll1"
                  ></label>
                </div>
              </td>

              <td class="table-column-ps-0">
                <a class="d-flex align-items-center" href="user-profile.html">
                  <div class="avatar avatar-circle">
                    <img
                      class="avatar-img"
                      src="assets/img/160x160/img10.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ms-3">
                    <span class="d-block h5 text-inherit mb-0">
                      Amanda Harvey
                      <i
                        class="bi-patch-check-fill text-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Top endorsed"
                      ></i>
                    </span>
                    <span class="d-block fs-5 text-body">amanda@site.com</span>
                  </div>
                </a>
              </td>

              <td>
                <span class="legend-indicator bg-success"></span>Active
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <span class="fs-5 me-2">72%</span>
                  <div class="progress table-progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </td>
              <td>User</td>
              <td>
                <button
                  type="button"
                  class="btn btn-white btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#editUserModal"
                >
                  <i class="bi-pencil-fill me-1"></i> Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card-footer">
        <div class="row justify-content-center justify-content-sm-between align-items-sm-center">
          <div class="col-sm mb-2 mb-sm-0">
            <div class="d-flex justify-content-center justify-content-sm-start align-items-center">
              <span class="me-2">Showing:</span>

              <div class="tom-select-custom">
                <select
                  id="datatableEntries"
                  class="js-select form-select form-select-borderless w-auto"
                  autocomplete="off"
                  data-hs-tom-select-options='{
                            "searchInDropdown": false,
                            "hideSearch": true
                          }'
                >
                  <option value="10">10</option>
                  <option value="15" selected>
                    15
                  </option>
                  <option value="20">20</option>
                </select>
              </div>

              <span class="text-secondary me-2">of</span>

              <span id="datatableWithPaginationInfoTotalQty"></span>
            </div>
          </div>

          <div class="col-sm-auto">
            <div class="d-flex justify-content-center justify-content-sm-end">
              <nav
                id="datatablePagination"
                aria-label="Activity pagination"
              ></nav>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Users;
