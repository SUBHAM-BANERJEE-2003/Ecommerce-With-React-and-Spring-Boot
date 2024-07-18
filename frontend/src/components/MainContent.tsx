import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Main.css'
import Product from '../types/Product'

const MainContent = () => {

    const [products, setProducts] = React.useState<Product[]>([])
    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const recordsPerPage = 3
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const currentRecords = products.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(products.length / recordsPerPage)
    
    const changePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }
    const numbers = [...Array(totalPages + 1).keys()].slice(1)
    React.useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetch('http://localhost:8080/products')
            .then(res => res.json())
            .catch(err => console.log(err))
            console.log(productsFromServer)
            setProducts(productsFromServer)
        }

        getProducts()
    }, [])

    const deleteProd = async (id: string) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: 'DELETE',
        })
        setProducts(products.filter((product) => product.prod_id !== id))
    }

    console.log(products)

    return (
        <div className='container'>
            <div className='table-area'>
                <div className='button-container'>
                    <Link to="/add"><button className='prim-button'>Add</button></Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Categories</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords && currentRecords.map((product, index) => (
                            <tr key= {index}>
                                <td>{product.prod_id}</td>
                                <td><img src={product.prodimg_url} alt='Product' width='50' height='50'/></td>
                                <td>{product.prod_name}</td>
                                <td><b>$</b> {product.prod_price}</td>
                                <td>{product.prod_cat}</td>
                                <td>
                                    <Link to={`/details/${product.prod_id}`}><button className='prim-button'>Details</button></Link>
                                    <Link to={`/edit/${product.prod_id}`}>
                                        <button className='prim-button'>Edit</button>
                                    </Link>
                                    <button className='delete-button' onClick={() => deleteProd(product.prod_id)}>Delete</button>
                                </td>               
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav className='pagination-container'>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a href="#" className='page-link' onClick={prevPage}>Prev</a>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                    <Link to="#" className='page-item' onClick={() => changePage(n)}>
                                      { n }
                                    </Link>
                                </li>
                            ))
                        }  
                        <li className='page-items'>
                            <a href='#' className='page-link' onClick={nextPage}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );

    function prevPage(){
        if(currentPage != 1){
            setCurrentPage(currentPage - 1)
        }
    }

    function nextPage(){
        if(currentPage != totalPages){
            setCurrentPage(currentPage + 1)
        }
    }
}

export default MainContent