import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/qusai.mohsain/",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/channel/UCFSWcI4py3wtu1tlHrKWRgA/",
  },
  { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled ">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName} style={{fontSize:"1.3rem"}}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
