//import React, { useState } from 'react';
//
//import { useMutation } from '@apollo/client';
//import { ADD_comments } from '../../utils/mutations';
//import { QUERY_commentsS, QUERY_ME } from '../../utils/queries';
//
//const commentsForm = () => {
//  const [commentsText, setText] = useState('');
//  const [characterCount, setCharacterCount] = useState(0);
//
//  const [addcomments, { error }] = useMutation(ADD_comments, {
//    update(cache, { data: { addcomments } }) {
//      
//        // could potentially not exist yet, so wrap in a try/catch
//      try {
//        // update me array's cache
//        const { me } = cache.readQuery({ query: QUERY_ME });
//        cache.writeQuery({
//          query: QUERY_ME,
//          data: { me: { ...me, commentss: [...me.commentss, addcomments] } },
//        });
//      } catch (e) {
//        console.warn("First comments insertion by user!")
//      }
//
//      // update comments array's cache
//      const { commentss } = cache.readQuery({ query: QUERY_commentsS });
//      cache.writeQuery({
//        query: QUERY_commentsS,
//        data: { commentss: [addcomments, ...commentss] },
//      });
//    }
//  });
//
//  // update state based on form input changes
//  const handleChange = (event) => {
//    if (event.target.value.length <= 280) {
//      setText(event.target.value);
//      setCharacterCount(event.target.value.length);
//    }
//  };
//
//  // submit form
//  const handleFormSubmit = async (event) => {
//    event.preventDefault();
//
//    try {
//      await addcomments({
//        variables: { commentsText },
//      });
//
//      // clear form value
//      setText('');
//      setCharacterCount(0);
//    } catch (e) {
//      console.error(e);
//    }
//  };
//
//  return (
//    <div>
//      <p
//        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
//      >
//        Character Count: {characterCount}/280
//        {error && <span className="ml-2">Something went wrong...</span>}
//      </p>
//      <form
//        className="flex-row justify-center justify-space-between-md align-stretch"
//        onSubmit={handleFormSubmit}
//      >
//        <textarea
//          placeholder="Here's a new comments..."
//          value={commentsText}
//          className="form-input col-12 col-md-9"
//          onChange={handleChange}
//        ></textarea>
//        <button className="btn col-12 col-md-3" type="submit">
//          Submit
//        </button>
//      </form>
//    </div>
//  );
//};
//
//export default commentsForm;
