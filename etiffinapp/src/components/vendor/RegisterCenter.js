import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import VendorService from "../../services/VendorService";
import Navigation from "./Navigation";

const RegisterCenter =()=>{

    const [restaurantName,setRestaurantName] = useState("");
    const [city,setCity] = useState('');
    const [rating,setRating] = useState(0.0);
    const history = useHistory();

    const registerCenter=()=>{
        console.log("inside registerCenter");
        const center = {restaurantName,city,rating}
        VendorService.registerCenter(JSON.parse(sessionStorage.getItem('Id')),center)
        .then(resp=>{
            alert(resp.data);
            history.push('showcenterslist');
        })
    }

    return(
        <div>
        <Navigation></Navigation>
        <h1 style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white",marginTop:"2%"}}>
            Add Center
        </h1>
      <div className="form" style={{marginLeft:"10%",marginRight:"10%",backgroundColor: "rgba(0,0,0,.5)", color: "white",marginTop:"2%"}}>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Center Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              required
              autoComplete="off"
              class="form-control"
              name="centerName"
              value={restaurantName}
              onChange={(e) => {
                setRestaurantName(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">City</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Rating</label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              name="price"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3">
        
          <button
            className="btn4 btn-success float-end"
            onClick={registerCenter}
          >
            Register Center
          </button>
          <br></br>
        </div>
      </div>
    </div>
    )
}

export default RegisterCenter;