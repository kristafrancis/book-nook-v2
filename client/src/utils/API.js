//route for user info - token needed
export const queryMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

//createUser
export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(userData),
    });
};


//login user
export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};
     

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

