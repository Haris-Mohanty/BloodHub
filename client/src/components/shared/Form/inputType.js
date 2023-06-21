import React from "react";

const inputType = () => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
    </>
  );
};

export default inputType;
