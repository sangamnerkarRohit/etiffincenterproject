package com.app.dto;

public class MenuCartDto {
	
	private int userId;
	private int menuId;
	
	public MenuCartDto() {
		System.out.println("Inside menu cart dto");
	}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getMenuId() {
		return menuId;
	}
	public void setmenuId(int menuId) {
		this.menuId = menuId;
	}
	@Override
	public String toString() {
		return "ProductCartId [userId=" + userId + ", menuId=" + menuId + "]";
	}
}
