import React from "react";
import { Link } from "react-router-dom";

const personalInfoContent = [
  { meta: "نام", metaInfo: "قصی " },
  { meta: "نام خانوادگی", metaInfo: "اولاد ثانی" },
  { meta: "سن", metaInfo: "33 سال" },
  { meta: "ملیت", metaInfo: "عمانی" },
  { meta: "آزاد", metaInfo: "در دسترس" },
  { meta: "زبان", metaInfo: "انگلیسی و عربی" },
  {
    meta: "آدرس",
    metaInfo: "عمان، مسقط، خیابان 233",
  },

  { meta: "تلفن", metaInfo: "70012 790 968+" },
  { meta: "ایمیل", metaInfo: "qusaiawladthani2020@gmail.com" },
  { meta: "لینکدین", metaInfo: "Qusai Awlad Thani" },
  {
    meta: "فیسبوک",
    metaInfo: "qusai.mohsain@",
    url: "https://www.facebook.com/qusai.mohsain/",
  },
  {
    meta: "اینستاگرام",
    metaInfo: "prince_it_b@",
    url: "https://www.instagram.com/prince_it_b/",
  },
  {
    meta: "یوتیوب",
    metaInfo: "prince-it-B@",
    url: "https://www.youtube.com/channel/UCFSWcI4py3wtu1tlHrKWRgA",
  },
];

const PersonalInfoFarsi = () => {
  return (
    <>
      {/* <ul className="about-list list-unstyled poppins-font">
        {personalInfoContent.map((val, i) => (
          <li key={i}>
            <span className="title">{val.meta}: </span>
            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
              {val.url ? (
                <Link
                  to={val.url}
                  target="_blank"
                  style={{
                    color: "#FFB912",
                    borderBottom: "1px solid #FFB912",
                    textDecoration:"none"
                  }}
                >
                  {val.metaInfo}
                </Link>
              ) : (
                <>{val.metaInfo}</>
              )}
            </span>
          </li>
        ))}
      </ul> */}
      <ul className="about-list list-unstyled poppins-font">
        <div className="aboutInfoModal">
          <li className="info">
            <span className="title">نام:</span>
            <span>قصی</span>
          </li>
          <li className="info">
            <span className="title"> نام خانوادگی:</span>
            <span>اولاد ثانی</span>
          </li>
        </div>
        <div className="aboutInfoModal">
          <li className="info">
            <span className="title">سن:</span>
            <span>33 سال</span>
          </li>
          <li className="info">
            <span className="title">ملیت:</span>
            <span>عمانی </span>
          </li>
        </div>
        <div className="aboutInfoModal">
          <li className="info">
            <span className="title">آزاد:</span>
            <span> در دسترس</span>
          </li>
          <li className="info">
            <span className="title">زبان:</span>
            <span>انگلیسی وعربی </span>
          </li>
        </div>
        <div className="aboutInfoModal">
          <li className="info">
            <span className="title">تلفن:</span>
            <span>70012 790 968+</span>
          </li>
          <li className="info">
            <span className="title">آدرس:</span>
            <span style={{ overflowWrap: "break-word", whiteSpace: "nowrap" }}>
              عمان، مسقط، خیابان 233
            </span>
          </li>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "3px",
            marginBottom: "1rem",
          }}
        >
          <span className="title">ایمیل:</span>
          <span>qusaiawladthani2020@gmail.com</span>
        </div>
        <div className="aboutInfoModal">
          <li className="info">
            <span className="title">فیسبوک:</span>
            <Link
              to={"https://www.facebook.com/qusai.mohsain/"}
              target="_blank"
              className="linkInfo"
            >
              <span>qusai.mohsain@</span>
            </Link>
          </li>
          <li className="info">
            <span className="title">لینکدین:</span>
            <span style={{ overflowWrap: "break-word", whiteSpace: "nowrap" }}>
              Qusai Awlad Thani
            </span>
          </li>
        </div>
        <div className="aboutInfoModal">
          <li className="info">
            <span className="title">اینستاگرام:</span>
            <Link
              to={"https://www.instagram.com/prince_it_b/"}
              target="_blank"
              className="linkInfo"
            >
              <span>prince_it_b@</span>
            </Link>
          </li>
          <li className="info">
            <span className="title">یوتیوب:</span>
            <Link
              to={"https://www.youtube.com/channel/UCFSWcI4py3wtu1tlHrKWRgA"}
              target="_blank"
              className="linkInfo"
            >
              <span>prince-it-B@</span>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default PersonalInfoFarsi;
