import React from "react";
import { Link } from "react-router-dom";

const personalInfoContent = [
  { meta: "First name", metaInfo: "Qusai" },
  { meta: "Last name", metaInfo: "Awlad Thani" },
  { meta: "Age", metaInfo: "33 Years" },
  { meta: "Nationality", metaInfo: "Omani" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Language", metaInfo: "Arabic and English" },
  {
    meta: "Address",
    metaInfo: "233 way, Muscat, Oman",
  },
  { meta: "Phone", metaInfo: "+968 79070012" },
  { meta: "linkedin", metaInfo: "Qusai Awlad Thani" },
  { meta: "Email", metaInfo: "qusaiawladthani2020@gmail.com" },
  {
    meta: "Facebook",
    metaInfo: "@qusai.mohsain",
    url: "https://www.facebook.com/qusai.mohsain/",
  },
  {
    meta: "Instagram",
    metaInfo: "@prince_it_b",
    url: "https://www.instagram.com/prince_it_b/",
  },
  {
    meta: "YouTube",
    metaInfo: "prince-it-B",
    url: "https://www.youtube.com/channel/UCFSWcI4py3wtu1tlHrKWRgA",
  },
];

const PersonalInfo = () => {
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
    <ul className="about-list list-unstyled open-sans-font">
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">First name:</span>
          <span>Qusai</span>
        </li>
        <li className="info">
          <span className="title"> Last name:</span>
          <span>Awlad Thani</span>
        </li>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">Age:</span>
          <span>33 Years</span>
        </li>
        <li className="info">
          <span className="title">Nationality:</span>
          <span>Omani </span>
        </li>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">Freelance:</span>
          <span> Available</span>
        </li>
        <li className="info">
          <span className="title">Language:</span>

          <span style={{ overflowWrap: "break-word", whiteSpace: "nowrap" }}>
            Arabic and English{" "}
          </span>
        </li>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">Phone:</span>
          <span>+968 790 70012</span>
        </li>
        <li className="info">
          <span className="title">Address:</span>
          <span style={{ overflowWrap: "break-word", whiteSpace: "nowrap" }}>
            233 way, Muscat, Oman
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
        <span className="title">Email:</span>
        <span>qusaiawladthani2020@gmail.com</span>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">Facebook:</span>
          <Link
            to={"https://www.facebook.com/qusai.mohsain/"}
            target="_blank"
            className="linkInfo"
          >
            <span>@qusai.mohsain</span>
          </Link>
        </li>
        <li className="info">
          <span className="title">Linkedin:</span>
          <span style={{ overflowWrap: "break-word", whiteSpace: "nowrap" }}>
            Qusai Awlad Thani
          </span>
        </li>
      </div>
      <div className="aboutInfoModal">
        <li className="info">
          <span className="title">Instagram:</span>
          <Link
            to={"https://www.instagram.com/prince_it_b/"}
            target="_blank"
            className="linkInfo"
          >
            <span>@prince_it_b</span>
          </Link>
        </li>
        <li className="info">
          <span className="title">YouTube:</span>
          <Link
            to={"https://www.youtube.com/channel/UCFSWcI4py3wtu1tlHrKWRgA"}
            target="_blank"
            className="linkInfo"
          >
            <span>@prince-it-B</span>
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default PersonalInfo;
