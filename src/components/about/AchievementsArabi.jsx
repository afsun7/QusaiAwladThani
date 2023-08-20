import React from "react";

const achievementsContent = [
  { title: "12", subTitle1: "عاما من", subTitle2: "الخبرة" },
  { title: "7", subTitle1: "تم الانتها", subTitle2: "المشاريع" },
  { title: "7", subTitle1: "رضا ", subTitle2: "العملاء" },
  { title: "4", subTitle1: "جارية", subTitle2: "المشاريع" },
];

const AchievementsArabi = () => {
  return (
    <div className="row " style={{fontSize:"1.2rem"}}>
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p
              className="m-0 position-relative text-uppercase  "
             
            >
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsArabi;
