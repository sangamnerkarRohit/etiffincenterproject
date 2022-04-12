package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table(name = "menu_tbl")
public class Menu extends BaseEntity{

	@Column
	private String dishName;
	@Column
	private String discription;
	@Column
	private double price;
	
	@ManyToOne()
	@JoinColumn(name = "rest_id", nullable = false)
	private Restaurants restaurant;
	
}
