
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/common/login/Login';
import Main from './components/common/main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/common/singUp/SignUp';
import AddTiffinCenter from './components/common/addCenter/AddTiffinCenter';
import ShowCenter from './components/common/showcenters/ShowCenter';
import ShowMenu from './components/common/showcenters/ShowMenu';
import ShowCart from './components/common/cart/ShowCart';
import ProceedToCheckout from './components/common/cart/ProceedToCheckout';
import Payment from './components/common/cart/Payment';
import GetOrderDetails from './components/common/cart/GetOrderDetails';
import GetOrders from './components/common/cart/GetOrders';
import GetOrderAddress from './components/common/cart/GetOrderAddress';
import ProfilePage from './components/common/customerProfile/ProfilePage';
import EditProfilePage from './components/common/customerProfile/EditProfilePage';
import ChangePassword from './components/common/customerProfile/ChangePassword';
import EditAddress from './components/common/customerProfile/EditAddress';
import AddAddress from './components/common/customerProfile/AddAddress';
import GetAllVendors from './components/admin/GetAllVendors';
import GetAllVendorsCentersList from './components/admin/GetVendorsCenterList';
import GetMenuOfCenter from './components/admin/getMenuOfCenter';
import VendorHomePage from './components/vendor/VendorHomePage';
import GetMenuOfVendorsCenter from './components/vendor/GetMenuOfVendorsCenter';
import AddMenu from "./components/vendor/AddMenu";
import RegisterCenter from "./components/vendor/RegisterCenter";
import ShowRecievedOrders from "./components/vendor/ShowRecievedOrders";
import EditMenu from "./components/vendor/EditMenu";
import CustomerCare from "./components/common/aboutUS/CustomerCare";
import AboutUS from "./components/common/aboutUS/AboutUs";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login_page" exact component={Login} />
          <Route path="/signup_page" exact component={SignUp} />
          <Route path="/add_center" exact component={AddTiffinCenter} />
          <Route path="/ShowCenter" exact component={ShowCenter}/>
          <Route path="/showmenu" exact component={ShowMenu}></Route>
          <Route path="/ShowCart" exact component={ShowCart}></Route>
          <Route path="/ProceedToCheckout" exact component={ProceedToCheckout}></Route>
          <Route path="/Payment" exact component={Payment}></Route>
          <Route path="/Orders" exact component={GetOrders}></Route>
          <Route path="/orderDetailsPage" exact component={GetOrderDetails}></Route>
          <Route path="/showorderaddress" exact component={GetOrderAddress}></Route>
          <Route path="/profilepage" exact component={ProfilePage}></Route>
          <Route path="/editprofilepage" exact component={EditProfilePage}></Route>
          <Route path="/changepassword" exact component={ChangePassword}></Route>
          <Route path="/addorupdateaddress" exact component={EditAddress}></Route>
          <Route path="/addAddress" exact component={AddAddress}></Route>
          <Route path="/getAllOwners" exact component={GetAllVendors}></Route>
          <Route path="/showVendorsCenterList" exact component={GetAllVendorsCentersList}></Route>
          <Route path="/getmenuofcenter" exact component={GetMenuOfCenter}></Route>
          <Route path="/showcenterslist" exact component={VendorHomePage}></Route>
          <Route path="/getmenuofvendorcenter" exact component={GetMenuOfVendorsCenter}></Route>
          <Route path="/addmenu" exact component={AddMenu}></Route>
          <Route path="/registercenter" exact component={RegisterCenter}></Route>
          <Route path="/showrecievedorders" exact component={ShowRecievedOrders}></Route>
          <Route path="/editmenu" exact component={EditMenu}></Route>
          <Route path="/customercare" exact component={CustomerCare}></Route>
          <Route path="/aboutus" exact component={AboutUS}></Route>

          

        </Switch>
      </Router>
    </div>
  );
}

export default App;
