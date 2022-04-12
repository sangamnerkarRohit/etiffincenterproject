import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import VendorService from "../../services/VendorService";
import Navigation from "./Navigation";

const AddMenu = () => {
  const [dishName, setDistName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const addMenu=()=>{
      const restId = JSON.parse(sessionStorage.getItem('restIdForMenu'));
      const menu = {dishName,discription,price};
      console.log(menu);
      VendorService.addMenuOfRestaurant(restId,menu).then(resp=>{
        alert(resp.data);
        history.push('getmenuofvendorcenter');
    })
  }

  return (
    <div>
        <Navigation></Navigation>
        <h1 style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white",marginTop:"2%"}}>
            Add Menu
        </h1>
      <div className="form" style={{marginLeft:"10%",marginRight:"10%",backgroundColor: "rgba(0,0,0,.5)", color: "white",marginTop:"2%"}}>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Dish Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              required
              autoComplete="off"
              class="form-control"
              name="dishName"
              value={dishName}
              onChange={(e) => {
                setDistName(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Menu Description</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="description"
              value={discription}
              onChange={(e) => {
                setDiscription(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-3" align="center">
         
            <button
              className="btn4 btn-success"
              onClick={() => {history.push('getmenuofvendorcenter')}}
            >
              Show Menu
            </button>
          <button
            className="btn4 btn-success float-end"
            onClick={addMenu}
          >
            Add Menu
          </button>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
