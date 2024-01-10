
import { useState, useEffect } from 'react'
import * as S from './style'



type Props = {
    
   type: string
    
}


const Index = ({type}: Props) => {

    const [inputText, setInputText] = useState('')
    const [comments, setComments] = useState<string[]>([]);
    const [lastCommentId, setLastCommentId] = useState<number | null>(null);
   

/*const handleKeyup = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){


          const newComments = [...comments, inputText.trim()];
          setComments(newComments);
          localStorage.setItem('comments', JSON.stringify(newComments));
          setInputText('');

          onEnter(inputText)
            
        }
}*/

const handleClick = () => {
  if (inputText !== '') {
   
    const storedComments = localStorage.getItem('comments');
    let existingComments = [];

    if (storedComments) {
      existingComments = JSON.parse(storedComments);
    }

    const newComments = [...existingComments, inputText.trim()];
    
    setComments(newComments);
    localStorage.setItem('comments', JSON.stringify(newComments));
    
  

    
  }
}



useEffect(() => {
  const storedComments = localStorage.getItem('comments');
  if (storedComments) {
      setComments(JSON.parse(storedComments));
  }
  
}, []);

useEffect(() => {
  setLastCommentId(comments.length);
}, [comments]);




  return (
    <S.Add>
        <textarea type="text" placeholder='Write here' onChange={(e)=>setInputText(e.target.value)} />
        <button onClick={handleClick} type='submit'>Submit</button>

        <div>
                <h3>Comments:</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <div>
                          <li key={index}>{comment}</li>
                          
                        </div>
                    ))}
                </ul>
            </div>
      
    </S.Add>
  )
}

export default Index
