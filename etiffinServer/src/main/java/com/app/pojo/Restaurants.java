package com.app.pojo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name="restaurants_tbl")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@ToString
public class Restaurants extends BaseEntity {
	
	@Column
	private String restaurantName;
	@Column
	private String city;
	@Column
	private double rating;
	
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER,mappedBy = "restaurant",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Menu> menu = new ArrayList<Menu>();
	
}
