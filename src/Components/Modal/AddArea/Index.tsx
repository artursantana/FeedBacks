
import { useState, useEffect } from 'react'
import * as S from './style'
import FeedValue from '../../ApiHandling/FeedValue'

type Props = {
    onEnter: (taskName: string) => void
    onKeyUp: (e: KeyboardEvent) => void
    
}


const Index = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState('')
    const [comments, setComments] = useState<string[]>([]);
    const [lastCommentId, setLastCommentId] = useState<number | null>(null);

const handleKeyup = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){


          const newComments = [...comments, inputText.trim()];
          setComments(newComments);
          localStorage.setItem('comments', JSON.stringify(newComments));
          setInputText('');

          onEnter(inputText)
            
        }
}

const handleClick = () => {
  if(inputText !== ''){


    const newComments = [...comments, inputText.trim()];
    localStorage.setItem('comments', JSON.stringify(newComments));
    onEnter(inputText)

    setInputText('');

    setLastCommentId(newComments.length)
    
    
  }
}


useEffect(() => {
  const storedComments = localStorage.getItem('comments');
  if (storedComments) {
      setComments(JSON.parse(storedComments));
  }
  
}, []);




  return (
    <S.Add>
        <textarea type="text" placeholder='Write here' onChange={(e)=>setInputText(e.target.value)} onKeyUp={handleKeyup} />
        <button onClick={handleClick} type='submit'>Submit</button>

       

        <div>
                <h3>Comments:</h3>
                <FeedValue lastCommentId={lastCommentId} />
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
            </div>
      
    </S.Add>
  )
}

export default Index
