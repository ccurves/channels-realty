import React from "react";

const Step2 = ({ setStep }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div class="container content-space-1">
          <div class="row">
            <div class="col-md-4 col-lg-3 mb-3 mb-md-0">
              <div class="navbar-expand-md">
                <div class="d-grid">
                  <button
                    type="button"
                    class="navbar-toggler btn btn-white mb-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarVerticalNavMenuEg2"
                    aria-label="Toggle navigation"
                    aria-expanded="false"
                    aria-controls="navbarVerticalNavMenuEg2"
                  >
                    <span class="d-flex justify-content-between align-items-center">
                      <span class="text-dark mb-0">Menu</span>

                      <span class="navbar-toggler-default">
                        <i class="bi-list"></i>
                      </span>

                      <span class="navbar-toggler-toggled">
                        <i class="bi-x"></i>
                      </span>
                    </span>
                  </button>
                </div>

                <div
                  id="navbarVerticalNavMenuEg2"
                  class="collapse navbar-collapse"
                >
                  <ul
                    id="navbarSettingsEg2"
                    class="js-sticky-block js-scrollspy nav nav-tabs nav-link-gray nav-vertical"
                  >
                    <li class="nav-item">
                      <a class="nav-link active" href="#content">
                        1. Accounts
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#terminationInfo">
                        2. Termination
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#changesInfo">
                        3. Changes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-8 col-lg-9">
              <div class="mb-7">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia corporis ducimus deserunt et optio voluptas. Tenetur
                  dicta dolores voluptates totam?
                </p>

                <p>
                  By using our Services, you are agreeing to these terms. Please
                  read them carefully.
                </p>

                <p>
                  Our Services are very diverse, so sometimes additional terms
                  or product requirements (including age requirements) may
                  apply. Additional terms will be available with the relevant
                  Services, and those additional terms become part of your
                  agreement with us if you use those Services.
                </p>
              </div>

              <div id="accountInfo" class="mb-7">
                <h4>1. Accounts</h4>

                <p>
                  When you create an account with us, you must provide us
                  information that is accurate, complete, and current at all
                  times. Failure to do so constitutes a breach of the Terms,
                  which may result in immediate termination of your account on
                  our Service.
                </p>

                <p>
                  You are responsible for safeguarding the password that you use
                  to access the Service and for any activities or actions under
                  your password, whether your password is with our Service or a
                  third-party service.
                </p>

                <p>
                  You agree not to disclose your password to any third party.
                  You must notify us immediately upon becoming aware of any
                  breach of security or unauthorized use of your account.
                </p>
              </div>

              <div id="terminationInfo" class="mb-7">
                <h4>2. Termination</h4>

                <p>
                  We may terminate or suspend access to our Service immediately,
                  without prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>

                <p>
                  All provisions of the Terms which by their nature should
                  survive termination shall survive termination, including,
                  without limitation, ownership provisions, warranty
                  disclaimers, indemnity and limitations of liability.
                </p>

                <p>
                  We may terminate or suspend your account immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>

                <p>
                  Upon termination, your right to use the Service will
                  immediately cease. If you wish to terminate your account, you
                  may simply discontinue using the Service.
                </p>

                <p>
                  All provisions of the Terms which by their nature should
                  survive termination shall survive termination, including,
                  without limitation, ownership provisions, warranty
                  disclaimers, indemnity and limitations of liability.
                </p>
              </div>

              <div id="changesInfo" class="mb-7">
                <h4>3. Changes</h4>

                <p>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material we
                  will try to provide at least 30 days notice prior to any new
                  terms taking effect. What constitutes a material change will
                  be determined at our sole discretion.
                </p>

                <p>
                  By continuing to access or use our Service after those
                  revisions become effective, you agree to be bound by the
                  revised terms. If you do not agree to the new terms, please
                  stop using the Service.
                </p>
              </div>

              <div id="stickyBlockEndPointEg2"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex align-items-center">
        <button
          type="button"
          class="btn btn-ghost-secondary"
          onClick={() => setStep("step1")}
        >
          <i class="fa fa-chevron-left"></i> Previous step
        </button>

        <div class="ms-auto">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setStep("step3")}
          >
            Next <i class="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
