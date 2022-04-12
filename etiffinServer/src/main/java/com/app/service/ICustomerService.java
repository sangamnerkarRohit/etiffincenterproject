package com.app.service;

import java.util.List;

import com.app.dto.PaymentDTO;
import com.app.pojo.Cart;
import com.app.pojo.Menu;
import com.app.pojo.OrderAddress;
import com.app.pojo.OrderDetails;
import com.app.pojo.Orders;
import com.app.pojo.Restaurants;

public interface ICustomerService {
	
	
	List<?> getRestauranByCity(String city);
	
	//add a method to add new restaurunts
	Restaurants registerNewRestaurant(Restaurants restarunt);
	
	//add a method to save menu of restaurants
	Menu addRestaurantsMenu(Menu menu);
	
	//add a method to get menu of selected restaurant by restaurant Id
	List<?> getMenuOfRestaurant(int restaurantId);
	
	//add method to add menu in cart
	String addProductToCart(Cart c);
	//add method to get menu by id
	Menu getMenuById(int menuId);
	//get total amount of his cart
	Double getCartTotalAmt(int userId);
	
	//get all item from cart
	List<Cart> getCartByUserId(int userId);

	String deleteFromCart(int cid);
	//add method add order in table
	int addOrder(int userId, double totalPrice);
	//add method to add details of order
	void addOrdersDetails(int userId, int OrderId);
	//add method to add address for deliivery
	int addOrderAddress(OrderAddress oa);
	
	//get delivery adddress from table
	OrderAddress getOrderAddress(int orderId);
	
	//add a method for payment
	String addPayment(PaymentDTO paymentDTO);

	//add a metho to add order id into order address
	String addOrderIdtoOrderAddress(int aId, int oId);
	
	//add a method to get all orders of customer
	List<Orders> getOrdersOfSelectedUser(int userId);
	
	List<OrderDetails> getOrdersDetailsList(int orderId);
}
