import { Col, Container, Row } from "react-bootstrap"
import Sidebar from "../components/SideBar"
import '../css/AdminDash.module.css'


const AdminDashBoard = () => {
  return (
    <>
    <Container fluid>
                <Row>
                    <Col xs={2} className="bg-primary text-white" id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
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
                    </div>
                    </Col> 
                </Row>

    </Container>
    
    </>
  )
}

export default AdminDashBoard