import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../ context/ShoppingCartContext";
import StoreItemType  from "../../globals";

export function StoreItem({prod_id, prod_name, prod_price, prodimg_url}:
    StoreItemType){
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(prod_id);
 return (
    <Card className="h-100">
        <Card.Img src={prodimg_url} height="250px" style={{objectFit: "cover"}} alt="cart-item"/>
        <Card.Body>
        <Card.Title className="mb-3 d-flex justify-content-between align-items-baseline">
            <span className="fs-3">{prod_name}</span>
            <span className="ms-2 text-muted">{formatCurrency(prod_price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0? (
                <Button variant="dark" className="w-100" onClick={()=> increaseItemQuantity(prod_id)}>+ Add</Button>
                ) : <div className="d-flex flex-column align-items-end"
                    style={{gap:"0.5rem"}}>
                     <div className="align-items-center d-flex justify-content-end"
                        style={{gap:"0.5rem"}}>
                        <Button variant="dark" onClick={()=> decreaseItemQuantity(prod_id)}>-</Button>
                        <div>
                        <span className="fs-5">{quantity}</span> in Cart</div>
                        <Button variant="dark" onClick={()=> increaseItemQuantity(prod_id)}>+</Button>
                     </div>
                    <Button variant="outline-danger" onClick={()=> removeFromCart(prod_id)}>Remove</Button>
                    </div>}
            </div>
        </Card.Body>
    </Card>
 )
}