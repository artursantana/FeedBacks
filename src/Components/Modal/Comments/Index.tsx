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
    <S.ContainerComment>
        <Add onEnter={handleAddTask} />
      {
      comment.map((Element, index)=>(
        <S.CardComment key={index}>
            <h2>Comments :</h2>
            <S.Comment>{Element.name}</S.Comment>
            
        </S.CardComment>

      ))
      }
    </S.ContainerComment>
  )
}

export default Index
