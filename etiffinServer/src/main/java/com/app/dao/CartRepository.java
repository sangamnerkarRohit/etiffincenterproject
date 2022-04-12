package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojo.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {
	
	//add a method to get all items from Cart
	@Query("select c from Cart c where c.userId=:uId")
	List<Cart> getCartByuserId(@Param("uId")int uId);
	
	List<Cart> findCartByUserId(int userId);
	
	@Query("select c from Cart c where c.menuId=:mId and c.userId=:uId")
	Cart findByMenuId(@Param("mId")int mId , @Param("uId")int uId);
	
	Cart findByMenuName(String pName);
	
	String deleteByUserId(int userId);
	
}
