import React, { useEffect, useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";

// import components
import Layout from "../components/Layout/dashboard";
import Feed from "../components/feed";
import HedgehogImg from "../images/animals/hedgehog.png";
import { googleBookSearch } from "../utils/API";
import Auth from "../utils/auth";
import { SAVE_BOOK } from "../utils/mutations";
import { saveBookIds, getSavedBookIds } from "../utils/localStorage";
import { useMutation } from '@apollo/client';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Search = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

  const [saveBook] = useMutation(SAVE_BOOK);

  const style2 = useSpring({
    from: { opacity: 0, marginRight: -1000 },
    to: { opacity: 1, marginRight: 0 },
    config: { duration: 3000 },
  });

  const style3 = useSpring({
    from: { opacity: 0, marginLeft: -1000 },
    to: { opacity: 1, marginLeft: 0 },
    config: { duration: 3000 },
  });

  useEffect(() => {
    return () => saveBookIds(savedBookIds);
  });

  //search books method and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await googleBookSearch(searchInput);

      if (!response.ok) {
        throw new Error("Something went Wrong!");
      }
      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ["No author to display"],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || "",
      }));

      setSearchedBooks(bookData);
      setSearchInput("");
    } catch (err) {
      console.err(err);
    }
  };

  //function to save book to db
  const handleSavedBook = async (bookId) => {
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
    console.log({ bookToSave });

    //token
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    try {
      await saveBook({
        variables: { BookInput: { ...bookToSave } },
      });

      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Layout pageTitle="Search">
        <div className="w-[85%] h-auto mx-auto flex flex-col justify-center items-center">
          <animated.div style={style2}>
            <div className="flex flex-col justify-center items-center py-4">
              <img src={HedgehogImg} className="w-[250px]" />
            </div>
          </animated.div>
          <animated.div style={style3}>
            <h2 className="text-indigo-400 text-4xl font-medium italic drop-shadow-md">
              Travel to the stars, read!
            </h2>
          </animated.div>
          {/* SEARCH INPUT */}
          <div class="w-full drop-shadow-md py-8">
            <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
              <div class="relative flex h-16 justify-between">
                <div class="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                  <div class="w-full sm:max-w-xs">
                    <form class="search" onSubmit={handleFormSubmit}>
                      <label for="search" class="sr-only">
                        Search
                      </label>
                      <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            class="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          id="search"
                          name="search"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                          class="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-teal-400 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-400 sm:text-2xl"
                          placeholder="Search"
                          type="text"
                        ></input>
                      </div>
                      </form>
                      <AnchorLink class="flex justify-center" href="#Trending">Or see what others are reading!</AnchorLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        {/* END SEARCH INPUT */}

        {/* GOOGLE BOOKS API */}
        <div class="bookcard">
          {searchedBooks.map((book) => {
            return (
              <div key={book.bookId}>
                {book.image ? (
                  <img src={book.image} alt={`Cover of ${book.title}`}></img>
                ) : null}
                <div class="cardBody">
                  <h1>{book.title}</h1>
                  <p> Authors: {book.authors}</p>
                  <p>Description: {book.description}</p>
                  {/* {Auth.loggedIn() && ( */}
                  <button
                    class="btn md:btn-lg"
                    disabled={savedBookIds?.some(
                      (savedBookId) => savedBookId === book.bookId
                    )}
                    onClick={() => handleSavedBook(book.bookId)}
                  >
                    {savedBookIds?.some(
                      (savedBookId) => savedBookId === book.bookId
                    )
                      ? "This book has already been saved"
                      : "Save this book"}
                  </button>

                  {/* )} */}
                </div>
              </div>
            );
          })}
        </div>
        {/* END GOOGLE BOOKS API */}

        <Feed />
      </Layout>
    </>
  );
};

export default Search;
