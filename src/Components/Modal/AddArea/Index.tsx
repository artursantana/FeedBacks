
import { useState } from 'react'
import * as S from './style'

type Props = {
    onEnter: (taskName: string) => void
    onKeyUp: (e: KeyboardEvent) => void
    
}


const Index = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState('')

const handleKeyup = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            
        }
}

  return (
    <S.Add>
        <div>+</div>
        <input type="text" placeholder='Write here' onChange={(e)=>setInputText(e.target.value)} onKeyUp={handleKeyup} />
      
    </S.Add>
  )
}

export default Index
