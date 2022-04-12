import { render } from "@testing-library/react";
import userService from "../../../services/UserService";

import React, { useState } from "react";

const SerachBar = () => {

    const [city, setCity] = useState("");
    const [restaurantName, setRestaurantName] = useState("");
    const [rating, setRating] = useState("");



    return (
        <div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    );

}

export default SerachBar;