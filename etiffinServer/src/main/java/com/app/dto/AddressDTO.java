package com.app.dto;

import javax.persistence.Column;

import com.app.pojo.BaseEntity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class AddressDTO extends BaseEntity {

		private int flatNo;
		private String societyName;		
		private String area;
		private String city;
		private String state;
		private String pinCode;
		
	
}
