import React, { useState } from "react";
import "./ShowCenter.css";
import userService from "../../../services/UserService";
import { useHistory } from "react-router-dom";
import Navigation from "../../headers/Navigation";


const ShowCenter = () => {
  const [restId, setRestID] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const history = useHistory();

  //add function to get restaurants by their city
  const getRestaurants = (e) => {
    e.preventDefault();
    console.log(city);
    userService
      .getRestaurants(city)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  //add a fucntion to display menu of that center
  const showMenu = (restaurant) => {
    console.log("Inside show menu");
    console.log(restaurant);
    sessionStorage.setItem("restId", restaurant.id);
    sessionStorage.setItem("restName",restaurant.restaurantName);
    setRestID(restaurant.id);
    console.log(restId);
    history.push("/showmenu");
  };

  return (
    <div>
      <Navigation></Navigation>
      <div className="row"></div>
      <div className="search">
        <div className="input-group">
          <div className="form-outline">
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Enter Location"
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
          <button
            id="search-button"
            type="button"
            className="btn btn-primary"
            onClick={getRestaurants}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        {restaurants.map((restaurant) => (
          <div>
              <div className="col-md-5" key={restaurant.id}>
                  <div className="title ">
                      <a className="nav-link"><h5 className="nameColor">{restaurant.restaurantName}</h5></a>
                      <h5 className="nameColor">City: {restaurant.city}</h5>
                      <h5 className="nameColor">rating: {restaurant.rating}</h5>
                  </div>
                  <button
                      className="btn btn-sm btn-success btn-add-to-cart"
                      onClick={()=>{showMenu(restaurant)}}
                      >
                      Show Menu
                  </button>
              </div>
          </div>
        ))}
      </div>
       
    </div>
  );
};

export default ShowCenter;
