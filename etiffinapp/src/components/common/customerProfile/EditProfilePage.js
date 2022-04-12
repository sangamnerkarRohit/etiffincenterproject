import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";
import Navigation from "../../headers/Navigation";

const EditProfilePage = () => {
  const [id, setId] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const editUser = (e) => {
    e.preventDefault();
    let user = { id, fullName, email, phone };
    UserService.editUser(user).then((res) => {
      let user = res.data;
      console.log(user);
      if(user!==null){
        sessionStorage.setItem('fullName',user.fullName);
        sessionStorage.setItem('emailId',user.emailId);
        sessionStorage.setItem('phoneNo',user.phoneNo);
        alert("Profile updated sucessfully");
        window.sessionStorage.getItem("role") == 'CUSTOMER' && history.push('/ShowCenter');
        window.sessionStorage.getItem("role") == 'VENDOR' && history.push('/showcenterslist');
        window.sessionStorage.getItem("role") == 'ADMIN' && history.push('/getAllOwners');
      }
    });
  };

  useEffect(() => {
    setId(sessionStorage.getItem("Id"));
    setFullName(sessionStorage.getItem("fullName"));
    setEmail(sessionStorage.getItem("emailId"));
    setPhone(sessionStorage.getItem("phoneNo"));
  }, []);

  return (
    <div>
      <Navigation />
      <div className="main">
        <h1 align="center" style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>Edit Profile</h1>
        <br />
        <div className="form" style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Full Name</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3" align="center">
            <button
              className="btn4 btn-success float-end"
              onClick={(e) => {
                editUser(e);
              }}
            >
              Edit Profile
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
