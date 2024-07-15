
import React from 'react'
import '../css/Main.css'

const MainContent = () => {
    return (
        <div className='container'>
            <div className='table-area'>
 
               <div className='button-container'>
                <button className='prim-button'>Add</button>
               </div>
             
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Operations</th>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>30</td>
                        <td>New York</td>
                        <td> 
                            <button className='prim-button'>Edit</button>
                            <button className='delete-button'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>28</td>
                        <td>Los Angeles</td>
                        <td> 
                            <button className='prim-button'>Edit</button>
                            <button className='delete-button'>Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MainContent