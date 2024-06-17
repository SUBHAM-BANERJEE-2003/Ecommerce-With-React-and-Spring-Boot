package com.Backend.Server.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Products")
public class ProductsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String prod_id;

    private String prod_name;
    
    private String prod_desc;

    private String prodimg_url;

    private int prod_price;

    private String prod_cat;
    
}
