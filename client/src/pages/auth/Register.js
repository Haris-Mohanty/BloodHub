import React from "react";
import Form from "../../components/shared/Form/Form";

const Register = () => {
  return (
    <>
      <div className="container-fuild">
        <div className="row">
          <div className="col-md-8">
            <img src="./assets/images/register.jpg" className="w-100" />
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
