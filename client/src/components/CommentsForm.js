import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { QUERY_COMMENTS, QUERY_ME } from "../../src/utils/queries";
import { ADD_COMMENT } from "../utils/mutations";

const CommentsForm = ({book_id}) => {
  const [commentText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT, {
    update(cache, { data: { addComment } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        console.log(addComment);
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, comments: [...(me?.comments || []), addComment] } },
        });
      } catch (e) {
        console.warn("First comments insertion by user!");
      }

      // update comments array's cache
      try {
      const commentData = cache.readQuery({ query: QUERY_COMMENTS });
      const comments = commentData?.comments || []
      console.log(commentData);
      // const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
      cache.writeQuery({
        query: QUERY_COMMENTS,
        data: { comments: [addComment, ...(comments.length ? comments: [])] },
      });
    } catch (e) {
      console.log(e);
    }
    },
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
        variables: { commentText, book_id },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <div>
      <p
        className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}
      >
        {error && (
          <span className="ml-2 text-sm text-rose-300">
            Something went wrong...
          </span>
        )}
      </p>
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Type your comment here!"
          value={commentText}
          className="w-full bg-slate-900 text-sm p-4 text-gray-200 border border-gray-600 shadow-lg sm:rounded-lg rounded-xl"
          onChange={handleChange}
        ></textarea>

        <button
          className="cursor-pointer bg-slate-800 inline-flex items-center justify-center rounded-md border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-10"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentsForm;
