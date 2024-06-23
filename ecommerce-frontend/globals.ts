
declare global {
    type StoreItemType = {
        prod_id: string,
        prod_name: string,
        prod_desc: string,
        prod_price: number,
        prodimg_url: string,
        prod_cat: string
    }
    type CartItem={
        id: string,
        quantity: number
    }
    type SideCartItemType ={
        id: string,
        quantity: number
    }
}

export default {}