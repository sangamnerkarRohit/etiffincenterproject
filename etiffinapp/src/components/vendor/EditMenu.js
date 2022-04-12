import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../services/UserService";
import VendorService from "../../services/VendorService";
import Navigation from "./Navigation";

const EditMenu = () => {
  const [dishName, setDishName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const init = () => {
    VendorService.getMenuById(
      JSON.parse(sessionStorage.getItem("menuIdToEditMenu"))
    ).then((resp) => {
      console.log(resp.data);
      const menu = resp.data;
      if (menu !== null) {
        setDishName(menu.dishName);
        setDiscription(menu.discription);
        setPrice(menu.price);
      }
    });
  };

  const editMenuCenter = (e) => {
    e.preventDefault();
    const mid = JSON.parse(sessionStorage.getItem('menuIdToEditMenu'));
    let menuDto={mid,dishName,discription,price};
    VendorService.editMenu(menuDto)
    .then((res)=>{
      let menu= res.data;
      if(menu!==null){
        alert("Menu Updated sucessfully");
          history.push('getmenuofvendorcenter') ;
      }
    })
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <div>
        <Navigation />
        <div className="main" >
          <h1
            align="center"
            style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}
          >
            Edit Menu
          </h1>
          <br />
          <div
            className="form"
            style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white",marginLeft:"10%",marginRight:"10%"}}
          >
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Dish Name</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="dishName"
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Discription</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="discription"
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                />
              </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-4 col-form-label">Price</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={price}
                    onChange={(e) =>setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3" align="center">
                <button
                  className="btn4 btn-success float-end"
                  onClick={(e) => {
                    editMenuCenter(e);
                  }}
                >
                  Edit Menu
                </button>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditMenu;
