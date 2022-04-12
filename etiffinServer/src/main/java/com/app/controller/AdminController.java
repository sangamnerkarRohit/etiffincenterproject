package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Restaurants;
import com.app.pojo.User;
import com.app.service.AdminServiceImpl;

@RestController
@RequestMapping("/customers")
@CrossOrigin
public class AdminController {

	@Autowired
	private AdminServiceImpl adminService;
	
	
	public AdminController() {
		System.out.println("inside admin controller");
	}
	
	@GetMapping("/getallvendors")
	public List<User> getAllOwners(){
		String role = "VENDOR";
		return adminService.getVendorsList(role);
	}
	
	@GetMapping("/getallvendorscenters/{vendorId}")
	public List<Restaurants> getAllVendorsCenter(@PathVariable int vendorId){
		return adminService.getCentersByVendorsId(vendorId);
	}
	
	@GetMapping("/removecenterbyid/{rid}")
	public String removeCenter(@PathVariable int rid) {
		return adminService.removeCenterByID(rid);
	}
	
	@GetMapping("/removemenubyid/{id}")
	public String removeMenuOfCenter(@PathVariable int id) {
		System.out.println("Inside remove Menu");
		return adminService.removeMenuOfCenter(id);
		
	}
}
