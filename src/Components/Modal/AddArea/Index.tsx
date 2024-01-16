import React, { useState, useEffect } from 'react';
import * as S from './style';

interface Comment {
  id: number;
  text: string;
}

const Index: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleClick = () => {
    if (inputText !== '') {
      const storedComments = localStorage.getItem(`comments`);
      let existingComments: Comment[] = [];

      if (storedComments) {
        existingComments = JSON.parse(storedComments);
      }

      const newComments: Comment[] = [
        ...existingComments,
        { id: Date.now(), text: inputText.trim() },
      ];

      setComments(newComments);
      localStorage.setItem(`comments`, JSON.stringify(newComments));
      setInputText('');
    }
  };

  useEffect(() => {
    const storedComments = localStorage.getItem(`comments`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  return (
    <S.Add>
      <textarea
        placeholder="Write here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleClick} type="submit">
        Submit
      </button>

      <div>
        <h3>Comments:</h3>
        <ul>
          {comments.map((comment) => (
            <div key={comment.id}>
              <div>{comment.text}</div>
            </div>
          ))}
        </ul>
      </div>
    </S.Add>
  );
};

export default Index;
