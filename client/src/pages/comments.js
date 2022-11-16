//import React from 'react';
//import { useParams } from 'react-router-dom';
//
//
//import Auth from '../utils/auth';
//import { useQuery } from '@apollo/client';
//import { QUERY_COMMENTS } from '../utils/queries';
//
//const comments = (props) => {
//  const { id: commentsId } = useParams();
//
//  const { loading, data } = useQuery(QUERY_COMMENTS, {
//    variables: { id: commentsId },
//  });
//
//  const comments = data?.comments || {};
//
//  if (loading) {
//    return <div>Loading...</div>;
//  }
//
//  return (
//    <div>
//      <div className="card mb-3">
//        <p className="card-header">
//          <span style={{ fontWeight: 700 }} className="text-light">
//            {comments.username}
//          </span>{' '}
//          comments on {comments.createdAt}
//        </p>
//        <div className="card-body">
//          <p>{comments.commentsText}</p>
//        </div>
//      </div>
//
//      {comments.reactionCount > 0 && (
//        <ReactionList reactions={comments.reactions} />
//      )}
//
//      {Auth.loggedIn() && <ReactionForm commentsId={comments._id} />}
//    </div>
//  );
//};
//
//export default comments;
