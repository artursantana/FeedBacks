





export type Item = {
    id: string
    title: string
    thumbnail: string
    installments: {
        amount: number
    }
    item?:{
        cart: string
    }
    
}

export default Item