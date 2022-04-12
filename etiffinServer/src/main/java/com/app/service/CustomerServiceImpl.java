package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CartRepository;
import com.app.dao.MenuRepository;
import com.app.dao.OrderAddressRepository;
import com.app.dao.OrdersDetailsRepository;
import com.app.dao.OrdersRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.RestaurantsRepository;
import com.app.dao.UserRepository;
import com.app.dto.PaymentDTO;
import com.app.pojo.Cart;
import com.app.pojo.Menu;
import com.app.pojo.OrderAddress;
import com.app.pojo.OrderDetails;
import com.app.pojo.OrderStatus;
import com.app.pojo.Orders;
import com.app.pojo.Payment;
import com.app.pojo.PaymentStatus;
import com.app.pojo.PaymentType;
import com.app.pojo.Restaurants;
import com.app.pojo.User;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {
	
	@Autowired
	RestaurantsRepository restaurantRepo;
	@Autowired
	MenuRepository menuRepo;
	@Autowired
	CartRepository cartRepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	OrdersRepository ordersRepo;
	@Autowired
	OrdersDetailsRepository orderDetailsRepo;
	@Autowired
	OrderAddressRepository orderAddressRepo;
	@Autowired
	PaymentRepository paymentRepo;
	
	@Override
	public List<?> getRestauranByCity(String city) {
		System.out.println("inside get restaurant");
		return restaurantRepo.findByCity(city);
	}
	
	@Override
	public Restaurants registerNewRestaurant(Restaurants restarunt) {
		return restaurantRepo.save(restarunt);
	}
	//add method to add restaurant menu
	@Override
	public Menu addRestaurantsMenu(Menu menu) {
		return menuRepo.save(menu);
		
	}
	
	//get Menu of restaurant
	@Override
	public List<?> getMenuOfRestaurant(int restaurantId) {
			return menuRepo.findRestaurantMenu(restaurantId);
	}
	
	//add method to add product to cart
	@Override
	public String addProductToCart(Cart c) {
		System.out.println("in add to cart");
		Cart cart = cartRepo.findByMenuId(c.getmenuId(),c.getUserId());
		
		int uid = c.getUserId();
		if(cart != null && uid==cart.getUserId()) {
			int q = cart.getQty();
			cart.setQty(c.getQty() + q);
			return "!!! Items Added to Cart !!!";
		}else {
			Cart ct = cartRepo.save(c);
			if(ct != null)
			return "!!! Items Added to Cart !!!";
		}
		
		return "product not added";
	}
	
	@Override
	public Menu getMenuById(int MenuId){
		System.out.println("In get Menu By Id");
		return menuRepo.findByManuId(MenuId);
	}
	
	//add method to get items from user cart
	@Override
	public List<Cart> getCartByUserId(int userId) {
		return cartRepo.getCartByuserId(userId);
	}

	@Override
	public Double getCartTotalAmt(int userId) {
		List<Cart> cartItems = cartRepo.getCartByuserId(userId);
		double totalAmount = 0;
		for (Cart cart : cartItems) {
			totalAmount += cart.getPrice()*cart.getQty();
		}
		return totalAmount;
	}
	
	@Override
	public String deleteFromCart(int cid) {
		//add BL to delete cart item from
		cartRepo.deleteById(cid);
		return "Removed Sucessfully";
	}

	@Override
	public int addOrder(int userId, double totalPrice) {
		//create instance of order to add details
		Orders order = new Orders();
		order.setOrderDate(LocalDate.now());
		order.setOrderDeliveryStatus(OrderStatus.PENDING);
		order.setTotalPrice(totalPrice);
		order.setSelectedCustomer(userRepo.findById(userId).get());
		
		return ordersRepo.save(order).getId();
	}
	
	public int getCenterIdByMenuId(int menuId) {
		Menu menu = menuRepo.findById(menuId).get();
		int id = menu.getRestaurant().getId();
		System.out.println("Got Id "+id);
		return id;
	}

	@Override
	public void addOrdersDetails(int userId, int OrderId) {
		//find order by using order id
		System.out.println("Inside add orders");
		Orders order = ordersRepo.findById(OrderId).get();
		System.out.println(order.toString());
		User user = userRepo.findById(userId).get();
		System.out.println(user.toString());
		List<Cart> items = cartRepo.getCartByuserId(userId);
		System.out.println(items.isEmpty());
		for (Cart item : items) {
			System.out.println(item.toString());
			
			OrderDetails orderDetail = new OrderDetails();
			System.out.println("getting center Id");
			int centerId = getCenterIdByMenuId(item.getmenuId());
			orderDetail.setFinalPrice(item.getPrice());
			orderDetail.setMenuId(item.getmenuId());
			orderDetail.setMenuName(item.getmenuName());
			orderDetail.setQty(item.getQty());
			System.out.println("Swtting center Id");
			orderDetail.setCenterId(centerId);
			System.out.println("Add order Id");
			orderDetail.setSelectedOrder(order);
			System.out.println("Add user Id");
			orderDetail.setSelectedUser(user);
			System.out.println(orderDetail.toString());
			System.out.println(orderDetail);
			orderDetailsRepo.save(orderDetail);
		}
		cartRepo.deleteByUserId(userId);
	}
	
	//add address from delivery
	@Override
	public int addOrderAddress(OrderAddress orderAddress) {
		return orderAddressRepo.save(orderAddress).getId();
	}
	
	//add implementation for getting delivery address from table
	@Override
	public OrderAddress getOrderAddress(int orderId) {
		return orderAddressRepo.findByOrderId(orderId);
	}
	
	//add method for payment
	@Override
	public String addPayment(PaymentDTO paymentDTO) {
		//create one instance of payment pojo
		Payment payment = new Payment();
		payment.setPaymentDate(LocalDate.now());
		payment.setPaymentStatus(PaymentStatus.PAID);
		if(paymentDTO.getPaymentType().equals("CREDIT"))
			payment.setPaymentType(PaymentType.CREDIT);
		if(paymentDTO.getPaymentType().equals("DEBIT"))
			payment.setPaymentType(PaymentType.DEBIT);
		if(paymentDTO.getPaymentType().equals("COD"))
			payment.setPaymentType(PaymentType.COD);
		Orders order = ordersRepo.findById(paymentDTO.getOrderId()).get();
		payment.setSelectedOrder(order);
		paymentRepo.save(payment);
		return "Payment Done";
		
	}
	
	//add order id in address table
	@Override
	public String addOrderIdtoOrderAddress(int aId, int oId) {
		OrderAddress orderAddress = orderAddressRepo.findById(aId).get();
		orderAddress.setOrderId(oId);
		return "Order Id Added SucessFully";
	}
	
	//getting all orders from order table of specific customer
	@Override
	public List<Orders> getOrdersOfSelectedUser(int userId) {
		return ordersRepo.findByselectedCustomer(userRepo.findById(userId).get());
	}
	
	//add method to get order detail by using above order id
	@Override
	public List<OrderDetails> getOrdersDetailsList(int orderId) {
		
		return orderDetailsRepo.findBySelectedOrder(ordersRepo.findById(orderId).get());
	}
	
}
