import { useState } from "react"


import * as S from './style'


import Add from '../AddArea/Index'

interface Props {
    
    id: number
    name: string
    done: boolean
}



const Index = () => {

const [comment, setComment] = useState<Props[]>([])

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
        <Add onEnter={handleAddTask} />
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
