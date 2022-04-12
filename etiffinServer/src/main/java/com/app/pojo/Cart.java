package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Cart extends BaseEntity{
	private int menuId;
	@Column(length = 20, nullable = false)
	private String menuName;
	@Column(length = 100,nullable = false)
	private String description;
	private double price;
	private int qty;
	@JsonIgnoreProperties
	private int userId;
	public Cart() {
		System.out.println("in ctor of "+getClass().getName());
	}
	public Cart(int menuId, String menuName, String description, int rating, double price, int discount,
			double finalPrice, int qty, int grams, int userId) {
		super();
		this.menuId = menuId;
		this.menuName = menuName;
		this.description = description;
		this.price = price;
		this.qty = qty;
		this.userId = userId;
	}
	public int getmenuId() {
		return menuId;
	}
	public void setmenuId(int menuId) {
		this.menuId = menuId;
	}
	public String getmenuName() {
		return menuName;
	}
	public void setmenuName(String menuName) {
		this.menuName = menuName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	@Override
	public String toString() {
		return "Cart [menuId=" + menuId + ", menuName=" + menuName + ", description=" + description+ ", price=" + price
				+ ", qty=" + qty  + ", userId=" + userId + "]";
	}


}


