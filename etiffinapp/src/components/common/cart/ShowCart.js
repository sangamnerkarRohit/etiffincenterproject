import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";
import Navigation from "../../headers/Navigation";

const ShowCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(sessionStorage.getItem("Id"));
  const history = useHistory();

  const init = () => {
    console.log("into init");
    UserService.getCartByUserId(userId)
      .then((resp) => {
        console.log(resp.data);
        setCartItems(resp.data);
        console.log("Printing State");
        console.log(cartItems);
      })
      .catch((err) => {
        console.log("Error Occured : " + err);
      });
  };

  const removeFromCart = (cid) => {
    console.log(cid);
    UserService.deleteItemFromUsersCart(cid).then((resp) => {
      alert(resp.data);
      init();
    });
  };

  const proceedToCheckout = () => {
    history.push("ProceedToCheckout");
  };

  useEffect(() => {
    //add code to get items from cart
    init();
  }, []);

  return (
    <div>
        <Navigation></Navigation>
      <div className="row">
        <div className="col" align="center">
          Shopping cart
          <div>
            {cartItems.map((item) => (
              <div>
                <div
                  className="col-md-5"
                  key={item.id}
                  style={{ border: "2px solid black" }}
                >
                  <a className="nav-link">
                    <h5 className="nameColor">{item.menuName}</h5>
                  </a>
                  <h5 className="nameColor">
                    discription : {item.description}
                  </h5>
                  <h6 className="nameColor">Qty : {item.qty}</h6>
                  <h5 className="nameColor">Price : {item.price}</h5>
                </div>
                <div>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col">
          <button className="btn btn-info" onClick={proceedToCheckout}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
