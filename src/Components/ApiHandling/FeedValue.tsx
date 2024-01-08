


interface FeedValueProps {
    lastCommentId: number | null;
  }

const FeedValue: React.FC<FeedValueProps> = ({ lastCommentId }) => {
  return (
    <div>
      <p> feedbacks {lastCommentId}</p>
    </div>
  );
};

export default FeedValue;
