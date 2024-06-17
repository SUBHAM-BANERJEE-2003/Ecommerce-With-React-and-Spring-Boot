package com.Backend.Server.services;

import java.util.Optional;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import com.Backend.Server.MyException.ProductNotFoundException;
import com.Backend.Server.dto.ProductsDTO;
import com.Backend.Server.entity.ProductsEntity;
import com.Backend.Server.repositories.ProductRepository;


@Service
public class ProductService {

    final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductsDTO addProduct(ProductsDTO product) {
        System.out.println(product);
        ProductsEntity productEntity = new ProductsEntity(product.getProd_id(), product.getProd_name(), product.getProd_desc(), product.getProdimg_url(), product.getProd_price(), product.getProd_cat());
        productRepository.save(productEntity);
        return product;
    }

    public List<ProductsDTO> getAllProducts() {
        List<ProductsEntity> productEntities = productRepository.findAll();
        ModelMapper mapper = new ModelMapper(); 
        @SuppressWarnings("unchecked")
        List<ProductsDTO> productDTOs = mapper.map(productEntities, List.class);
        return productDTOs;
    }

    public ProductsDTO getProductByID(String id) throws ProductNotFoundException {
        Optional<ProductsEntity> productEntity = productRepository.findById(id);
        if (!productEntity.isPresent()) {
            throw new ProductNotFoundException("No product found for ID: " + id);
        }
        ProductsEntity product = productEntity.get();
        return new ProductsDTO(product.getProd_id(), product.getProd_name(), product.getProd_desc(), product.getProdimg_url(), product.getProd_price(), product.getProd_cat());
    }

    public ProductsDTO updateProduct(String id, ProductsDTO product) throws ProductNotFoundException {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException("No product found for ID: " + id);
        }

        ProductsEntity existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("No product found for ID: " + id));

        existingProduct.setProd_name(product.getProd_name());
        existingProduct.setProd_desc(product.getProd_desc());
        existingProduct.setProdimg_url(product.getProdimg_url());
        existingProduct.setProd_price(product.getProd_price());
        existingProduct.setProd_cat(product.getProd_cat());
        productRepository.save(existingProduct);

        return new ProductsDTO(existingProduct.getProd_id(), existingProduct.getProd_name(), 
                               existingProduct.getProd_desc(), existingProduct.getProdimg_url(), 
                               existingProduct.getProd_price(), existingProduct.getProd_cat()); 
    }
    

    public void deleteProduct(String id) throws ProductNotFoundException{
        if(!productRepository.existsById(id)){
            throw new ProductNotFoundException("No product found for ID: " + id);
        }
        productRepository.deleteById(id);
    }

}
