import React from "react";

const AddressArabi = () => {
  return (
    <>
      <p
        className=" custom-span-contact position-relative"
        style={{ fontFamily: "sans-serif" }}
      >
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block"style={{ fontSize: "1.2rem" }}>عنوان</span>عمان، مسقط، خیابان 233، ساختمان
      </p>
      {/* End .custom-span-contact */}

      <p
        className="custom-span-contact position-relative"
        style={{ fontFamily: "sans-serif" }}
      >
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block"style={{ fontSize: "1.2rem" }}>ایمیل</span>{" "}
        <a href="mailto:qusaiawladthani2020@gmail.com">
          qusaiawladthani2020@gmail.com
        </a>
      </p>
      {/* End .custom-span-contact */}

      <p
        className=" custom-span-contact position-relative"
        style={{ fontFamily: "sans-serif" }}
      >
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block" style={{ fontSize: "1.2rem" }}>
          اتصل بي
        </span>{" "}
        <a href="Tel: +96879070012">+968 790 70012</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default AddressArabi;
