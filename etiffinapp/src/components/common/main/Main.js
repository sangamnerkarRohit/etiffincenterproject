import react from "react";
import Login from "../login/Login";
import "./Main.css";
import MainHeader from '../../headers/MainHeader'
import Navigation from "./Navigation";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div class="header" align="center">
                <MainHeader />
            </div>
        </div>
    );
}


export default Main;
//align="right"