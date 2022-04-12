package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.MenuCartDto;
import com.app.dto.PaymentDTO;
import com.app.pojo.Cart;
import com.app.pojo.Menu;
import com.app.pojo.OrderAddress;
import com.app.pojo.OrderDetails;
import com.app.pojo.Orders;
import com.app.pojo.Restaurants;
import com.app.service.CustomerServiceImpl;

@RestController
@RequestMapping("/customers")
@CrossOrigin
public class CustomerController {

	@Autowired
	CustomerServiceImpl customerService;
	
	public CustomerController() {
		System.out.println("inside customer controller");
	}
	
	@PostMapping("/registerrestaurant")
	public Restaurants resgisterNewRestaurunt(@RequestBody Restaurants res) {
		System.out.println("inside register new restaurant");
		return customerService.registerNewRestaurant(res);
	}
	
	@GetMapping("/restaurantlist/{city}")
	public List<?> getAvailableRestaurants(@PathVariable String city){
		System.out.println("inside get restaurant");
		List<?> resList = customerService.getRestauranByCity(city);
		System.out.println("after getting list");
		return resList; 
	}
	
	//add a method to store the menu of restaurants
	@PostMapping("/addmenu")
	public Menu addNewRestaurantMenu(@RequestBody Menu menu) {
		return customerService.addRestaurantsMenu(menu);
	}
	
	//add a getmapping to get all available menu in center by using restaurantId
	
	@GetMapping("/restaurantmenu/{id}")
	public List<?> getRestaurantMenu(@PathVariable String id){
		int usrId = Integer.parseInt(id);
		System.out.println(usrId);
		return customerService.getMenuOfRestaurant(usrId);
	}
	
	
	@PostMapping("/addtocart")
	public String addmenuItemToCart(@RequestBody MenuCartDto menuCartDto) {
		System.out.println(menuCartDto.getMenuId()+" M      U "+menuCartDto.getUserId());
		Menu menuItem = customerService.getMenuById(menuCartDto.getMenuId());
		System.out.println(menuCartDto.getUserId());
		Cart c = new Cart();
		c.setDescription(menuItem.getDiscription());
		c.setPrice(menuItem.getPrice());
		c.setQty(1);
		c.setUserId(menuCartDto.getUserId());
		c.setmenuId(menuItem.getId());
		c.setmenuName(menuItem.getDishName());
		System.out.println(c.toString());
		return  customerService.addProductToCart(c);
		
	}
	 
	@GetMapping("/getcart/{uid}")
	public List<Cart> getCartByUserId(@PathVariable int uid){
		System.out.println(uid);
		return customerService.getCartByUserId(uid);
	}
	
	@GetMapping("/removefromcart/{cid}")
	public String removeFromCart(@PathVariable int cid) {
		return customerService.deleteFromCart(cid);
	}
	
	@GetMapping("/cart/totalAmount/{id}")
	public double getCartTotalAmount(@PathVariable int id) {
		return customerService.getCartTotalAmt(id);
	}
	
	@GetMapping("/orders/{userId}/{totalPrice}")
	public int addOrderDetails(@PathVariable int userId,@PathVariable double totalPrice) {
		System.out.println("In add order "+userId+"  TA:"+totalPrice);
		return customerService.addOrder(userId, totalPrice);
	}
	
	@GetMapping("/orderdetails/{userId}/{orderId}")
	public void addOrderDetails(@PathVariable int userId, @PathVariable int orderId) {
		System.out.println("Inside add order details "+userId+"   OI "+orderId);
		customerService.addOrdersDetails(userId, orderId);
	}
	
	@GetMapping("/orderaddress/{oid}")
	public OrderAddress getOrderAddress(@PathVariable int oid){
		System.out.println("in getOrderAddress : "+oid);
		return customerService.getOrderAddress(oid);
		}
	
	@PostMapping("/orderaddress")
	public int addOrderAddress(@RequestBody OrderAddress orderAddress) {
		return customerService.addOrderAddress(orderAddress);
	}
	
	@PostMapping("/payment")
	public String addPaymentOption(@RequestBody PaymentDTO paymentDto) {
		System.out.println(paymentDto.getOrderId()+"  "+paymentDto.getPaymentType());
		System.out.println("Inside payment URL");
		return customerService.addPayment(paymentDto);
	}
	
	@GetMapping("/orderaddress1/{addressId}/{orderId}")
	public String addOrderIdtoOrderAddress(@PathVariable int addressId, @PathVariable int orderId){
		return customerService.addOrderIdtoOrderAddress(addressId, orderId);
	}
	
	@GetMapping("/orders/{userId}")
	public List<Orders> getOrdersList(@PathVariable int userId){
		System.out.println("in getOrdersList: "+userId);
		return customerService.getOrdersOfSelectedUser(userId);
	}
	
	@GetMapping("orderdetailslist/{orderId}")
	public List<OrderDetails> getOrderDetailsOfCustomer(@PathVariable int orderId){
		System.out.println("Inside get order details "+orderId);
		return customerService.getOrdersDetailsList(orderId);
	}
	
}
