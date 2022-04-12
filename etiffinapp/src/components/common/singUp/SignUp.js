import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import UserService from "../../../services/UserService";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [msg, setMsg] = useState("");
  const [role, setRole] = useState("");
  const history = useHistory();

  const registerUser = (e) => {
    e.preventDefault();
    console.log("Inside registerUser");
    console.log(fullName + " " + emailId + " " + phoneNo + " ");
    if (
      fullName != "" &&
      emailId != "" &&
      phoneNo != "" &&
      password != "" &&
      cpassword === password
    ) {
      let user = { fullName, emailId, phoneNo, password, role };
      UserService.registerUser(user)
        .then((res) => {
          setMsg("Login Sucessfull");

          setTimeout(() => {
            history.push("login_page");
          }, 1000);
        })
        .catch();
    } else {
      setMsg("Please enter all details correct");
    }
  };

  return (
    <div class="mainDiv">
      <h1>Registration</h1>
      <span color="red">{msg}</span>
      <form>
        <table>
          <tr>
            <td>full-Name :</td>
            <td>
              <input
                type="text"
                name="fname"
                id="fn"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Email-Id : </td>
            <td>
              <input
                type="email"
                name="email"
                id="eid"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Phone-No :</td>
            <td>
              <input
                type="text"
                name="phoneno"
                id="phn"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Role (Customer/vendor)</td>
            <td>
              <input
                type="text"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value.toLocaleUpperCase())}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Password :</td>
            <td>
              <input
                type="password"
                name="password"
                id="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Confirm Password :</td>
            <td>
              <input
                type="password"
                name="cpassword"
                id="cpwd"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input
                type="submit"
                className="btn btn-dark"
                id="sub"
                type="submit"
                name="sub"
                value="Sign Up"
                onClick={registerUser}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default SignUp;
