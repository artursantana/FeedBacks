
import { useState } from 'react'
import * as S from './style'


const Index = () => {

    const [inputText, setInputText] = useState('')

const handleKeyup = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            console.log('arur')
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
