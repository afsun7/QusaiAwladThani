import React from "react";
import { Link } from "react-router-dom";

const personalInfoContent = [
  { meta: "الاسم الأول", metaInfo: "قصي" },
  { meta: "اسم العائلة ", metaInfo: "اولاد ثانی" },
  { meta: "عمر", metaInfo: "33 سنة" },
  { meta: "جنسية", metaInfo: "عمانی" },
  { meta: "حسابهم الخاص", metaInfo: "متاح" },
  { meta: "لغة", metaInfo: "العربية والإنجليزية" },
  {
    meta: "عنوان",
    metaInfo: "سلطة عمان، مسقط، الخویر، سکه ۲۳۳",
  },
  { meta: "هاتف", metaInfo: "70012 790 968+" },
  { meta: "لینکدین", metaInfo: "Qusai Awlad Thani" },
  { meta: "ایمیل", metaInfo: "qusaiawladthani2020@gmail.com" },
  {
    meta: "فيسبوك",
    metaInfo: "qusai.mohsain@",
    url: "https://www.facebook.com/qusai.mohsain/",
  },
  {
    meta: "الانستغرام",
    metaInfo: "prince_it_b@",
    url: "https://www.instagram.com/prince_it_b/",
  },
  {
    meta: "یوتیوب",
    metaInfo: "prince-it-B@",
    url: "https://www.youtube.com/channel/UCFSWcI4py3wtu1tlHrKWRgA",
  },
];

const PersonalInfoArabic = () => {
  return (
    //   <ul className="about-list list-unstyled poppins-font">
    //   {personalInfoContent.map((val, i) => (
    //     <li key={i}>
    //       <span className="title">{val.meta}: </span>
    //       <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
    //         {val.url ? (
    //           <Link
    //             to={val.url}
    //             target="_blank"
    //             style={{
    //               color: "#FFB912",
    //               borderBottom: "1px solid #FFB912",
    //               textDecoration:"none"
    //             }}
    //           >
    //             {val.metaInfo}
    //           </Link>
    //         ) : (
    //           <>{val.metaInfo}</>
    //         )}
    //       </span>
    //     </li>
    //   ))}
    // </ul>
    <ul
      className="about-list list-unstyled"
      style={{ fontFamily: "sans-serif", fontSize: "1.1rem" }}
    >
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">الاسم الأول:</span>
          <span>قصی</span>
        </li>
        <li className="info">
          <span className="title"> اسم العائلة:</span>
          <span>اولاد ثانی</span>
        </li>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">عمر:</span>
          <span>33 سنة</span>
        </li>
        <li className="info">
          <span className="title">جنسية:</span>
          <span>عمانی </span>
        </li>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">حسابهم الخاص:</span>
          <span> متاح</span>
        </li>
        <li className="info">
          <span className="title">لغة:</span>
          <span>العربية والإنجليزية </span>
        </li>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">هاتف:</span>
          <span>70012 790 968+</span>
        </li>
        <li className="info">
          <span className="title">عنوان:</span>
          <span style={{ overflowWrap: "break-word", whiteSpace: "nowrap" }}>سلطة عمان، مسقط، الخویر، سکه ۲۳۳</span>
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
        <span style={{ fontSize: "1rem" }}>qusaiawladthani2020@gmail.com</span>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">فیسبوک:</span>
          <Link
            to={"https://www.facebook.com/qusai.mohsain/"}
            target="_blank"
            className="linkInfo"
          >
            <span style={{ fontSize: "1rem" }}>qusai.mohsain@</span>
          </Link>
        </li>
        <li className="info">
          <span className="title">لینکدین:</span>
          <span style={{ fontSize: "1rem" }}>Qusai Awlad Thani</span>
        </li>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">الانستغرام:</span>
          <Link
            to={"https://www.instagram.com/prince_it_b/"}
            target="_blank"
            className="linkInfo"
          >
            <span style={{ fontSize: "1rem" }}>prince_it_b@</span>
          </Link>
        </li>
        <li className="info">
          <span className="title">یوتیوب:</span>
          <Link
            to={"https://www.youtube.com/channel/UCFSWcI4py3wtu1tlHrKWRgA"}
            target="_blank"
            className="linkInfo"
          >
            <span style={{ fontSize: "1rem" }}>prince-it-B@</span>
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default PersonalInfoArabic;
