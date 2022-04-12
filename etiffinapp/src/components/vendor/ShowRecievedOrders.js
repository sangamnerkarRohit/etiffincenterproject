import React, { useEffect, useReducer, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserService from "../../services/UserService";
import VendorService from "../../services/VendorService";
import Navigation from "./Navigation";

const ShowRecievedOrders = () => {
  const [centers, setCenters] = useState([]);
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [cname, setCname] = useState("Select Center");
    const history = useHistory();

  const init = () => {
    UserService.getCentersByVendorsId(
      JSON.parse(sessionStorage.getItem("Id"))
    ).then((resp) => {
      setCenters(resp.data);
    });
  };

  const showOrders = (cid, ctrname) => {
    console.log(cid);
    setCname(ctrname);
    VendorService.getAllOrdersRecivedOnCenter(cid).then((resp) => {
      console.log(resp.data);
      setOrders(resp.data);
      setShow(true);
    });
  };

  const deliverTheOrder = (oid) => {
      VendorService.deliverOrder(oid).then(resp=>{
          alert(resp.data);
          window.location.reload();
      })
  };
  const cencelTheOrder=(oid)=>{
      VendorService.cancelOrder(oid).then(resp=>{
          alert(resp.data);
          window.location.reload();
      })
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div style={{marginTop:"2%",border:"5px solid white",backgroundColor: "rgba(0,0,0,.5)", color: "white"}}>
        <h1>Recived Orders</h1>
      </div>
      <div align="center">
        <div>
          <DropdownButton id="dropdown-item-button" title={cname}>
            <Dropdown.ItemText>-- Select One --</Dropdown.ItemText>
            {centers.map((center) => (
              <Dropdown.Item
                as="button"
                onClick={() => {
                  showOrders(center.id, center.restaurantName);
                }}
              >
                {center.restaurantName}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div>
          {show ? (
            <div>
              <div>
                <div style={{ marginLeft: "10%", marginRight: "10%",}}>
                  <table
                    className="table table-striped dark"
                    style={{
                      backgroundColor: "rgba(0,0,0,.5)",
                      color: "white",
                    }}
                  >
                    <thead>
                      <tr>
                        <th>Menu Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Customer Name</th>
                        <th>Delivery Address</th>
                        <th>Status</th>
                        <th>Deliver</th>
                        <th>Cancel</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.restaurantId}>
                          <td>{order.menuName}</td>
                          <td>{order.qty}</td>
                          <td>{order.finalPrice}</td>
                          <td>{order.clientName}</td>
                          <td>
                            {order.flatNo},{order.societyName},{order.area}
                            <br></br>
                            {order.city},{order.state},{order.pinCode}.
                          </td>
                          <td>{order.status}</td>
                          <td>
                            <button
                              className="btn btn-info"
                              onClick={() => {
                                deliverTheOrder(order.orderId);
                              }}
                            >
                              Deliver
                            </button>
                          </td>
                          <td>
                            <button className="btn btn-info"
                                onClick={()=>{cencelTheOrder(order.orderId)}}
                            >Cancel</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ShowRecievedOrders;
