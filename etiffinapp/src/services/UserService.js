import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/customers";
class UserService {
  //authenticate
  fetchUserByLogin(loginRequest) {
    return axios.post(USER_API_BASE_URL + "/login", loginRequest);
  }

  registerUser(user) {
    return axios.post(USER_API_BASE_URL + "/signup", user);
  }

  //add method to get all available restaurants in specific city
  getRestaurants(city) {
    return axios.get(USER_API_BASE_URL + "/restaurantlist/" + city);
  }

  //add method to get a menu from restaurants
  getMenuOfRestaurant(id) {
    return axios.get(USER_API_BASE_URL + "/restaurantmenu/" + id);
  }

  //add method to get all available restaurants
  getAllVendors() {
    return axios.get(USER_API_BASE_URL + "/getallvendors");
  }

  addToTheCart(MenuCartDto) {
    return axios.post(USER_API_BASE_URL + "/addtocart", MenuCartDto);
  }

  getCartByUserId(uid) {
    return axios.get(USER_API_BASE_URL + "/getcart/" + uid);
  }

  deleteItemFromUsersCart(cid) {
    return axios.get(USER_API_BASE_URL + "/removefromcart/" + cid);
  }

  getTotalAmountOfCart(uid) {
    return axios.get(USER_API_BASE_URL + "/cart/totalAmount/" + uid);
  }

  addOrderAddress(address) {
    return axios.post(USER_API_BASE_URL + "/orderaddress/", address);
  }

  addOrders(uid, total) {
    return axios.get(USER_API_BASE_URL + "/orders/" + uid + "/" + total);
  }

  addDetails(userId, OrderId) {
    return axios.get(
      USER_API_BASE_URL + "/orderdetails/" + userId + "/" + OrderId
    );
  }
  addpaymentDetails(payment) {
    return axios.post(USER_API_BASE_URL + "/payment", payment);
  }
  addpaymentDetails(payment) {
    return axios.post(USER_API_BASE_URL + "/payment", payment);
  }

  addOrderIdtoOrderAddress(addressId, orderId) {
    return axios.get(
      USER_API_BASE_URL + "/orderaddress1/" + addressId + "/" + orderId
    );
  }
  getOrderAddress(orderId) {
    return axios.get(USER_API_BASE_URL + "/orderaddress/" + orderId);
  }

  getOrderForSelectedUser(uid) {
    return axios.get(USER_API_BASE_URL + "/orders/" + uid);
  }

  getOrderDetailsForSelectedUser(oid) {
    return axios.get(USER_API_BASE_URL + "/orderdetailslist/" + oid);
  }

  getOrderAddress(oid) {
    return axios.get(USER_API_BASE_URL + "/orderaddress/" + oid);
  }

  editUser(userDTO){
    return axios.put(USER_API_BASE_URL + '/edit-profile/' + userDTO.id, userDTO);
  }

  editUserPassword(user_id, pwd) {
    return axios.put(USER_API_BASE_URL + '/change_pwd/' + user_id + '/'+pwd);
}

editUserAddress(userId, address) {
  return axios.put(USER_API_BASE_URL + '/address/' + userId, address);
}

getUserAddress(user_id) {
  return axios.get(USER_API_BASE_URL + '/address/' + user_id);
}

addUserAddress(userId,address){
  return axios.post(USER_API_BASE_URL+"/addaddress/"+userId,address);
}

getCentersByVendorsId(vid){
  return axios.get(USER_API_BASE_URL +"/getallvendorscenters/"+vid);
}

removeCenterFromPortal(cid){
  return axios.get(USER_API_BASE_URL+"/removecenterbyid/"+cid);
}

removeMenuFromCenter(mid){
  return axios.get(USER_API_BASE_URL+"/removemenubyid/"+mid);
}



}

export default new UserService();
