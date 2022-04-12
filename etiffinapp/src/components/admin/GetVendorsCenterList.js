import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../services/UserService";
import Navigation from "./Navigation";

const GetAllVendorsCentersList=()=>{

    const [centers,setCenters] = useState([]);
    const history = useHistory();

    const init=()=>{
        const vid = JSON.parse(sessionStorage.getItem('vendorIdToGetCenter'));
        console.log("Inside init");
        UserService.getCentersByVendorsId(vid).then(resp=>{
            console.log("inside init()");
            console.log(resp.data);
            setCenters(resp.data);
        })
    }

    const showMenuOfSelectedCenter=(id,rn)=>{
        sessionStorage.setItem("restIdForMenu",id);
        sessionStorage.setItem("restName",rn);
        history.push("getmenuofcenter");
    }

    const removeCenter=(id)=>{
        UserService.removeCenterFromPortal(id).then(resp=>{
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
          {sessionStorage.getItem('vendorName')}'s Centers 
        </h1>
        <div style={{marginLeft:"10%",marginRight:"10%"}}>
          <table
            className="table table-striped dark"
            style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}
          >
            <thead>
              <tr>
                <th>Center Name</th>
                <th>City</th>
                <th>Rating</th>
                <th>Show Menu</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {centers.map((center) => (
                <tr key={center.id}>
                  <td>{center.restaurantName}</td>
                  <td>{center.city}</td>
                  <td>{center.rating}</td>
                  <td>
                    <button className="btn btn-success "
                    onClick={()=>{showMenuOfSelectedCenter(center.id,center.restaurantName)}}
                    >Show Menu</button>
                  </td>
                  <td>
                    <button className="btn btn-success "
                    onClick={()=>{removeCenter(center.id)}}
                    >Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
}

export default GetAllVendorsCentersList;