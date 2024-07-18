import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import '../css/Form.css';
import Product from '../types/Product';

const EditForm = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState<Product>({
        prod_id: '',
        prod_name: '',
        prod_desc: '',
        prod_price: 0,
        prod_cat: '',
        prodimg_url: '',
    });

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
                setFormData(data); 
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/products/${product?.prod_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Product updated successfully');
            } else {
                throw new Error('Failed to update product');
            }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product');
        }
    };

    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <div className='form-container'>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label>
                <input
                    type='text'
                    name='prod_name'
                    placeholder='Enter Product Name'
                    value={formData.prod_name}
                    onChange={handleChange}
                />
                <label>Price</label>
                <input
                    type='text'
                    name='prod_price'
                    placeholder='Enter Price'
                    value={formData.prod_price}
                    onChange={handleChange}
                />
                <label>Categories</label>
                <input
                    type='text'
                    name='prod_cat'
                    placeholder='Enter Categories'
                    value={formData.prod_cat}
                    onChange={handleChange}
                />
                <label>Product Description</label>
                <input
                    type='text'
                    name='prod_desc'
                    value={formData.prod_desc}
                    onChange={handleChange}
                />
                <label>Product Image URL (Optional)</label>
                <input
                    type='text'
                    name='prodimg_url'
                    placeholder='Enter Image URL (Optional)'
                    value={formData.prodimg_url}
                    onChange={handleChange}
                />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditForm;
