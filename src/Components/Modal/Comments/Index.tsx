import { useState } from "react"


import * as S from './style'


import Add from '../AddArea/Index'

interface Props {
    
    id: number
    name: string
    done: boolean
}



const Index = () => {

const [comment] = useState<Props[]>([])


  return (
    <S.ContainerComment>
        <Add />
        
      {
      comment.map((element, index)=>(
        <S.CardComment key={index}>
            <h2>Comments :</h2>
            <S.Comment>{element.name}</S.Comment>
        </S.CardComment>

      ))
      }
    </S.ContainerComment>
  )
}

export default Index
