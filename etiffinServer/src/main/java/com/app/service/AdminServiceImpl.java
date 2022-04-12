package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.MenuRepository;
import com.app.dao.RestaurantsRepository;
import com.app.dao.UserRepository;
import com.app.pojo.Menu;
import com.app.pojo.Restaurants;
import com.app.pojo.User;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
	
	@Autowired 
	UserRepository userRepo;
	@Autowired
	RestaurantsRepository restRepo;
	@Autowired
	MenuRepository menuRepo;
	
	@Override
	public List<User> getVendorsList(String role) {
		return userRepo.findByRole(role);
	}

	@Override
	public List<Restaurants> getCentersByVendorsId(int vendorId) {
		return restRepo.finsByUserId(vendorId);
	}
	
	@Override
	public String removeCenterByID(int centerId) {
		Restaurants center = restRepo.findById(centerId).get();
		System.out.println(center.toString());
		restRepo.deleteCenterById(centerId);
		return "Center Removed sucessfully";
	}
	
	@Override
	public String removeMenuOfCenter(int mid) {
		System.out.println("inside remove menu");
		menuRepo.deleteMenuById(mid);
		return "Menu Removed Sucessfully";
	}
	
}
