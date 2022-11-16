import React from "react";
import { Link } from "react-router-dom";

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return <p class="friendmessage">{username}, make some friends! </p>;
  }

  return (
    <div>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? "friend" : "friends"}
      </h5>
      {friends.map((friend) => (
        <button
          className="cursor-pointer bg-slate-800 inline-flex items-center justify-center rounded-md border border-indigo-200 mx-2 px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          key={friend._id}
        >
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;
