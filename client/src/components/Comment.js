import React from 'react';
import { Link } from 'react-router-dom';

const Comments = ({ comments }) => {

  return (
    <div>
      {comments &&
        comments.map(comment => (
          <div key={comment._id} className="card mb-3">
            <p className="card-header">
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
              <Link to={`/comments/${comment._id}`}>
                <p>{comment.commentText}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comments;
