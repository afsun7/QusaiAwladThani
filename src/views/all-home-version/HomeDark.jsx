import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Portfolio from "../../components/portfolio/Portfolio";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";

import SwitchDark from "../../components/switch/SwitchDark";
import HeroArabi from "../../components/hero/HeroArabi";
import HeroFarsi from "../../components/hero/HeroFarsi";
import IndexFarsi from "../../components/about/IndexFarsi";
import IndexArabic from "../../components/about/indexArabic";
import PortfolioArabi from "../../components/portfolio/PortfolioArabi";
import PortfolioFarsi from "../../components/portfolio/PortfolioFarsi";
import Address from "../../components/Address";
import AddressArabi from "../../components/AdressArabi";
import AddressFarsi from "../../components/AddressFarsi";

const menuItem = [
  { icon: "fa-home", menuName: "Home", menuNameFa: "خانه", menuNameAr: "بيت" },
  {
    icon: "fa-user",
    menuName: "About",
    menuNameFa: "درباره",
    menuNameAr: "عن",
  },
  {
    icon: "fa-briefcase",
    menuName: "Portfolio",
    menuNameFa: `نمونه‌کارها`,
    menuNameAr: "مَلَفّ",
  },
  {
    icon: "fa-envelope-open",
    menuName: "Contact",
    menuNameFa: "مخاطب",
    menuNameAr: "اتصال",
  },
  {
    icon: "fa-comments",
    menuName: "Blog",
    menuNameFa: "وبلاگ",
    menuNameAr: "مدونة",
  },
];

const HomeDark = () => {
  const [showLanguage, setShowLanguage] = useState(false);
  function handelLanguage() {
    setShowLanguage(!showLanguage);
  }
  const [language, setlanguage] = useState("en");
  function handelEnglish() {
    setlanguage("en");
    document.querySelector("body").classList.remove("rtl");
  }
  function handelArabic() {
    setlanguage("ar");
    document.querySelector("body").classList.add("rtl");
    document.querySelector("body").style.fontFamily = "sans-serif";
  }
  function handelFarsi() {
    setlanguage("fa");
    document.querySelector("body").classList.add("rtl");
  }
  return (
    <div className="yellow">
      <SwitchDark />
      {/* End Switcher */}
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                {language === "en" && <h2>{item.menuName}</h2>}
                {language === "fa" && (
                  <h2 className="poppins-font" style={{ letterSpacing: "0px" }}>
                    {item.menuNameFa}
                  </h2>
                )}
                {language === "ar" && (
                  <h2 style={{ fontSize: "1.2rem", letterSpacing: "0px" }}>
                    {item.menuNameAr}
                  </h2>
                )}
              </Tab>
            ))}

            <div className="icon-box switch-flags  " onClick={handelLanguage}>
              <div id="show-logo-internet"></div>
              {showLanguage && (
                <>
                  <div id="flag-usa" onClick={handelEnglish}></div>
                  <div id="flag-oman" onClick={handelArabic}></div>
                  <div id="flag-iran" onClick={handelFarsi}></div>
                </>
              )}
            </div>
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              {language === "en" && <Hero language={language} />}
              {language === "ar" && <HeroArabi language={language} />}
              {language === "fa" && <HeroFarsi language={language} />}
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                {language === "en" && (
                  <h1>
                    ABOUT <span>ME</span>
                  </h1>
                )}
                {language === "ar" && (
                  <h1 className="open-sans-font ">
                    عَنِّي <span></span>
                  </h1>
                )}
                {language === "fa" && (
                  <h1 className="poppins-font">
                    درمورد <span>من</span>
                  </h1>
                )}

                {language === "en" && (
                  <>
                    <span className="title-bg">Resume</span>
                  </>
                )}
                {language === "ar" && (
                  <span className="title-bg title-bg-ar">سيرة ذاتية</span>
                )}
                {language === "fa" && (
                  <span className="title-bg poppins-font"> رزومه</span>
                )}
              </div>
              {/* End title */}
              {language === "en" && <Index />}
              {language === "ar" && <IndexArabic />}
              {language === "fa" && <IndexFarsi />}
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel
            className={`portfolio ${language === "en" && "professional"}`}
          >
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {language === "en" && (
                <h1>
                  my<span>portfolio</span>
                </h1>
              )}
              {language === "ar" && (
                <h1 className="open-sans-font">
                  <span>أعمالي</span>
                </h1>
              )}
              {language === "fa" && (
                <h1 className="poppins-font">
                  نمونه کارهای<span> من</span>
                </h1>
              )}

              {language === "en" && <span className="title-bg">works</span>}
              {language === "ar" && (
                <span className="title-bg title-bg-ar">يعمل</span>
              )}
              {language === "fa" && (
                <span className="title-bg title-bg-ar">کارها</span>
              )}
            </div>
            {/* End title */}
            {language === "en" && <Portfolio />}
            {language === "ar" && <PortfolioArabi />}
            {language === "fa" && <PortfolioFarsi />}
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {language === "en" && (
                <h1>
                  get in<span>{" touch"}</span>
                </h1>
              )}
              {language === "ar" && (
                <h1>
                  على تواصل<span>{" ابقى"}</span>
                </h1>
              )}
              {language === "fa" && (
                <h1 style={{ fontFamily: "Sans a4fran3" }}>
                  در تماس<span>{" باشید"}</span>
                </h1>
              )}
              {language === "en" && <span className="title-bg">contact</span>}
              {language === "ar" && (
                <span className="title-bg title-bg-ar">اتصال</span>
              )}
              {language === "fa" && (
                <span className="title-bg title-bg-ar poppins-font">
                  ارتباط
                </span>
              )}
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div
                  className={`col-12 col-lg-4 ${
                    (language === "ar" || language === "fa") && "pr-14"
                  }`}
                >
                  <>
                    {language === "en" && (
                      <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                        Don't be shy !
                      </h3>
                    )}
                    {language === "ar" && (
                      <h3 className="open-sans-font text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                        لا تكن خجولاً !
                      </h3>
                    )}
                    {language === "fa" && (
                      <h3 className="text-uppercase poppins-font custom-title mb-0 ft-wt-600 pb-3">
                        خجالت نکشید !
                      </h3>
                    )}
                  </>
                  <>
                    {language === "en" && (
                      <p className="open-sans-font mb-4">
                        Feel free to get in touch with me. I am always open to
                        discussing new projects, creative ideas or opportunities
                        to be part of your visions.
                      </p>
                    )}
                    {language === "ar" && (
                      <p
                        className="open-sans-font mb-4"
                        style={{ fontFamily: "sans-serif", fontSize: "1.1rem" }}
                      >
                        لا تتردد في التواصل معي. أنا دائماً مفتوح لمناقشة مشاريع
                        جديدة، أفكار إبداعية، أو فرص للانضمام إلى رؤيتكم.
                      </p>
                    )}
                    {language === "fa" && (
                      <p className="Sans a4fran3 mb-4">
                        بی‌تردید با من در تماس باشید. من همیشه برای بحث در مورد
                        پروژه‌های جدید، ایده‌های خلاقانه یا فرصت‌هایی برای شرکت
                        در تصورات شما آماده‌ام.
                      </p>
                    )}
                  </>

                  {language === "en" && <Address />}
                  {language === "ar" && <AddressArabi />}
                  {language === "fa" && <AddressFarsi />}
                  {/* End Address */}

                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {language === "en" && (
                <>
                  <h1>
                    my<span>blog</span>
                  </h1>
                  <span className="title-bg">posts</span>
                </>
              )}
              {language === "ar" && (
                <>
                  <h1>
            مدونت<span>ي</span>
                  </h1>
                  <span className="title-bg title-bg-ar">منشورات</span>
                </>
              )}
              {language === "fa" && (
                <>
                  <h1 className="poppins-font">
                    
                    وبلاگ<span>{" "}من </span>
                  </h1>
                  <span className="title-bg title-bg-ar poppins-font">پست ها</span>
                </>
              )}
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/*  Articles Starts  */}
              <div className="row pb-50">
                <Blog />
              </div>
              {/* Articles Ends */}
            </div>
          </TabPanel>
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
