import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";
import Navigation from "../../headers/Navigation";
import OrderAddress from "./GetOrderAddress";

const Payment = () => {
  const [paymentType, setPaymentType] = useState("Choose Payment");
  const [totalPrice, setTotalPrice] = useState(
    JSON.parse(sessionStorage.getItem("finalPrice"))
  );
  const [orderAddressId, setOrderAddressId] = useState(
    JSON.parse(sessionStorage.getItem("orderAddressId"))
  );
 
  const [userId, setUserId] = useState(
    JSON.parse(sessionStorage.getItem("Id"))
  );
  const [show, setShow] = useState(false);
  const history = useHistory();

  const addOrder = () => {
    UserService.addOrders(userId, totalPrice).then((resp) => {
      console.log("inside add order");
      console.log(resp.data);
      sessionStorage.setItem("OrderId", resp.data);
      addOrderDetail();
    });
  };

  const addOrderDetail = () => {
    const orderId = JSON.parse(sessionStorage.getItem('OrderId'));
    console.log("inside order details");
    UserService.addDetails(userId, orderId);
    paymentDetails();
  };

  const paymentDetails = () => {
    const orderId = JSON.parse(sessionStorage.getItem('OrderId'));
    const payment = {paymentType, orderId};
    UserService.addpaymentDetails(payment).then((resp) => {
      alert(resp.data);
      addOrderIdtoOrderAddress();
    }).catch(err=>{
      console.log(err);
    });
  };

  const addOrderIdtoOrderAddress = () => {
    console.log("inside add order id");
    const orderId = JSON.parse(sessionStorage.getItem('OrderId'));
    UserService.addOrderIdtoOrderAddress(orderAddressId, orderId).then(
      (resp) => {
        alert(resp.data);
      }
    );
  };

  const payment = () => {
    addOrder();
    alert("Payment Done");
    alert("Order Placed sucessfully!!!!");
    alert("it will be delivered in 35 min !!!");
    history.push("ShowCenter");
  };

  

  return (
    <div>
      <Navigation></Navigation>
      <div className="payment">
        <div>
          <div className="float-center">
            <h5>Total Price : {totalPrice}</h5>
            <br />
            <br />
            <DropdownButton id="dropdown-variants-info" title={paymentType}>
              <Dropdown.Item href="#/action-1" onClick={()=>{setPaymentType("CREDIT")}}>
                CREDIT
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>{setPaymentType("DEBIT")}}>
                DEBIT
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={()=>{setPaymentType("COD")}}>
                COD
              </Dropdown.Item>
            </DropdownButton>   
            <br></br>
            <button
              className="btn4 btn-primary"
              style={{ width: "150px" }}
              onClick={payment}
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
