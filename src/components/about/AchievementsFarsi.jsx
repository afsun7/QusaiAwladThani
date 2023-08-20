import React from "react";

const achievementsContent = [
  { title: "12", subTitle1: "سال", subTitle2: "تجربه" },
  { title: "7", subTitle1: "پروژه های ", subTitle2: "انجام شده " },
  { title: "7", subTitle1: "رضایتمندی", subTitle2: "مشتریان" },
  { title: "4", subTitle1: "پروژه های", subTitle2: "در حال انجام" },
];

const AchievementsFarsi = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="poppins-font m-0 position-relative text-uppercase"style={{fontSize:"0.8rem"}}>
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsFarsi;
