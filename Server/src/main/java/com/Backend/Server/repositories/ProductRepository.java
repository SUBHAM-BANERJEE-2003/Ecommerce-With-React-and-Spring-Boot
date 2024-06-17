package com.Backend.Server.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Backend.Server.entity.ProductsEntity;

@Repository
public interface ProductRepository extends JpaRepository<ProductsEntity, String> {
    @SuppressWarnings("null")
    Optional<ProductsEntity> findById(String id);
}
