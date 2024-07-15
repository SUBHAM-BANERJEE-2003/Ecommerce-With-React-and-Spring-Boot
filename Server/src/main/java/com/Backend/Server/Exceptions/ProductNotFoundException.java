package com.Backend.Server.MyException;

public class ProductNotFoundException extends Exception{

    private String message;

    public ProductNotFoundException(String message){
        this.message = message;
    }

    
    public String toString(){
        return message;
    }

}
