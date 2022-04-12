package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojo.Restaurants;

public interface RestaurantsRepository extends JpaRepository<Restaurants, Integer> {

	@Query("select r from Restaurants r where r.city=:city")
	List<?> findByCity(@Param("city")String city);
	
	//add a method to get add available restaurants
	List<Restaurants> findAll();
	
	@Query("select r from Restaurants r where r.user.id=:uid")
	List<Restaurants> finsByUserId(@Param("uid")int uid);
	
	@Modifying
	@Query("delete from Restaurants r where r.id=:rid")
	void deleteCenterById(@Param("rid")int rid);
	
	
}
