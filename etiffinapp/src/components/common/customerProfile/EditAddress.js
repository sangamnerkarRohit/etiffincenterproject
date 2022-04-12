import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";
import Navigation from "../../headers/Navigation";


const EditAddress = () => {
  const [userId, setuUserId] = useState(
    JSON.parse(sessionStorage.getItem("Id"))
  );
  const [flatNo, setFlatNo] = useState("");
  const [societyName, setSocietyName] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const addOrEditAddress = (e) => {
    e.preventDefault();
    let address = { userId, flatNo, societyName, area, city, pinCode, state };
    UserService.editUserAddress(userId,address).then(resp=>{
        alert(resp.data);
        window.sessionStorage.getItem("role") == 'CUSTOMER' && history.push('/ShowCenter');
        window.sessionStorage.getItem("role") == 'VENDOR' && history.push('/showcenterslist');
        window.sessionStorage.getItem("role") == 'ADMIN' && history.push('/getAllOwners');
    })
  };

  useEffect(()=>{
      UserService.getUserAddress(userId).then(res=>{
        let addrs = res.data;
        console.log(addrs);
        setFlatNo(addrs.flatNo);
        setSocietyName(addrs.societyName);
        setArea(addrs.area);
        setCity(addrs.city);
        setPinCode(addrs.pinCode);
        setState(addrs.state);
      })
  },[])

  return (
    <div>
      <Navigation />
      <div className="main">
        <h1 style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>Update Address</h1>
        <br />
        <div className="form" style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Flat No</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="flatNo"
                value={flatNo}
                onChange={(e) => {
                  setFlatNo(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Society Name </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="societyName"
                value={societyName}
                onChange={(e) => {
                  setSocietyName(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="row mb-3">
            <label className="col-sm-4 col-form-label">Area</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="area"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">City</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                readOnly
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">pincode</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="pinCode"
                value={pinCode}
                onChange={(e) => {
                  setPinCode(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">state</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="state"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                readOnly
              />
            </div>
          </div>
          <div className="mb-3">
            <button
              className="btn4 btn-success float-end"
              onClick={addOrEditAddress}
            >
              Update Address
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddress;
