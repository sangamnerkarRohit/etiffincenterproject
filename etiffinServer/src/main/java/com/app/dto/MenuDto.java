package com.app.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MenuDto {
    private String dishName;
    private double price;
    private String discription;
}
