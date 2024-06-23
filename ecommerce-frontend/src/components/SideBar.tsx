import {Nav} from "react-bootstrap";
import '../css/SideBar.module.css'
import { FcDataConfiguration, FcApprove, FcTodoList , FcBusinessman } from "react-icons/fc";

const Sidebar = () => {
   

    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar text-white"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <FcDataConfiguration size={"20px"} className="text-white"/>
                <Nav.Link href="/admin" className="text-white">DashBoard</Nav.Link>
            </Nav.Item>
            <hr className="bg-white"/>
            <Nav.Item>
                <FcApprove size={"20px"} className="text-white"/>
                <Nav.Link eventKey="link-1" className="text-white">Orders</Nav.Link>
            </Nav.Item>
            <hr className="bg-white"/>
            <Nav.Item>
                <FcTodoList size={"20px"} className="text-white"/>
                <Nav.Link eventKey="link-2" className="text-white">Products</Nav.Link>
            </Nav.Item>
            <hr className="bg-white"/>
            <Nav.Item>
                <FcBusinessman size={"20px"} className="text-white"/>
                <Nav.Link eventKey="link-2" className="text-white">Customers</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };

  export default Sidebar