package com.app.pojo;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="user_tbl")
public class User extends BaseEntity {

	@Column(length = 30)
	private String fullName;
	@Column(length = 30 , unique = true)
	private String emailId;
	@Column(length = 10 , unique = true)
	private String phoneNo;
	@Column
	private String password;
	@Column
	private String role;
	
	
	
	public User() {
		// TODO Auto-generated constructor stub
	}
	
	
	public User(String fullName, String emailId, String phoneNo, String password, String role) {
		super();
		this.fullName = fullName;
		this.emailId = emailId;
		this.phoneNo = phoneNo;
		this.password = password;
		this.role = role;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Restaurants> restaurants = new ArrayList<Restaurants>();
	
	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
	
	public List<Restaurants> getRestaurants() {
		return restaurants;
	}

	public void setRestaurants(List<Restaurants> restaurants) {
		this.restaurants = restaurants;
		Restaurants res = new Restaurants();
	}

	@Override
	public String toString() {
		return "User [fullName=" + fullName + ", emailId=" + emailId + ", phoneNo=" + phoneNo+", role=" + role  + "]";
	}

	
	
	
	
}

