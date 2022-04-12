package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddressDTO;
import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojo.Address;
import com.app.pojo.User;
import com.app.service.UserServiceImpl;

@CrossOrigin(origins="http://localhost:3000" , allowedHeaders = "*")
@RestController
@RequestMapping("/customers")
public class UserController {
	@Autowired
	private UserServiceImpl userService;

	public UserController() {
		System.out.println("Inside user Controller");
	}
	
	
	
	
	@PostMapping("/login")
	public User authenticateUser(@RequestBody LoginRequest loginRequest){
		System.out.println("In authentication "+loginRequest);
		try {
			User u = userService.authenticateUser(loginRequest);
			return u;
		}catch (RuntimeException e) {
			System.out.println("Error in authenticate User");
			return null;
		}
	}
	
	@PostMapping("/signup")
	public User registerNewUser(@RequestBody User u) {
		return userService.registerUser(u);
	}
	
	@PutMapping("/edit-profile/{userId}")
	public User editProfile(@PathVariable int userId,@RequestBody UserDTO userDTO){
		System.out.println("in editProfile: "+userDTO);
		return userService.editProfile(userId, userDTO);
	}
	
	@PutMapping("/change_pwd/{userId}/{pwd}")
	public String changePassword(@PathVariable int userId,@PathVariable String pwd){
		System.out.println("in changePassword: "+userId + "Pass : "+pwd);
		return userService.changePassword(userId, pwd);
	}
	
	@PostMapping("/addaddress/{userId}")
	public String addUserAddress(@PathVariable int userId, @RequestBody AddressDTO address) {
		return userService.addUserAddress(userId, address);
	}
	
	
	@GetMapping("/address/{userId}")
	public Address getAddress(@PathVariable int userId){
		System.out.println("in userId: "+userId);
		return userService.getAddress(userId);
	}
	
	@PutMapping("/address/{userId}")
	public String editAddress(@PathVariable int userId,@RequestBody Address address){
		System.out.println("in editAddress: "+userId + "Address : "+address);
		return userService.editAddress(userId, address);
	}
	
}
