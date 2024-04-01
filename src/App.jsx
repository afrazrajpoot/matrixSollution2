import React from "react";
import Home from "./app/pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Blogs } from "./app/pages/blogs/Blogs";

import "aos/dist/aos.css";
import { Our_work } from "./app/pages/OurWork";
// import { Services } from "./app/pages/Services";
import { Services } from "./app/pages/servicesPage/Services";
import { CharacteristicsOfCompany } from "./app/pages/blogs/cherecteristicsOfCompany/CharacteristicsOfCompany";
import { MobileAppDevelopment } from "./app/pages/blogs/mobileApp/MobileAppDevelopment";
import DigitalMarketting from "./app/pages/blogs/digitalMarketing/DigitalMarketting";
import WebDesignCompany from "./app/pages/blogs/webDesignCompany/WebDesignCompany";
import WebDesignBlog from "./app/pages/blogs/webDesignBlog/WebDesignBlog";
import GlobalMarketting from "./app/pages/blogs/globalMarketting/GlobalMarketting";
import WebsiteDevelopmentBlog from "./app/pages/blogs/websiteDevelopmentBlog/WebsiteDevelopmentBlog";
import EcommerceDevelopment from "./app/pages/blogs/ecommerceDevelopment/EcommerceDevelopment";
import CmsBolg from "./app/pages/blogs/cms/CmsBolg";
import OurNextGen from "./app/pages/blogs/ourNextGen/OurNextGen";
import SocialMediaMarketting from "./app/pages/blogs/socialMediaMarketting/SocialMediaMarketting";
import BrandIdentity from "./app/pages/blogs/brandIdentity/BrandIdentity";
import UnitTesting from "./app/pages/blogs/unitTesting/UnitTesting";
import BrandCollateral from "./app/pages/blogs/brandCollateral/BrandCollateral";
import SeoBlog from "./app/pages/blogs/seo/SeoBlog";
import StrategyServices from "./app/pages/servicesPage/strategyservices/StrategyServices";
import TechnologyServices from "./app/pages/servicesPage/technologyServices/TechnologyServices";
import ExperienceDesign from "./app/pages/servicesPage/experienceDesign/ExperienceDesign";
import DigitalMarkettingServices from "./app/pages/servicesPage/digitalMarketting/DigitalMarketting";
import BrandingServices from "./app/pages/servicesPage/branding/BrandingServices";
import ServicesTesting from "./app/pages/servicesPage/testingServices/ServicesTesting";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route
          path="blogs/Characteristics-of-a-company"
          element={<CharacteristicsOfCompany />}
        />
        <Route
          path="/blogs/Mobile-app-develppment-blog"
          element={<MobileAppDevelopment />}
        />
        <Route
          path="/blogs/Digital-marketing-blog"
          element={<DigitalMarketting />}
        />
        <Route
          path="/blogs/Professional-web-design-company"
          element={<WebDesignCompany />}
        />
        <Route path="/blogs/global-marketing" element={<GlobalMarketting />} />
        <Route
          path="/blogs/website-development"
          element={<WebsiteDevelopmentBlog />}
        />
        <Route path="/blogs/web-designing" element={<WebDesignBlog />} />
        <Route
          path="/blogs/ecommerce-development"
          element={<EcommerceDevelopment />}
        />
        <Route path="/blogs/cms" element={<CmsBolg />} />
        <Route
          path="/blogs/our-next-gen-technologies-help-customers"
          element={<OurNextGen />}
        />
        <Route
          path="/blogs/social-media-marketing"
          element={<SocialMediaMarketting />}
        />
        <Route path="/blogs/brand-identity" element={<BrandIdentity />} />
        <Route path="/blogs/unit-testing" element={<UnitTesting />} />
        <Route path="/blogs/brand-collateral" element={<BrandCollateral />} />
        <Route path="/blogs/search-engine-optimization" element={<SeoBlog />} />

        {/* services nested routes  */}
        <Route path="/services/strategy" element={<StrategyServices />} />
        <Route path="/services/technology" element={<TechnologyServices />} />
        <Route
          path="/services/experience-design/"
          element={<ExperienceDesign />}
        />
        <Route
          path="/services/digital-marketing/"
          element={<DigitalMarkettingServices />}
        />
        <Route path="/services/branding" element={<BrandingServices />} />
        <Route path="/services/testing" element={<ServicesTesting />} />

        <Route path="our-work" element={<Our_work />} />
        <Route path="/services" element={<Services />} />
        {/* <h1>hello</h1> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
