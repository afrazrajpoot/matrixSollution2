import React from "react";
import { Link } from "react-router-dom";

const ServicesTesting = () => {
  return (
    <>
      {/*<div id="container-cookies"></div>*/}
      <div id="outer-wrapper">
        <section>
          <div id="content">
            <div id="slider" className="small-h">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <div
                      className="bgslider shade"
                      style={{
                        backgroundImage: "url(/images/services-banner2.jpg)",
                      }}
                    >
                      <img
                        src="/images/softwaresliderimg.jpg"
                        alt="Group chatting in bar"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="description">
                      <div className="content-inner">
                        <div className="c-inner">
                          <div className="dep-inner">
                            <div className="inner-center">
                              <h1>Services / Testing</h1>

                              <ul id="breadcrumb" className="web">
                                <li>
                                  <Link to="/services/branding">Previous</Link>
                                  <Link to="/services/strategy">Next</Link>
                                </li>
                                {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <ul id="breadcrumb" className="mobile">
                  <li>
                    <Link to="/services/branding">Previous</Link>
                    <Link to="/services/strategy">Next</Link>
                  </li>
                  {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
                </ul>
                <div className="tb-inner">
                  <p
                    style={{
                      fontWeight: 600,
                      marginTop: 0,
                      marginBottom: "2vw",
                    }}
                  >
                    While coding, the programmer performs some tests on that
                    unit of program to know if it is error free. Testing is
                    performed under white-box testing approach. Unit testing
                    helps developers decide that individual units of the program
                    are working as per requirement and are error free.
                  </p>
                  <h3>Integration Testing</h3>
                  <p>
                    Even if the units of software are working fine individually,
                    there is a need to find out if the units if integrated
                    together would also work without errors. For example,
                    argument passing and data updation etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>System Testing</h3>
                  <p>
                    The software is compiled as product and then it is tested as
                    a whole. This can be accomplished using one or more of the
                    following tests:
                  </p>
                  <p>
                    <strong>Functionality testing</strong> - Tests all
                    functionalities of the software against the requirement.
                  </p>
                  <p>
                    <strong>Performance testing</strong> - This test proves how
                    efficient the software is. It tests the effectiveness and
                    average time taken by the software to do desired task.
                    Performance testing is done by means of load testing and
                    stress testing where the software is put under high user and
                    data load under various environment conditions.
                  </p>
                  <p>
                    <strong>Security &amp; Portability</strong> - These tests
                    are done when the software is meant to work on various
                    platforms and accessed by number of persons.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Acceptance Testing</h3>
                  <p>
                    When the software is ready to hand over to the customer it
                    has to go through last phase of testing where it is tested
                    for user-interaction and response. This is important because
                    even if the software matches all user requirements and if
                    user does not like the way it appears or works, it may be
                    rejected.
                  </p>
                  <p>
                    <strong>Alpha testing</strong> - The team of developer
                    themselves perform alpha testing by using the system as if
                    it is being used in work environment. They try to find out
                    how user would react to some action in software and how the
                    system should respond to inputs.
                  </p>
                  <p>
                    <strong>Beta testing</strong> - After the software is tested
                    internally, it is handed over to the users to use it under
                    their production environment only for testing purpose. This
                    is not as yet the delivered product. Developers expect that
                    users at this stage will bring minute problems, which were
                    skipped to attend.
                  </p>
                  <Link
                    to="/services/experience-design/"
                    className="btn submit"
                    style={{ color: "blue", position: "relative", left: "45%" }}
                  >
                    ALSO SEE OUR DESIGN EXPERIENCE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesTesting;
