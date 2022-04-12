import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import Navigation from "./Navigation";

const GetMenuOfCenter=()=>{

    const [menus,setMenus] = useState([]);
    const [msg,setMsg] = useState(""); 
    
    const init =()=>{
        
        UserService.getMenuOfRestaurant(JSON.parse(sessionStorage.getItem('restIdForMenu')))
        .then(resp=>{
            console.log(resp.data);
            setMenus(resp.data);
        })
    }

    const removeMenuOfCenter=(mid)=>{
        console.log(mid);
        UserService.removeMenuFromCenter(mid).then(resp=>{
            alert(resp.data);
            init();
        })
    }

    useEffect(()=>{
        init();
    },[])
    
    return(
        <div>
      <Navigation></Navigation>
      <div>
        <h1 style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white",marginTop:"2%"}}>
          {sessionStorage.getItem('restName')}'s Centers 
        </h1>
        <div style={{marginLeft:"10%",marginRight:"10%"}}>
          <table
            className="table table-striped dark"
            style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}
          >
            <thead>
              <tr>
                <th>Menu Name</th>
                <th>Discription</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu) => (
                <tr key={menu.id}>
                  <td>{menu.dishName}</td>
                  <td>{menu.discription}</td>
                  <td>{menu.price}</td>
                  <td>
                    <button className="btn btn-success "
                    onClick={()=>{removeMenuOfCenter(menu.id)}}
                    >Remove</button>
                  </td>
                </tr>
              ))}
              <tr><td colSpan="4"><h1 style={{textAlign:"center"}}>{msg}</h1></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
}


export default GetMenuOfCenter;