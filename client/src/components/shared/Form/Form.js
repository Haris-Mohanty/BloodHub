import React from "react";
import InputType from "./inputType";

const Form = () => {
  return (
    <>
      <form>
        <h1 className="text-center">Login Page</h1>
        <hr />
        <InputType
          labelText={"Email"}
          labelFor={"forEmail"}
          inputType={"email"}
          name={"email"}
        />
      </form>
    </>
  );
};

export default Form;
