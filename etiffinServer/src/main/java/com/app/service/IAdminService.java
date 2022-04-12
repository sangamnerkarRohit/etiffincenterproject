package com.app.service;

import java.util.List;

import com.app.pojo.Restaurants;
import com.app.pojo.User;

public interface IAdminService {
	
	//add a method to get all vendors who has register of our portal
	List<User> getVendorsList(String role);
	
	//add a method to get add centers of specific vendor
	List<Restaurants> getCentersByVendorsId(int vendorId);
	
	String removeCenterByID(int centerId);
	
	String removeMenuOfCenter(int mid);
	
}
