import React, { useEffect, useState } from "react";

const Header = ()=>{

    const[userName,setUserName] = useState("User");

    useEffect(()=>{
        const id = sessionStorage.getItem("id");
        if(id){
            setUserName(sessionStorage.getItem("fullName"));
        }
    })

    return(
        <div className="container">
            {userName}
        </div>
    );

}

export default Header;