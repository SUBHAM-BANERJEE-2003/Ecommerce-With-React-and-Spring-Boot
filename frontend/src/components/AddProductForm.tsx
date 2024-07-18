import React, { ChangeEvent, FormEvent } from 'react';
import '../css/Form.css'
import FormData from '../types/FormData';

const AddProductForm = () => {

    const [formData, setFormData] = React.useState<FormData>({
        name: '',
        price: '',
        categories: '',
        image: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData(prevState => ({
                ...prevState,
            }));
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { name, price, categories, image } = formData;
        console.log(name, price, categories, image);
        alert('Product Added');
    };

    return (
        <div className='form-container'>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Enter Product Name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <label>Price</label>
                <input
                    type='text'
                    name='price'
                    placeholder='Enter Price'
                    value={formData.price}
                    onChange={handleChange}
                />
                <label>Categories</label>
                <input
                    type='text'
                    name='categories'
                    placeholder='Enter Categories'
                    value={formData.categories}
                    onChange={handleChange}
                />
                <label>Product Image URL</label>
                <input
                    type='text'
                    name='image'
                    onChange={handleChange}
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductForm;