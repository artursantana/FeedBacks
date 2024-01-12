import { useState, useEffect} from 'react';
import * as S from './style';


const Index = () => {
  const [inputText, setInputText] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [lastCommentId, setLastCommentId] = useState<number | null>(null);
  

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
  };

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
        <textarea placeholder='Write here' onChange={(e) => setInputText(e.target.value)} />
        <button onClick={handleClick} type='submit'>
          Submit
        </button>

        <div>
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment, index) => (
              <div key={index}>
                <div>{comment}</div>
                
              </div>
            ))}
          </ul>
        </div>
      </S.Add>
  );
};

export default Index;
