package com.Backend.Server.Exceptions;

public class ProductNotFoundException extends Exception{

    private String message;

    public ProductNotFoundException(String message){
        this.message = message;
    }

    
    public String toString(){
        return message;
    }

}
