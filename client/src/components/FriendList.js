import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ username, friends }) => {
    if (!friends || !friends.length) {
        return <p class="friendmessage"> {username}, make some friends! </p>;
    
    }


};