





export type Item = {
    id: string
    title: string
    thumbnail: string
    item: string
    installments: {
        amount: number }
    isOpen: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    ItemTitle: string
    lastCommentId: number | null;
    value: (lastCommentId: number | null) => void
    
    
}

export default Item