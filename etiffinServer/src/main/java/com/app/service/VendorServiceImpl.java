package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.MenuRepository;
import com.app.dao.OrderAddressRepository;
import com.app.dao.OrdersDetailsRepository;
import com.app.dao.OrdersRepository;
import com.app.dao.RestaurantsRepository;
import com.app.dao.UserRepository;
import com.app.dto.MenuDto;
import com.app.dto.RestaurantDto;
import com.app.dto.VendorDashBoardDto;
import com.app.pojo.Menu;
import com.app.pojo.OrderAddress;
import com.app.pojo.OrderDetails;
import com.app.pojo.OrderStatus;
import com.app.pojo.Orders;
import com.app.pojo.Restaurants;
import com.app.pojo.User;

@Service
@Transactional
public class VendorServiceImpl implements IVendorService {

	@Autowired
    RestaurantsRepository restaurantRepository;
    @Autowired
    OrdersDetailsRepository orderDetailsRepository;
    @Autowired
    OrderAddressRepository orderAddressRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    MenuRepository menuRepository;
    @Autowired
    OrdersRepository orderRepository;


    @Override
    public List<VendorDashBoardDto> vendorDashbaord(int centerId) {
        List<VendorDashBoardDto> data = new ArrayList<>();
        List<OrderDetails> orderDetails = orderDetailsRepository.findByCenterId(centerId);
        orderDetails.forEach(i -> {
        	int oId = i.getSelectedOrder().getId();
        	System.out.println(oId);
            OrderAddress orderAddress = orderAddressRepository.findByOrderId(oId);
            System.out.println(orderAddress);
            VendorDashBoardDto details = new VendorDashBoardDto();
            details.setArea(orderAddress.getArea());
            details.setOrderId(orderAddress.getOrderId());
            details.setCity(orderAddress.getCity());
            details.setFlatNo(orderAddress.getFlatNo());
            details.setPinCode(orderAddress.getPinCode());
            details.setCustomerId(i.getSelectedUser().getId());
            details.setFinalPrice(i.getFinalPrice());
            details.setSocietyName(orderAddress.getSocietyName());
            details.setMenuName(i.getMenuName());
            details.setQty(i.getQty());
            details.setRestaurantId(i.getCenterId());
            details.setState(orderAddress.getState());
            details.setStatus(orderRepository.findById(i.getSelectedOrder().getId()).get().getOrderDeliveryStatus());
            User user = userRepository.findById(i.getSelectedUser().getId()).get();
            details.setClientName(user.getFullName());
            data.add(details);

        });

        return data;
    }

    @Override
    public String addRestaurant(RestaurantDto restaurants,int userId){
        try {
            Restaurants restaurants1=new Restaurants();
            User user=userRepository.findById(userId).get();
            restaurants1.setUser(user);
            restaurants1.setRestaurantName(restaurants.getRestaurantName());
            restaurants1.setCity(restaurants.getCity());
            restaurants1.setRating(restaurants.getRating());
            System.out.println(restaurants1);
            restaurantRepository.save(restaurants1);
            return "Restaurant added Successfully";
        } catch (Exception e) {
            return "Date Failed to register";
        }
    }

    @Override
    public String addMenu(MenuDto menuDto,int restId){
       try {
    	   Menu menu = new Menu();
    	   Restaurants center = restaurantRepository.findById(restId).get();
    	   menu.setDishName(menuDto.getDishName());
    	   System.out.println(menuDto.getDiscription());
    	   menu.setDiscription(menuDto.getDiscription());
    	   menu.setPrice(menuDto.getPrice());
    	   menu.setRestaurant(center);
           menuRepository.save(menu);
           return "Menu Added Successfully ";
       }
       catch (Exception e)
       {
           return "Error";
       }
    }
	
    @Override
    public String deliveyTheOrder(int oid) {
    	Orders order = orderRepository.findById(oid).get();
    	order.setOrderDeliveryStatus(OrderStatus.DELIVERED);
    	return "Order delivered sucessfully";
    }
    
    @Override
    public String cancelTheOrder(int oid) {
    	Orders order = orderRepository.findById(oid).get();
    	order.setOrderDeliveryStatus(OrderStatus.CANCELLED);
    	return "Order Cancelled";
    }
    
    @Override
    public Menu editMenu(int menuId, MenuDto menuDto) {
    	Menu menu = menuRepository.findById(menuId).get();
    	menu.setDishName(menuDto.getDishName());
    	menu.setDiscription(menuDto.getDiscription());
    	menu.setPrice(menuDto.getPrice());
    	return menu;
    }
    
    public Menu getMenuById(int mid) {
    	return menuRepository.findById(mid).get();
    }
	
}
