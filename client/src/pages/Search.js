import React, { useEffect, useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import Layout from "../components/Layout/dashboard";
import { googleBookSearch } from "../utils/API";
import Auth from "../utils/auth";
import { SAVE_BOOK } from "../utils/mutations";
import { saveBookIds, getSavedBookIds } from "../utils/localStorage";
import { useMutation } from "@apollo/client";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StarsImg from '../images/stars.png';

const Search = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());
  const [saveBook] = useMutation(SAVE_BOOK);

  const posts = [
    {
      title: "Adorable",
      href: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl:
        "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      author: {
        name: "Roel Aufderehar",
        href: "#",
        imageUrl:
          "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
    },
    {
      title: "My kid reads this everyday!",
      href: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl:
        "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      author: {
        name: "Brenna Goyette",
        href: "#",
        imageUrl:
          "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
    },
    {
      title: "Love this book!",
      href: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
    },
  ];

  // const style2 = useSpring({
  //   from: { opacity: 0, marginBottom: -1000 },
  //   to: { opacity: 1, marginBottom: 0 },
  //   config: { duration: 3000 },
  // });

  const style1 = useSpring({
    from: { opacity: 0, marginTop: 0 },
    to: { opacity: 1, marginTop: 0 },
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

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

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
          <animated.div style={style1}>
            <h2 className="text-4xl text-indigo-400 font-medium italic drop-shadow-md">
              Travel to the stars, read!
            </h2>
          </animated.div>

          {/* SEARCH INPUT */}
          <div className="py-5">
            <form className="search w-[500px]" onSubmit={handleFormSubmit}>
              <label for="search" className="sr-only">
                Search
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-300"
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
                  name="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  className="block w-full rounded-md  bg-[#22274f] border border-slate-700 text-gray-200 placeholder-slate-500 mt-2 mb-4 py-2 pl-10 pr-3 text-sm focus:border-indigo-500 focus:text-gray-200 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-2xl"
                  placeholder="Search"
                ></input>
              </div>
            </form>

            {/* END SEARCH INPUT */}

            <AnchorLink className="flex justify-center" href="#Trending">
              Or see what others are reading!
            </AnchorLink>
          </div>
          
          {/* LAYOUT BREAK - HORIZONTAL LINE */}
          <div className="w-1/3 my-4 inline-flex justify-center items-center">
            <img src={StarsImg} />
            <img src={StarsImg} />
          </div>
        </div>

        {/* GOOGLE BOOKS API */}

        <div class="w-[90%] h-full mx-auto columns-2">
          <div class="bookcard">
            {searchedBooks.map((book) => {
              return (
                <div className="m-6" key={book.bookId}>
                  <div
                    class="cardBody"
                    className="w-full grid grid-cols-1 md:grid-cols-none md:grid-flow-col md:auto-cols-auto bg-slate-900 p-6 rounded-lg shadow-inner shadow-slate-700"
                  >
                    <div>
                    {book.image ? (
                      <img
                        className="p-4"
                        src={book.image}
                        alt={`Cover of ${book.title}`}
                      ></img>
                    ) : null}
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium">{book.title}</h3>
                      <em className="pb-8 text-gray-400">{book.authors}</em>
                      <p className="line-clamp-5 leading-normal">{book.description}</p>

                      {/* SAVE BOOK BUTTON */}
                      <div className="mt-4 flex items-center justify-end">
                    {/* {Auth.loggedIn() && ( */}
                      <button
                        className="rounded-md border border-indigo-300 bg-[#22274f] px-4 py-2 text-sm font-medium shadow-md"
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* END GOOGLE BOOKS API */}

        <div id="Trending"></div>
        <div className="relative bg-transparent px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24 pb-10">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-transparent sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trending
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="flex flex-1 flex-col justify-between bg-slate-900 p-6">
                    <div className="flex-1">
                      <div className="flex-shrink-0">
                        <img
                          className="float-left pr-5"
                          src={post.imageUrl}
                          alt=""
                        />
                      </div>
                      <a href={post.href} className="mt-2 block">
                        <p className="text-xl font-semibold">{post.title}</p>
                        <p className="mt-3 text-base text-white">
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={post.author.href}>
                          <span className="sr-only">{post.author.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          <a
                            href={post.author.href}
                            className="hover:underline"
                          >
                            {post.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm">
                          <time dateTime={post.datetime}>{post.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
