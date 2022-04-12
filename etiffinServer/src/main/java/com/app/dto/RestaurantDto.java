package com.app.dto;


import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantDto {

    private String restaurantName;

    private String city;

    private double rating;
}
