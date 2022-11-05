//route for user info - token needed

//queryMe


//createUser



//login user


//saveBook - //need to figure out book data 
export const saveBook = () => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json', 
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify()
    });
};

//deleteBook
export const deleteBook = (bookId, token) => {
    return fetch(`/api/users/books/${bookId}`, {
        method: 'DELETE', 
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};

//googlebookapi
export const googleBookSearch = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

