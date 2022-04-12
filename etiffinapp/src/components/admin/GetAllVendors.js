import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../services/UserService";
import Navigation from "./Navigation";

const GetAllVendors = () => {
  const [vendors, setVendors] = useState([]);
  const history = useHistory();

  const init = () => {
    UserService.getAllVendors().then((resp) => {
      console.log(resp.data);
      setVendors(resp.data);
    });
  };

  const showVendorsCenter=(id,fn)=>{
      sessionStorage.setItem("vendorIdToGetCenter",id);
      sessionStorage.setItem("vendorName",fn)
      console.log("Inside show vendor center "+id);
      history.push("showVendorsCenterList")
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div>
        <h1 style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white",marginTop:"2%"}}>
          Registered Vendors List
        </h1>
        <div style={{marginLeft:"10%",marginRight:"10%"}}>
          <table
            className="table table-striped dark"
            style={{ backgroundColor: "rgba(0,0,0,.5)", color: "white" }}
          >
            <thead>
              <tr>
                <th>Vendor Name</th>
                <th>Contact Number</th>
                <th>Show Centers</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id}>
                  <td>{vendor.fullName}</td>
                  <td>{vendor.phoneNo}</td>
                  <td>
                    <button className="btn btn-success "
                        onClick={()=>{showVendorsCenter(vendor.id,vendor.fullName)}}
                    >Show Centers</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetAllVendors;
