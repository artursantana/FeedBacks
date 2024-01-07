import { useState } from "react"


import * as S from './style'


import Add from '../AddArea/Index'

interface Props {
    
    id: number
    name: string
    done: boolean
}



const Index = () => {

const [comment, setComment] = useState<Props[]>([
    {id:1, name:'artur',done:false},
    {id:2, name:'renata',done:true}
])

const handleAddTask = (taskName: string) => {
    const newComment = [...comment]
    newComment.push({
        id: comment.length + 1,
        name: taskName,
        done:false
    })
    setComment(newComment)
}

  return (
    <S.CardComment>
        <Add />
      {
      comment.map((Element, index)=>(
        <div key={index}>
            <p>{Element.name}</p>
            
        </div>

      ))
      }
    </S.CardComment>
  )
}

export default Index
