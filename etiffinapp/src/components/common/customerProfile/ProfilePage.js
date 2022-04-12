import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";
import Navigation from "../../headers/Navigation";

const ProfilePage = () => {
  const [id, setId] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const history = useHistory();

  const editProfile=()=>{
    history.push("editprofilepage");
  }

  const changePassword=()=>{
    history.push("changepassword");
  }

  const changeAddress=()=>{
    UserService.getUserAddress(id).then(resp=>{
      history.push("addorupdateaddress");
    }).catch(err=>{
      history.push("addAddress");
    })
  }

  useEffect(() => {
    setId(sessionStorage.getItem("Id"));
    setFullName(sessionStorage.getItem("fullName"));
    setEmail(sessionStorage.getItem("emailId"));
    setPhone(sessionStorage.getItem("phoneNo"));
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div className="main">
        <h1 style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>
          !!! User Details !!!
        </h1>
        <br />
        <div
          className="form"
          style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}
        >
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">full Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={fullName}
                readOnly
              />
            </div>
          </div>

          <div class="row mb-3">
            <label className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                readOnly
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Phone</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="phone"
                value={phone}
                readOnly
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4 col-form-label">
              <button className="btn btn-primary" onClick={editProfile}>
                Edit Profile
              </button>
            </div>
            <div className="col-sm-4">
              <button className="btn btn-primary" onClick={changePassword}>
                Change Password
              </button>
            </div>
            <div className="col-sm-4">
              <button className="btn btn-primary" onClick={changeAddress}>
                Add/update Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
