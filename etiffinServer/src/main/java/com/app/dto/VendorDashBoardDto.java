package com.app.dto;

import com.app.pojo.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VendorDashBoardDto {

	private int customerId;
	private int orderId;
	private OrderStatus status;
	private int restaurantId;
	private String menuName;
	private int qty;
	private Double finalPrice;
	private String ClientName;
	private int flatNo;
	private String societyName;
	private String area;
	private String pinCode;
	private String city;
	private String state;
	
}
