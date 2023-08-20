import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/dark.webp";
import heroImgMobile from "../../assets/img/hero/img-mobile.webp";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";
import IndexArabic from "../about/indexArabic";
import IndexFarsi from "../about/IndexFarsi";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "أنا قصي أولاد ثاني",
  heroDesignation: " مصمم ومتخصص في تكنولوجيا المعلومات",
  heroDescriptions: `بفضل خبرتي ، يمكنك تعزيز روح المبادرة الخاصة بك في عالم الإنترنت اللامتناهي.`,
  heroBtn: "المزيد عني",
};

const HeroArabi = ({language}) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1
              className="text-uppercase"
              style={{ fontFamily: "sans-serif", fontSize: "2.2rem" }}
            >
              {heroContent.heroTitleName}.
              <span style={{ fontSize: "2rem" }}>
                {heroContent.heroDesignation}
              </span>
            </h1>
            <p style={{ fontFamily: "sans-serif", fontSize: "1.2rem" }}>
              {heroContent.heroDescriptions}
            </p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                عَنِّي <span></span>
                </h1>
                <span className="title-bg title-bg-ar">سيرة ذاتية</span>
              </div>
              {/* End title */}
              {language === "en" && <Index />}
              {language === "ar" && <IndexArabic />}
              {language === "fa" && <IndexFarsi />}
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default HeroArabi;
