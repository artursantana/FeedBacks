





export type Item = {
    id: string
    title: string
    thumbnail: string
    item: string
    installments: {
        amount: number
    }
    isOpen: boolean
    setOpen: (isOpen: boolean) => void
    ItemTitle: string
    
}

export default Item