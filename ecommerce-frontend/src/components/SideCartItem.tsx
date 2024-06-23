import { Button, Stack } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../ context/ShoppingCartContext"
import { useEffect, useState } from "react"
import Axios from "axios"

export function SideCartItem({id, quantity}: SideCartItemType){
    const {removeFromCart} = useShoppingCart();
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
    const item = items.find(i => i.prod_id === id)
    if (item===undefined) return undefined
    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.prodimg_url} style={{width: "130px", height: "75px", objectFit:"cover"}}/>
            
            <div className="me-auto">
                <div>{item.prod_name}
                {quantity>1 && <span className="text-muted" style={{fontSize:"0.9rem"}}> x{quantity}</span>}
                </div>
            <div>
                {formatCurrency(item.prod_price)}
            </div>
             </div>
             <div>{formatCurrency(item.prod_price * quantity)}
             </div>
             <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>&times;</Button>
        </Stack>
    )
}