import React from "react";

const AddressFarsi = () => {
  return (
    <>
      <p className="poppins-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">آدرس </span>عمان، مسقط، خیابان 233 
      </p>
      {/* End .custom-span-contact */}

      <p className="poppins-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">ایمیل</span>{" "}
        <a href="mailto:qusaiawladthani2020@gmail.com">qusaiawladthani2020@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="poppins-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">تماس با من</span>{" "}
        <a href="Tel: +96879070012">+968 790 70012</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default AddressFarsi;
