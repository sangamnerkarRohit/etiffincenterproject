package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.MenuDto;
import com.app.dto.RestaurantDto;
import com.app.pojo.Menu;
import com.app.service.VendorServiceImpl;

@RestController
@RequestMapping("/customers")
@CrossOrigin
public class VendorController {

	@Autowired 
	VendorServiceImpl vendorService;
	

	@GetMapping("/dashboard/{restaurantId}")
	public List<?> getDashBaord(@PathVariable Integer restaurantId)
	{	
		
		return vendorService.vendorDashbaord(restaurantId);
	}

	@PostMapping("/addCenter/{userID}")
	public String registerRestaurant( @PathVariable int userID ,@RequestBody RestaurantDto restaurants)
	{

		return vendorService.addRestaurant(restaurants, userID);
	}
	@PostMapping("/addMenu/{restId}")
	public String addMenu(@PathVariable int restId, @RequestBody MenuDto menuDto)
	{

		return vendorService.addMenu(menuDto, restId);
	}
	
	@GetMapping("/deliver-order/{oid}")
	public String deliverOrder(@PathVariable int oid) {
		return vendorService.deliveyTheOrder(oid);
	}
	
	@GetMapping("/cancelorder/{oid}")
	public String cencelOrder(@PathVariable int oid) {
		return vendorService.cancelTheOrder(oid);
	}
	
	@PutMapping("/edit-menu/{menuId}")
	public Menu editMenu(@PathVariable int menuId,@RequestBody MenuDto menuDTO){
		System.out.println("in edit Profile: "+menuDTO);
		return vendorService.editMenu(menuId, menuDTO);
	}
	
	@GetMapping("/getmenu/{mid}")
		public Menu getMenuById(@PathVariable int mid) {
			return vendorService.getMenuById(mid);
		}
	
}
