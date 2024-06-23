package com.Backend.Server.dto;

public class ProductsDTO {
    
    private String prod_id;

    private String prod_name;
    
    private String prod_desc;

    public ProductsDTO(String prod_id, String prod_name, String prod_desc, String prodimg_url, int prod_price,
            String prod_cat) {
        this.prod_id = prod_id;
        this.prod_name = prod_name;
        this.prod_desc = prod_desc;
        this.prodimg_url = prodimg_url;
        this.prod_price = prod_price;
        this.prod_cat = prod_cat;
    }

    private String prodimg_url;

    public void setProd_id(String prod_id) {
        this.prod_id = prod_id;
    }

    public void setProd_name(String prod_name) {
        this.prod_name = prod_name;
    }

    public void setProd_desc(String prod_desc) {
        this.prod_desc = prod_desc;
    }

    public void setProdimg_url(String prodimg_url) {
        this.prodimg_url = prodimg_url;
    }

    public void setProd_price(int prod_price) {
        this.prod_price = prod_price;
    }

    public void setProd_cat(String prod_cat) {
        this.prod_cat = prod_cat;
    }

    public String getProd_id() {
        return prod_id;
    }

    public String getProd_name() {
        return prod_name;
    }

    public String getProd_desc() {
        return prod_desc;
    }

    public String getProdimg_url() {
        return prodimg_url;
    }

    public int getProd_price() {
        return prod_price;
    }

    public String getProd_cat() {
        return prod_cat;
    }

    private int prod_price;

    private String prod_cat;
}
