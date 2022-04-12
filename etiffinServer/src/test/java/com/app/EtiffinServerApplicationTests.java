package com.app;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojo.Restaurants;
import com.app.service.CustomerServiceImpl;

@SpringBootTest
class EtiffinServerApplicationTests {

	@Autowired
	CustomerServiceImpl custSer;
	
	@Test
	void contextLoads() {
	}
	
	
}
