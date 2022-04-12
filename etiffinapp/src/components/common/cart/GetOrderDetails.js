import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";
import Navigation from "../../headers/Navigation";

const GetOrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const history = useHistory();

  const init = () => {
    UserService.getOrderDetailsForSelectedUser(
      sessionStorage.getItem("orderIdForDetails")
    )
      .then((resp) => {
        console.log(resp.data);
        setOrderDetails(resp.data);
      })
      .catch((err) => {
        console.log("error occured in Order Details " + err);
      });
  };

  const goBack=()=>{
    history.push("/Orders");
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
        <h2 className="text-center" style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>Orders Details</h2>
        <table className="table table-striped" style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}>
          <thead>
            <tr>
              <th>Menu Name</th>
              <th>QTY</th>
              <th>Final Price</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((order) => (
              <tr>
                <td>{order.menuName}</td>
                <td>{order.qty}</td>
                <td>{order.finalPrice}</td>
              </tr>
            ))}
          </tbody>
          <td colSpan="3">
            <button
              className="btn4 btn-success"
              onClick={goBack}
            >
              Back
            </button>
          </td>
        </table>
      </div>
    </div>
  );
};

export default GetOrderDetails;
