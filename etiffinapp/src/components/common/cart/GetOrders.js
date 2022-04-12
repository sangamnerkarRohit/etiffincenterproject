import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";
import Navigation from "../../headers/Navigation";

const GetOrders = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const init = () => {
    UserService.getOrderForSelectedUser(sessionStorage.getItem("Id")).then(
      (resp) => {
        console.log(resp.data);
        setOrders(resp.data);
      }
    );
  };

  const orderDetails = (orderId) => {
    window.sessionStorage.setItem("orderIdForDetails", orderId);
    history.push("orderDetailsPage");
  };

  const orderDetailsAddress = (orderId) => {
    window.sessionStorage.setItem("orderIdForDetails", orderId);
    history.push("/showorderaddress");
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <h2
        className="text-center"
        style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}
      >
        Orders History
      </h2>
      <table
        className="table table-striped dark"
        style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}
      >
        <thead>
          <tr>
            <th>Orders Amount</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Address</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.totalPrice}</td>
              <td>{order.orderDate}</td>
              <td className="nameColor1">
                <h5>{order.orderDeliveryStatus}</h5>
              </td>
              <td>
                <button
                  className="btn4 btn-success"
                  onClick={() => orderDetailsAddress(order.id)}
                >
                  Address
                </button>
              </td>
              <td>
                <button
                  className="btn4 btn-success"
                  onClick={() => orderDetails(order.id)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetOrders;
