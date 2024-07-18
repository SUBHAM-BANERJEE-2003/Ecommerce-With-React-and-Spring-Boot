import { useState, useEffect } from 'react';
import Product from '../types/Product';
import '../css/ProdDetails.css';

const ProductDetails = () => {
    const [product, setProduct] = useState<Product | null>(null);
   
    useEffect(() => {
        const id = window.location.pathname.split('/').pop();
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8080/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, []);

    return (
        <div className="detailcontainer">
            <h1>Product Details</h1>
            {product && (
                <div className="product-details">
                    <div className="product-image">
                        <img src={product.prodimg_url} alt='Product' />
                    </div>
                    <div className="product-info">
                        <p><b>Product Name:</b> {product.prod_name}</p>
                        <p><b>Price:</b> ${product.prod_price}</p>
                        <p><b>Categories:</b> {product.prod_cat}</p>
                        <p><b>Description:</b> {product.prod_desc}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;
