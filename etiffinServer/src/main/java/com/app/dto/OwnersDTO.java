package com.app.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class OwnersDTO {
	@Column(length = 20,nullable = false)
	private int centerId;
	@Column(length = 20,nullable = false)
	private String resName;
	@Column(length = 20,nullable = false)
	private int userId;
	@Column(length = 20,nullable = false)
	private String userName;
	@Column(length = 20,nullable = false)
	private String contactNo;
	@Column(length = 20,nullable = false)
	private String city;
	
}
