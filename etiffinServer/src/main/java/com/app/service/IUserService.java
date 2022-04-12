package com.app.service;

import com.app.dto.AddressDTO;
import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojo.Address;
import com.app.pojo.User;

public interface IUserService {

	User authenticateUser(LoginRequest loginRequest);

	User registerUser(User u);

	// add method to get user by id
	User findById(int userId);

	User editProfile(int userId, UserDTO userDTO);

	String changePassword(int userId, String pwd);

	Address getAddress(int userId);

	String editAddress(int userId, Address address);
	
	Address getOrderAddressDetails(int orderId);
	
	String addUserAddress(int userId,AddressDTO addDto);

}
