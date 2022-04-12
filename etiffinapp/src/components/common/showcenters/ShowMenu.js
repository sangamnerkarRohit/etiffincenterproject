import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import { useHistory } from "react-router-dom";
import Navigation from "../../headers/Navigation";

const ShowMenu = () => {

    const [restId, setRestId] = useState("");
    const [menus, setMenus] = useState([]);
    const [userId, setUserId] = useState();
    //const [menuId,setMenuId] = useState(); 
    const history = useHistory();

    const init = () => {
        UserService.getMenuOfRestaurant(restId).then(res => {
            setMenus(res.data);
        }).catch(error => {
            console.log('Something went wrong', error);
        })
    }

    const addToCart = (menuId) => {
        //write a code to add selected item into cart
        console.log(menuId);
        //setMenuId(mid);
        // console.log(menuId+" --- "+userId);
        const MenuCartDto = { userId, menuId };
        console.log(MenuCartDto);
        UserService.addToTheCart(MenuCartDto).then(res => {
            console.log(res.data);
            alert(res.data);
        }).catch(error => {
            console.log("Error Occured : " + error)
        })
    }

    const goToCart = () => {
        //add code to navigate this page to cart page
        history.push("ShowCart");
    }

    useEffect(() => {
        //get id from session storage
        setRestId(sessionStorage.getItem("restId"));
        setUserId(JSON.parse(sessionStorage.getItem('Id')));
        //call service method
        init();
    }, [restId, userId]);

    return (
        <div>
            <Navigation></Navigation>
            <div>
                <h1 style={{fontStyle:"italic",fontWeight:"bold",color:"gray",backgroundColor:"ButtonHighlight"}}>{sessionStorage.getItem('restName')}'s Menu</h1>
            </div>
            <div>
                {menus.map(menu =>
                    <div>
                        <div className="col-md-5" key={menu.id} style={{ border: "2px solid black" }}>
                            <div className="title ">
                                <a className="nav-link"><h5 className="nameColor">{menu.dishName}</h5></a>
                                <h5 className="nameColor">Details: {menu.discription}</h5>
                                <h5 className="nameColor">Price: {menu.price}</h5>
                            </div>
                            <button
                                className="btn btn-sm btn-success btn-add-to-cart"
                                onClick={() => {
                                    addToCart(menu.id);
                                }}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <button id="cart" onClick={goToCart}>
                    Open Cart
                </button>
            </div>
        </div>
    );
};

export default ShowMenu;