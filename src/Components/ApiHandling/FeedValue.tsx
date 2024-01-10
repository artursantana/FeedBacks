// FeedValue.tsx

import React, { useEffect, useState } from 'react';

interface FeedValueProps {
  lastComment: number;
}

const FeedValue: React.FC<FeedValueProps> = ({ lastComment }) => {
  const [dynamicLastComment, setDynamicLastComment] = useState<number>(0);

  useEffect(() => {
    setDynamicLastComment(lastComment);
  }, [lastComment]);

  return (
    <div>
      <p>Feedbacks: {`${dynamicLastComment}`}</p>
    </div>
  );
};

export default FeedValue;
