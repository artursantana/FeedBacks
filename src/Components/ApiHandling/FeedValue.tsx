const FeedValue = () => {
  let comments = localStorage.getItem('comments');
  console.log(comments)
  let numberOfComments = 0;

  if (comments == undefined || comments == null) {
    comments = '0';
  } else {
    numberOfComments = JSON.parse(comments).length;
  }

  return (
    <div>
      <p>Feedbacks: {`${numberOfComments}`}</p>
    </div>
  );
};

export default FeedValue;
