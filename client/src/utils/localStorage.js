export const getSavedBookIds = () => {
    const savedIds = localStorage.getItem('books_saved')
    ? JSON.parse(localStorage.getItem('books_saved'))
    : [];

    return savedIds;
};

export const saveBookIds = (bookIdArr) => {
    if (bookIdArr.length) {
        localStorage.setItem('books_saved', JSON.stringify(bookIdArr));
    } else {
        localStorage.removeItem('books_saved');
    }
};

export const removeBookId = (bookId) => {
    const savedIds = localStorage.getItem('books_saved')
    ? JSON.parse(localStorage.getItem('books_saved'))
    : null;

    if (!savedIds) {
        return false;
    }

    const updatedSavedIds = savedIds?.filter((savedId) => savedId !== bookId);
    localStorage.setItem('books_saved', JSON.stringify(updatedSavedIds));

    return true;
}
