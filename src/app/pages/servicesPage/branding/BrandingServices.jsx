import React from "react";
import { Link } from "react-router-dom";

const BrandingServices = () => {
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
                              <h1>Services / Branding</h1>

                              <ul id="breadcrumb" className="web">
                                <li>
                                  | <Link to="/services/testing">Next</Link>
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
                    <Link to="/services/testing">Next</Link>
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
                    How do you make real connections in a noisy world? BFM Brand
                    Lab brings together lean, cross-disciplinary teams to tackle
                    the big challenge facing brands today. We build
                    digital-ready brands that are authentic, memorable, and
                    deeply attuned to their audiences.
                  </p>
                  <h3>Crafting logos with impact</h3>
                  <p>
                    Consumers see more logos today than ever before, but they
                    only remember a select few. Great logos embody their brand,
                    tell a unique story, speak values loudly – they stand for
                    something.
                  </p>
                  <p>
                    While most brands know what they stand for, realizing their
                    ideals in a symbol is a daunting challenge. And more than 17
                    years of building brands have taught us that memorable logos
                    don’t happen by accident.
                  </p>
                  <p>
                    At Blue Fountain Media, our logo design process is informed
                    by high-quality research and sound strategy. Our team goes
                    hands-on with clients to create a logo that makes a real
                    impression – something your audience can rally behind and
                    rep with pride.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="/images/CaseStudy_DeerCreek_Hero_big (1).jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>Creating brand collateral for business impact</h3>
                  <p>
                    Brand collateral – from packaging and print to business
                    cards and t-shirts – is about getting your brand noticed and
                    strengthening the bond between company and customer. Putting
                    truly memorable collateral in the hands of your customers
                    requires great design – not to mention branding worth
                    showing off in the first place.
                  </p>
                  <p>
                    As a full-service branding and marketing agency, Blue
                    Fountain Media knows there’s a lot more to creating powerful
                    brand collateral than slapping a logo on a product. Our
                    designers add to your marketing toolkit with creative,
                    eye-catching designs, applied to the right products in the
                    right way.
                  </p>
                  <Link
                    to="/services"
                    className="btn submit"
                    style={{ color: "blue", position: "relative", left: "45%" }}
                  >
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-block">
              <div className="content-inner">
                <div className="ib-inner">
                  <img src="/images/CaseStudy_Wholesome_Hero_big_2.jpg" />
                </div>
              </div>
            </div>
            <div className="text-block">
              <div className="content-inner">
                <div className="tb-inner">
                  <h3>The Power in Authenticity</h3>
                  <p>
                    Consumers today are more inundated with ads, more jaded with
                    marketing, and more skeptical of brands than ever before.
                    Yet the very same consumers have rocketed so many digital
                    brands into overnight success.
                  </p>
                  <p>
                    While today’s customers are choosy, they still gravitate
                    toward brands that look, speak, and act authentically. But
                    creating a genuine brand identity – let alone one that
                    aligns with your business goals – is a daunting task.
                  </p>
                  <p>
                    Here at Blue Fountain Media, we know it what takes for
                    digital brands to succeed. With an eye for storytelling and
                    an enthusiasm for strategy, our team helps companies stand
                    out through art direction, engaging content, and bit of
                    soul-searching too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrandingServices;
