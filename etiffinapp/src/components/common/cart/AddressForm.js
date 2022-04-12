import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";

const AddressForm = () => {
  
  const [userId,setuUserId] = useState(JSON.parse(sessionStorage.getItem("Id")));
  const [flatNo, setFlatNo] = useState("");
  const [societyName,setSocietyName] = useState("");
  const [area,setArea] = useState("");
  const [city,setCity] = useState("");
  const [pinCode,setPinCode] = useState("");
  const [state,setState] = useState("");
  const [message,setMessage] = useState("");
  const history = useHistory();

  const addAddress = (e)=>{
    console.log("Inside")
    e.preventDefault();
    if(flatNo!=="" && societyName!==""&&area!=="" && city!=="" && pinCode!=="" && state!==""){
      let address = {userId,flatNo,societyName,area,city,pinCode,state};
      UserService.addOrderAddress(address).then(resp=>{
        console.log(resp.data);
        if(resp.data>0){
          sessionStorage.setItem("orderAddressId",resp.data);
          alert("Address added sucessfully");
          history.push("Payment");
          
        }
      }) 
    }else{
      setMessage("Enter all fields");
    }
  }

  return (
  <div>
      <div style={{backgroundColor:"black",justifyContent:"center"}}>
      <span color="red">{message}</span>
      <div className="main" style={{marginLeft:"10%",marginRight:"10%"}}>
        <h3 align="center" style={{color:"white"}}>Add Address</h3>
        <br></br>
        <div className="form">
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">Flat No</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="flatNo"
                value={flatNo}
                onChange={(e)=>{setFlatNo(e.target.value)}}
                required
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
                onChange={(e)=>{setSocietyName(e.target.value)}}
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
                onChange={(e)=>{setArea(e.target.value)}}
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
                onChange={(e)=>{setCity(e.target.value)}}
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
                onChange={(e)=>{setPinCode(e.target.value)}}
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
                onChange={(e)=>{setState(e.target.value)}}
              />
            </div>
          </div>
          <div className="mb-3" align="center">
            <button
              className="btn4 btn-success float-end"
              onClick={(e)=>{addAddress(e)}}
            >
              Add Address
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
    <div style={{float:"right",color:"black"}} className="col" align="center">
      <div>
          
      </div> 
    </div>
  </div>
  );
};

export default AddressForm;
