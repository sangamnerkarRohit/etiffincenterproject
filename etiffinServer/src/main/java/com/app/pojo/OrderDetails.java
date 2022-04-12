package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

//order_details_id	user_id / customer_id	product_name	final_price	qty	grams	
//order_id
@Entity
@Table(name = "order_details")
public class OrderDetails extends BaseEntity{
	private int menuId;
	@Column(length = 20)
	private String menuName;
	private double finalPrice;
	private int qty;
	private int centerId;
	
	public OrderDetails() {
		System.out.println("in ctor of "+getClass().getName());
	}
	
	
	
	public OrderDetails(int menuId,String menuName, double finalPrice, int qty,int centerId) {
		super();
		this.menuId = menuId;
		this.menuName = menuName;
		this.finalPrice = finalPrice;
		this.qty = qty;
		this.centerId=centerId;
		
	}



	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "order_id", nullable = false)
	private Orders selectedOrder;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id", nullable = false)
	private User selectedUser;

	
	
	public int getMenuId() {
		return menuId;
	}



	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}



	public String getMenuName() {
		return menuName;
	}



	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}




	public int getCenterId() {
		return centerId;
	}



	public void setCenterId(int centerId) {
		this.centerId = centerId;
	}



	public double getFinalPrice() {
		return finalPrice;
	}



	public void setFinalPrice(double finalPrice) {
		this.finalPrice = finalPrice;
	}



	public int getQty() {
		return qty;
	}



	public void setQty(int qty) {
		this.qty = qty;
	}


	


	public Orders getSelectedOrder() {
		return selectedOrder;
	}



	public void setSelectedOrder(Orders selectedOrder) {
		this.selectedOrder = selectedOrder;
	}


	
	public User getSelectedUser() {
		return selectedUser;
	}


	@JsonIgnore
	public void setSelectedUser(User selectedUser) {
		this.selectedUser = selectedUser;
	}



	@Override
	public String toString() {
		return "OrderDetails [ menuId="+menuId+", menuName=" + menuName + ", finalPrice=" + finalPrice + ", qty=" + qty
				+ ", selectedOrder=" + selectedOrder + ", selectedUser="
				+ selectedUser + "]";
	}

	
}
