import React from "react";

const RankBoard = () => {
  return (
    <div className="col-lg-6 col-md-12">
      <div class="card overflow-hidden">
        <div class="card-header">
          <h4 class="card-header-title">Rank Board</h4>
        </div>
        <div class="tab-content" id="leaderboardTabContent">
          <div
            class="tab-pane fade show active"
            id="all-time"
            role="tabpanel"
            aria-labelledby="all-time-tab"
          >
            <div class="table-responsive">
              <table class="table table-borderless table-thead-bordered table-nowrap table-text-center table-align-middle card-table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" style={{ width: "2rem" }}>
                      Rank
                    </th>
                    <th scope="col" class="table-text-start">
                      Acheivement
                    </th>
                    <th scope="col" class="table-text-start">
                      No. of Referrals
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <span class="text-warning" style={{ fontSize: "1.5rem" }}>
                        🥇
                      </span>
                    </td>
                    <td class="table-text-start">
                      <a
                        class="d-flex align-items-center"
                        href="user-profile.html"
                      >
                        <div class="ms-3">
                          <span class="d-block h5 text-inherit mb-0">
                            Land Owner
                          </span>
                        </div>
                      </a>
                    </td>
                    <td>100</td>
                  </tr>

                  <tr>
                    <td>
                      <span
                        class="text-secondary"
                        style={{ fontSize: "1.5rem" }}
                      >
                        🥈
                      </span>
                    </td>
                    <td class="table-text-start">
                      <a
                        class="d-flex align-items-center"
                        href="user-profile.html"
                      >
                        <div class="ms-3">
                          <span class="d-block h5 text-inherit mb-0">
                            Salesman
                          </span>
                        </div>
                      </a>
                    </td>
                    <td>75</td>
                  </tr>

                  <tr>
                    <td>
                      <span style={{ fontSize: "1.5rem", color: "#924b18" }}>
                        🥉
                      </span>
                    </td>
                    <td class="table-text-start">
                      <a
                        class="d-flex align-items-center"
                        href="user-profile.html"
                      >
                        <div class="ms-3">
                          <span class="d-block h5 text-inherit mb-0">
                            Top Afillate
                          </span>
                        </div>
                      </a>
                    </td>
                    <td>62</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td class="table-text-start">
                      <a
                        class="d-flex align-items-center"
                        href="user-profile.html"
                      >
                        <div class="ms-3">
                          <span class="d-block h5 text-inherit mb-0">
                            Squire
                          </span>
                        </div>
                      </a>
                    </td>
                    <td>30</td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td class="table-text-start">
                      <a
                        class="d-flex align-items-center"
                        href="user-profile.html"
                      >
                        <div class="ms-3">
                          <span class="d-block h5 text-inherit mb-0">
                            Flegdling
                          </span>
                        </div>
                      </a>
                    </td>
                    <td>18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankBoard;
