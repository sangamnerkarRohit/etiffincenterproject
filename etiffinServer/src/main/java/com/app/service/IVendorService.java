package com.app.service;

import java.util.List;

import com.app.dto.MenuDto;
import com.app.dto.RestaurantDto;
import com.app.dto.VendorDashBoardDto;
import com.app.pojo.Menu;

public interface IVendorService {
	
	public String addRestaurant(RestaurantDto restaurants,int userId);
	String addMenu(MenuDto menuDto,int restId);
	List<VendorDashBoardDto> vendorDashbaord(int centerId);
	
	String deliveyTheOrder(int oid);
	
	String cancelTheOrder(int oid);
	
	Menu editMenu(int menuId,MenuDto menuDto);
	
}
