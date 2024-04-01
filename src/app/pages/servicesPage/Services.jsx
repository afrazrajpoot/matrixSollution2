import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import ServicesCards from "../../../components/serviceComponent/ServicesCards";
import { serviceData } from "../../../data/data";
import { useEffect } from "react";
import Aos from "aos";
import { useGlobalContext } from "../../../context/GlobalContext";

export const Services = () => {
  const { setContactState } = useGlobalContext();
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  return (
    <>
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
                        backgroundImage: "url(../images/services-banner2.jpg)",
                      }}
                    >
                      <img
                        src="../images/softwaresliderimg.jpg"
                        alt="Group chatting in bar"
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="description">
                      <div className="content-inner">
                        <div className="c-inner">
                          <div className="dep-inner">
                            <div className="inner-center">
                              <h1>Services</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="breadcrumb" style={{ backgroundColor: "#f3f4f5" }}>
              <div className="content-inner">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
            <div className="services" id="our-technologies">
              <div className="content-inner">
                <div className="services-inner">
                  {serviceData.map((elem, i) => (
                    <ServicesCards key={i} {...elem} />
                  ))}
                  <button
                    onClick={() => setContactState(true)}
                    className="c-ac btn "
                    style={{
                      color: "white",
                      backgroundColor: "royalblue",
                      textDecoration: "none",
                      marginTop: "70px",
                    }}
                  >
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
