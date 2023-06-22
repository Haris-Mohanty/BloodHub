import React from "react";
import Form from "../../components/shared/Form/Form";

const Register = () => {
  return (
    <>
      <div className="container-fuild">
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/register.jpg" />
          </div>
          <div className="col-md-4 form-container">
            <Form formTitle={"Register Page"} submitBtn={"Register"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
