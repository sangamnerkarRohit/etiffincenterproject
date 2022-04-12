import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";
import Navigation from "../../headers/Navigation";

const ChangePassword = () => {
  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("Id")));
  const [password,setPassword] = useState('');
  const history = useHistory();

  const changePassword=(e)=>{
    e.preventDefault();
    UserService.editUserPassword(id,password).then(res => {
        alert(res.data);
        window.sessionStorage.getItem("role") == 'CUSTOMER' && history.push('/ShowCenter');
        window.sessionStorage.getItem("role") == 'VENDOR' && history.push('/showcenterslist');
        window.sessionStorage.getItem("role") == 'ADMIN' && history.push('/getAllOwners');
    });
  }

  return (
    <div>
      <Navigation />
      <div className="main">
        <h1 style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>Change Password</h1>
        <br />
        <div className="form" style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">
              Enter New Password
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
            </div>
          </div>
          <div className="mb-3">
            <button
              className="btn4 btn-success float-end"
              onClick={changePassword}
            >
              Change Password
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;