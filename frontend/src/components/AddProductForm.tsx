import { ChangeEvent, FormEvent, useState } from 'react';
import '../css/Form.css'; 
import Product from '../types/Product';

const AddProductForm = () => {

  const [formData, setFormData] = useState<Product>({
    prod_id: '',
    prod_name: '',
    prod_desc: '',
    prod_price: 0,
    prod_cat: '',
    prodimg_url: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const res = fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        }).then(() => {
        alert('Product Added');
        }).catch(() => {
        alert('Error');
        });
        console.log(res);
  };

  return (
    <div className='form-container'>
      <h1>Add Product</h1>
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
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
