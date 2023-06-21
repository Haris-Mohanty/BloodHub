import React from "react";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 form-banner form-banner">
            <img src="./assets/images/login.jpg" />
          </div>
          <div className="col-md-4 form-container">
            
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
