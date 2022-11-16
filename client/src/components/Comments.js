import React from 'react';
import { Link } from 'react-router-dom';

const Comments = ({ comments }) => {
  if (!comments.length) {
    return <h3>No comments Yet</h3>;
  }

  return (
    <div>
      {comments &&
        comments.map(comment => (
          <div key={comment._id} className="card mb-3">
            <p className="card-header pt-4 pb-6">
              <Link
                to={`/profile/${comment.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {comment.username}
              </Link>{' '}
              comments on {comment.createdAt}
            </p>
            <div className="card-body">
              {/* <Link to={`/comments/${comment._id}`}> */}
                <p className="text-gray-200 text-lg">{comment.commentText}</p>
              {/* </Link> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
