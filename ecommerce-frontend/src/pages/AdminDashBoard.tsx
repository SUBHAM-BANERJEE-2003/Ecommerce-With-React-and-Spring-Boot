

const AdminDashBoard = () => {
  return (
    <>
    <div className="sidebar">
        <div>MYSHOP ADMIN</div>
        <ul>
            <li>Dashboard</li>
            <li>Orders</li>
            <li>Products</li>
            <li>Customers</li>
        </ul>
    </div>
    <div className="dashboard-main-page">
        <h1>Welcome, ADMIN</h1>
        <div className="box">
            23459 
            <p>Orders</p>
        </div>
        <div className="box">
            $ 234509
            <p>Total Sales</p>
        </div>
        <div className="chart">
            <h4>Sales Chart</h4>
            <img src="https://via.placeholder.com/300" alt="Sales Chart"/>
        </div>
        <div className="right-sidebar">
            <h4>Top Selling Products</h4>
            <p>1. MacBook Pro</p>
            <p>2. Epson Printer</p>
        </div>
    </div>
    </>
  )
}

export default AdminDashBoard