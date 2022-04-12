package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

//	@Query("select u from User u where u.emailId=:em and u.password=:pass")
//	User authenticateUser(@Param("em")String em, @Param("pass")String pass);
	
	User findByEmailIdAndPassword(String emailId,String password);
	
	//add method to get user by id
	List<User> findByRole(String role);
	
}
