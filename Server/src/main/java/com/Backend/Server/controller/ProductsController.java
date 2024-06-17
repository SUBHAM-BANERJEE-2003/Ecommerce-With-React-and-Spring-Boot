package com.Backend.Server.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Backend.Server.MyException.ProductNotFoundException;
import com.Backend.Server.dto.ProductsDTO;
import com.Backend.Server.services.ProductService;

@RestController
public class ProductsController {

    private final ProductService productService;

    public ProductsController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping("/")
    public String welcomemsg(){
        return "welcome to Spring Boot Backend";
    }

    @GetMapping("/products")
    public List<ProductsDTO> getAllProducts(){
        return productService.getAllProducts();
    }

    @PostMapping("/products")
    public ResponseEntity<ProductsDTO> addProduct(@RequestBody ProductsDTO product) {
        try {
            ProductsDTO savedProduct = productService.addProduct(product);
            return ResponseEntity.ok(savedProduct);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<ProductsDTO> getProductsByID(@PathVariable("id") String id) {
        try {
            ProductsDTO result = productService.getProductByID(id);
            return ResponseEntity.ok(result);
        } catch (ProductNotFoundException e) {
            System.out.println(e);
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<ProductsDTO> updateProduct(@PathVariable("id") String id, @RequestBody ProductsDTO product) {
        try {
            ProductsDTO updatedProduct = productService.updateProduct(id, product);
            return ResponseEntity.ok(updatedProduct);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }


    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") String id) {
        try {
            productService.deleteProduct(id);
            return ResponseEntity.ok("Product deleted successfully with ID: " + id);
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.badRequest().build();
        }
    }

}
