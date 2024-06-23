import { Col, Row } from "react-bootstrap"
import jsonItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
import Axios from "axios"
import { useEffect, useState } from "react"

// from api console log the products list 

export function Store(){

    const [items, setItems] = useState<StoreItemType[]>([])

    useEffect(() => {
        Axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`)
        .then(response => {
            console.log(response.data)
            setItems(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
        <h1>Store</h1>
        <Row xs={1} md={2} lg={3} className="g-3">
            {items.map(item => (
                <Col key={item.prod_id}><StoreItem{...item}/></Col>
            ))}
        </Row>
        </>
    )
}