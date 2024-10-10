const Contact = () => {
  return (
    <div className="section-padding float-start w-100">
      <div className="container">
        <div className="row justify-content-center gap-2">
          <div className="col-md-4 col-sm-6 col-12 gray-border py-md-5 py-3 px-0 contact-box mb-lg-0 mb-3">
            <img src="./mail.png" atl="mail" className="mx-auto" />
            <h3 className="fs-24 text-center fw-bold Poppins text-capitalize title-padding text-black">
              Email Address
            </h3>
            <p className="text-center fw-normal Poppins text-capitalize fs-16 text-lightGray">
              info@webmail.com
            </p>
            <p className="text-center fw-normal Poppins text-capitalize fs-16 text-lightGray">
              jobs@webexample.com
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-12 gray-border py-md-5 py-3 px-0 contact-box mb-lg-0 mb-3">
            <img src="./mail.png" atl="mail" className="mx-auto" />
            <h3 className="fs-24 text-center fw-bold Poppins text-capitalize title-padding text-black">
              Phone Number
            </h3>
            <p className="text-center fw-normal Poppins text-capitalize fs-16 text-lightGray">
              +7861456789
            </p>
            <p className="text-center fw-normal Poppins text-capitalize fs-16 text-lightGray">
              +1234567898
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-12 gray-border py-md-5 py-3 px-0 contact-box mb-lg-0 mb-3">
            <img src="./mail.png" atl="mail" className="mx-auto" />
            <h3 className="fs-24 text-center fw-bold Poppins text-capitalize title-padding text-black">
              Office Address
            </h3>
            <p className="text-center fw-normal Poppins text-capitalize fs-16 text-lightGray">
              18/A, New Born Town Hall <br /> New York, US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
