import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { QUERY_COMMENTS, QUERY_ME } from "../../src/utils/queries";
import { ADD_COMMENT } from "../utils/mutations";

const CommentsForm = () => {
  const [commentText, setText] = useState("");
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
        console.warn("First comments insertion by user!");
      }

      // update comments array's cache
      const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
      cache.writeQuery({
        query: QUERY_COMMENTS,
        data: { comments: [addComment, ...comments] },
      });
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
        variables: { commentText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

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
          className="w-full bg-gray-200 text-sm p-2 text-gray-500 shadow-lg sm:rounded-lg rounded-xl"
          onChange={handleChange}
        ></textarea>

        <button
          onClick={refreshPage}
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
