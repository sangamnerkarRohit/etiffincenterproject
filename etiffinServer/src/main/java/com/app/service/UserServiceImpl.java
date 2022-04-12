package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AddressRepository;
import com.app.dao.OrdersRepository;
import com.app.dao.UserRepository;
import com.app.dto.AddressDTO;
import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojo.Address;
import com.app.pojo.Orders;
import com.app.pojo.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;
	@Autowired
	private AddressRepository addRepo;
	@Autowired
	private OrdersRepository orderRepo;

	@Override
	public User authenticateUser(LoginRequest loginRequest) {
		return userRepo.findByEmailIdAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
	}

	@Override
	public User registerUser(User u) {
		return userRepo.save(u);
	}

	@Override
	public User findById(int userId) {
		return userRepo.findById(userId).get();
	}

	@Override
	public String changePassword(int userId, String pwd) {
		User user = userRepo.findById(userId).get();
		user.setPassword(pwd);
		return "Password Changed successfully";
	}

	@Override
	public String editAddress(int userId, Address address) {
		Address addrs = addRepo.findById(userId).get();
		System.out.println("address : "+addrs);
		if(addrs!=null) {
			addrs.setArea(address.getArea());
			addrs.setCity(address.getCity());
			addrs.setFlatNo(address.getFlatNo());
			addrs.setPinCode(address.getPinCode());
			addrs.setSocietyName(address.getSocietyName());
			addrs.setState(address.getState());
			return "Address Changed successfully";
		}
		else{
			return "failed to update address";
		}
	}

	@Override
	public User editProfile(int userId, UserDTO userDTO) {
		User user = userRepo.findById(userId).get();
		user.setFullName(userDTO.getFullName());
		user.setPhoneNo(userDTO.getPhone());
		user.setEmailId(userDTO.getEmail());
		
		return user;
	}

	@Override
	public Address getAddress(int userId) {
		return addRepo.findById(userId).get();
	}
	
	@Override
	public String addUserAddress(int userId,AddressDTO address) {
		Address adds = new Address();
		adds.setCurrentUser(userRepo.findById(userId).get());
		adds.setFlatNo(address.getFlatNo());
		adds.setSocietyName(address.getSocietyName());
		adds.setArea(address.getArea());
		adds.setCity(address.getCity());
		adds.setPinCode(address.getPinCode());
		adds.setState(address.getState());
		addRepo.save(adds);
		return "address added";
	}
	
	@Override
	public Address getOrderAddressDetails(int orderId) {
		Orders order = orderRepo.findById(orderId).get();
		User user = order.getSelectedCustomer();
		return addRepo.findById(user.getId()).get();
	}
	
	
}
