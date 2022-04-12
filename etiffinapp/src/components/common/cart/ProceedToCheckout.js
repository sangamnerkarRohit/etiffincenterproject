import React, { useDebugValue, useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import AddressForm from "./AddressForm";
import Navigation from "../../headers/Navigation";

const ProceedToCheckout = () => {
  const [userId, setUserId] = useState(
    JSON.parse(sessionStorage.getItem("Id"))
  );
  const [cart, setCart] = useState([]);

  const [formshow, setFormshow] = useState(false);
  const [tax, setTax] = useState();

  const init = () => {
    UserService.getCartByUserId(userId)
      .then((resp) => {
        setCart(resp.data);
        console.log(cart);
      })
      .catch((err) => {
        console.log("error occured " + err);
      });
    //call a method to get total amount of cart
    getTotalAmount();
  };

  const getTotalAmount = () => {
    UserService.getTotalAmountOfCart(userId).then((resp) => {
      console.log("Inside total Amount " + resp.data);
      sessionStorage.setItem("totalAmount", resp.data);
      setTax((resp.data * 18) / 100);
      const finalPrice = resp.data + 15 + (resp.data * 18) / 100;
      //alert(finalPrice);
      window.sessionStorage.setItem("finalPrice", finalPrice);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div className="row">
        <div className="col">
          <table className="table table-stripped table-dark" style={{marginLeft:"2%"}}>
            <thead className="thead-dark" align="center">
              <tr>
                  <th colSpan="3" align="center" style={{backgroundColor:"skyblue",color:'black'}}>
                      List of items
                  </th>
              </tr>
              <tr>
                <th>Menu name</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr>
                  <td>{item.menuName}</td>
                  <td>{item.qty}</td>
                  <td>{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="col"
          style={{
            backgroundColor: "rgba(0,0,0,.5)",
            border: "5px solid white",
            color: "white",
            marginRight:"2%"
          }}
          align="center"
        >
          <div>
            <h2>Total Amount</h2>
            <h3>price : {sessionStorage.getItem("totalAmount")}</h3>
            <h3>Delivery Charge : 15</h3>
            <h3>Tax : {(sessionStorage.getItem("totalAmount") * 18) / 100}</h3>
            <hr></hr>
            <h3>Final Amount : {sessionStorage.getItem("finalPrice")}</h3>
            <button
              onClick={() => {
                setFormshow(true);
              }}
            >
              Add Delivery Address
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "25%", marginRight: "25%" }}>
        {formshow ? <AddressForm /> : null}
      </div>
    </div>
  );
};

export default ProceedToCheckout;
