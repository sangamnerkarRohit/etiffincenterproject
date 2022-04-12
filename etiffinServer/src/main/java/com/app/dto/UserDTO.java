package com.app.dto;

import javax.persistence.Column;

public class UserDTO {
	@Column(length = 20, nullable = false)
	private String fullName;
	@Column(length = 30, nullable = false, unique = true)
	private String email;
	@Column(length = 20)
	private String phone;
	
	public UserDTO() {
		System.out.println("in ctor of "+getClass().getName());
	}

	public UserDTO(String fullName, String email, String phone) {
		super();
		this.fullName = fullName;
		
		this.email = email;
		this.phone = phone;
	}

	public String getFullName() {
		return fullName;
	}

	public void setfullName(String fullName) {
		this.fullName = fullName;
	}

	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "UserDTO [fullName=" + fullName + ", email=" + email + ", phone=" + phone
				+ "]";
	}

}
