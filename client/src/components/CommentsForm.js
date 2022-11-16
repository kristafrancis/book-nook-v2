import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { QUERY_COMMENTS, QUERY_ME } from '../../src/utils/queries';
import { ADD_COMMENT } from '../utils/mutations';

const CommentsForm = () => {
 const [commentText, setText] = useState('');
 const [characterCount, setCharacterCount] = useState(0);

 const [addComment, { error }] = useMutation(ADD_COMMENT, {
   update(cache, { data: { addComment } }) {
     
       // could potentially not exist yet, so wrap in a try/catch
     try {
       // update me array's cache
       const { me } = cache.readQuery({ query: QUERY_ME });
       cache.writeQuery({
         query: QUERY_ME,
         data: { me: { ...me, comments: [...me.comments, addComment] } },
       });
     } catch (e) {
       console.warn("First comments insertion by user!")
     }

     // update comments array's cache
     const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
     cache.writeQuery({
       query: QUERY_COMMENTS,
       data: { comments: [addComment, ...comments] },
     });
   }
 });

 // update state based on form input changes
 const handleChange = (event) => {
   if (event.target.value.length <= 280) {
     setText(event.target.value);
     setCharacterCount(event.target.value.length);
   }
 };

 // submit form
 const handleFormSubmit = async (event) => {
   event.preventDefault();

   try {
     await addComment({
       variables: { commentText },
     });

     // clear form value
     setText('');
     setCharacterCount(0);
   } catch (e) {
     console.error(e);
   }
 };

 return (
   <div>
     <p
       className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
     >
       Character Count: {characterCount}/280
       {error && <span className="ml-2">Something went wrong...</span>}
     </p>
     <form
       className="flex-row justify-center justify-space-between-md align-stretch"
       onSubmit={handleFormSubmit}
     >
       <textarea
         placeholder="Here's a new comments..."
         value={commentText}
         className="form-input col-12 col-md-9"
         onChange={handleChange}
       ></textarea>
       <button className="btn col-12 col-md-3" type="submit">
         Submit
       </button>
     </form>
   </div>
 );
};

export default CommentsForm;
