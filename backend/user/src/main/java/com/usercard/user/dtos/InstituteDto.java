package com.usercard.user.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InstituteDto {
    private Long id;

    private String adress;

    private String contactNumber;

    private String name;

    private Boolean archived;
}
