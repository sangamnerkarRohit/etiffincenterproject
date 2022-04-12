import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";
import Navigation from "../../headers/Navigation";

const GetOrderAddress = () => {
  const [flatNo, setFlatNo] = useState("");
  const [societyName, setSocietyName] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const history = useHistory();

  const init = () => {
    UserService.getOrderAddress(
      JSON.parse(sessionStorage.getItem("orderIdForDetails"))
    ).then((resp) => {
      console.log(resp.data);
      let address = resp.data;

      if (address !== null) {
        setFlatNo(address.flatNo);
        setArea(address.area);
        setCity(address.city);
        setSocietyName(address.societyName);
        setState(address.state);
        setPinCode(address.pinCode);
      }
      else{
          alert("Address not found");
      }
    });
  };

  const backToOrderHistory=()=>{
    history.push('/Orders');
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
        <Navigation></Navigation>
        <div className="main" style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>
      <h1>Delivery Address</h1>
      <br/>
      <div className="form">
      <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Flat No</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="flatNo" value={flatNo} onChange={(e)=>e.onChange(e.target.value)} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Society Name </label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="societyName" value={societyName} onChange={(e)=>e.onChange(e.target.value)} readOnly/>
          </div>
       </div>

       <div class="row mb-3">
          <label className="col-sm-4 col-form-label">Area</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="area" value={area} onChange={(e)=>e.onChange(e.target.value)} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">City</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="city" value={city} onChange={(e)=>e.onChange(e.target.value)} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">pincode</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="pinCode" value={pinCode} onChange={(e)=>e.onChange(e.target.value)} readOnly/>
          </div>
       </div>

       <div className="row mb-3">
          <label className="col-sm-4 col-form-label">state</label>
          <div className="col-sm-8">
              <input type="text" className="form-control" name="state" value={state} onChange={(e)=>e.onChange(e.target.value)} readOnly/>
          </div>
       </div>
        <div className="mb-3">
          <button className="btn4 btn-success float-end" onClick={backToOrderHistory}>
            Back
          </button>
          <br></br>

        </div>
      </div>
    </div>
      </div>
  );
};

export default GetOrderAddress;
