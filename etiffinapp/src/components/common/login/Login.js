import React, { Component,useState ,useEffect} from "react";
import './Login.css';
import ShowCenter from "../showcenters/ShowCenter";
import userService from "../../../services/UserService"
import { useHistory } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const history = useHistory();

    const authenticateUser = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        if (email != "" && password != "") {
            let loginRequest = { email, password };
            console.log(loginRequest);
            userService.fetchUserByLogin(loginRequest).then(res => {
                console.log(res.data);
                const user = res.data;
                console.log("test user");
                if (user) {
                    
                    sessionStorage.setItem("Id", user.id)
                    sessionStorage.setItem("fullName", user.fullName);
                    sessionStorage.setItem("emailId", user.emailId);
                    sessionStorage.setItem("phoneNo", user.phoneNo);
                    sessionStorage.setItem("role",user.role);

                    if(user.role==="CUSTOMER")
                        history.push("ShowCenter");
                    else if(user.role==="VENDOR")
                        history.push("showcenterslist")
                    else
                        history.push("getAllOwners")

                }
                else {
                    history.push("login_page");
                    setEmail("");
                    setPassword("");
                    setMsg("Invalid user details");
                }
            });
        }else{
            setMsg("Please enter email and password");
        }
    }

    useEffect(()=>{
        sessionStorage.clear();
    })


    return (
        <div id="maindiv">
            <h1 align='center'>** Login **</h1>
            <span>{msg}</span>
            <form>
                <table >
                    <tr>
                        <td >Email : <span color="ref">*</span> </td>
                        <td>
                            <input
                                type={"text"}
                                name="email"
                                id="em"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                        </td>
                    </tr>
                    <hr />
                    <tr>
                        <td>Password : <span>*</span></td>
                        <td>
                            <input
                                type={"password"}
                                name="password"
                                id="pwd"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </input>
                        </td>
                    </tr>
                    <hr />
                    <tr>
                        <td><a href="/" className="btn btn-primary">home</a></td>
                        <td >
                            <button type="submit" className="btn btn-primary" onClick={authenticateUser}>Login</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Login