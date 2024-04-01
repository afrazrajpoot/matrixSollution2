import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../context/GlobalContext";

const GlobalMarketting = () => {
    const {setContactState} = useGlobalContext()
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
                    backgroundImage: "url(../../images/services-banner2.jpg)"
                  }}
                >
                  <img
                    src="../../images/softwaresliderimg.jpg"
                    alt="Group chatting in bar"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="description">
                  <div className="content-inner">
                    <div className="c-inner">
                      <div className="dep-inner">
                        <div className="inner-center">
                          <h1>Why choose us for global marketing?</h1>
                          <ul id="breadcrumb" className="web">
                            <li>
                              <Link to="/blogs/Website-development">Next</Link>
                            </li>
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
        <div className="breadcrumb">
          <div className="content-inner">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>Global marketing</li>
            </ul>
          </div>
        </div>
        <div className="text-block">
          <div className="content-inner">
            <ul id="breadcrumb" className="mobile">
              <li>
                <Link to="/blogs/Website-development">Next</Link>
              </li>
              {/*<li><a href="services.html">Services</a> / Strategy</li>*/}
            </ul>
            <div className="tb-inner">
              <p style={{ fontWeight: 600, marginTop: 0, marginBottom: "2vw" }}>
                While marketing globally, you need to face new
                challenges-sometimes unexpected ones. We make you assess how
                your customers interact with your brand. We have a highly
                qualified team with years of experience in digital marketing to
                help brands, clearing hurdles and making them move confidently
                in the international market.
              </p>
              <p>
                <strong style={{ color: "#668cff" }}>Scalable testing:</strong>
              </p>
              <p>
                In global marketing, testing becomes unexpectedly unsustainable.
                To fix this problem, we bring in the vast outsourcing network of
                the matrix solution. With our wide network, we put hundreds of
                global resources in reach for your brand.{" "}
              </p>
              <p>
                <strong style={{ color: "#668cff" }}>Focus on strategy:</strong>
              </p>
              <p>
                We bring our years of experience in making new strategies to
                take your brand to the top of the global market. Our priority is
                to make business goals, giving a pathway to the stakeholders to
                realize global success.
              </p>
              <p>
                <strong style={{ color: "#668cff" }}>
                  Global digital experience assessment:{" "}
                </strong>
              </p>
              <p>
                Matrix solution provides a full suite of services to assess your
                global experience. We analyze your current relationship with the
                customers and the necessary steps to enhance their experience.
                Our comprehensive services enable you to understand how
                customers interact with your brand. Our team makes a complete
                record of their online activities when they make purchases, add
                a comment or live chat, open support tickets, or visit your
                social media profile.{" "}
              </p>
              <p>
                Our professionals use the latest techniques and tools to offer
                you hard data and comprehensive recommendations to invest in the
                content wisely to strengthen the digital experience that engages
                the customers.
              </p>
              <h3>Our focus points:</h3>
              <p>
                We are passionate to provide overall support to your business.{" "}
              </p>
              <p>
                <strong style={{ color: "#668cff" }}>
                  Global geo-marketing:
                </strong>
              </p>
              <p>
                We analyze the search results to find out whether the right
                content is appearing in front of the relevant customers. This
                also helps to find out the opportunities for improvement.
              </p>
              <p>
                <strong style={{ color: "#668cff" }}>Technical SEO:</strong>
              </p>
              <p>
                We have highly trained technicians to analyze the technical
                aspect of your business. We make sure that your site has no
                barriers to perform in the search results globally. We ensure a
                satisfying and constructive user experience.{" "}
              </p>
              <p>
                <strong style={{ color: "#668cff" }}>Keyword research:</strong>
              </p>
              <p>
                Our researchers examine the branded and unbranded keywords to
                enhance your page performance. They search for relevant keywords
                in different markets to present content more effectively in the
                search results.{" "}
              </p>
              <p>
                <strong style={{ color: "#668cff" }}>Linguistic Audit:</strong>
              </p>
              <p>
                We measure the status of your content to help you fix the issues
                like BIAS or readability. It assists you to amend your content
                before it localizes to other languages.{" "}
              </p>
              <h3>How matrix solutions can help?</h3>
              <p>
                If you need a trustworthy partner who can assess your user
                practice, identify, flag, and help resolve potential obstacles
                before they become real ones- matrix solutions is all that you
                need to meet all the needs of your global marketing business.
                You can leverage our global experience assessment, language, and
                crowdsourcing capabilities, strong SEO, high-quality user
                experience, and proprietary technology.
                <br />
                Our team is passionate to walk the extra mile to make an
                engaging and loveable experience for your customers in the
                global market. Our team of highly qualified professionals is all
                that you need- we work as a powerhouse with all resources to
                rank your business in the global market.
                <br />
                Our combination of policy, expertise, and professional
                excellence guarantees that we always equate our thinking to your
                broader business needs. <br />
                <br />
              </p>
              <button onClick={() => setContactState(true)} className="btn-cta contact-icon1">
                LET'S TALK ABOUT YOUR PROJECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  </div>

</>
  );
};

export default GlobalMarketting;
