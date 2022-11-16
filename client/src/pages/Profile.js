import React, { useState, useEffect, Fragment } from "react";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";
import { Menu, Transition } from "@headlessui/react";
import { useParams, Navigate } from "react-router-dom";
// mongoose, auth, graphql
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
import { ADD_FRIEND, REMOVE_BOOK } from "../utils/mutations";
import { removeBookId } from "../utils/localStorage";
// import components
import FriendList from "../components/FriendList";
import RatingStars from "../components/RatingStars";
import Comments from "../components/Comments";
import CommentsForm from "../components/CommentsForm";
//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = () => {
  // retrieve user information
  const [addFriend] = useMutation(ADD_FRIEND);
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const userData = data?.me || data?.user || {};

  // const { data: userData } = useQuery(QUERY_ME);
  const comments = data?.comments || [];
  // const loggedIn = Auth.loggedIn();

  // book counter
  const [count, setCount] = useState(0);
  console.log(count);
  const increase = () => {
    setCount((prevCount) => {
      const newCount = Number(prevCount) + 1;
      sessionStorage.setItem("count", newCount);
      return newCount;
    });
  };

  useEffect(() => {
    const initialValue = sessionStorage.getItem("count");
    if (initialValue) setCount(initialValue);
  }, []);

  // dropdown menu
  const options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const defaultOption = options[0];
  const selectedValue = "SelectedValue";
  const [selected, setSelected] = useState([]);
  const handleChange = (s) => {
    sessionStorage.setItem(selectedValue, JSON.stringify(s));
    setSelected(s);
  };
  const handleReset = () => {
    sessionStorage.setItem("count", 0);

    setCount(0);
    console.log(count);
  };
  React.useEffect(() => {
    const lastSelected = JSON.parse(
      sessionStorage.getItem(selectedValue) ?? "[]"
    );
    setSelected(lastSelected);
  }, []);

  // remove book functionality
  const [deleteBook] = useMutation(REMOVE_BOOK);
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      await deleteBook({
        variables: { bookId },
      });

      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // add friend functionality
  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: userData._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  // redirect user to profile if logged in
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData?.username) {
    return (
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h3 className="text-5xl mb-8">Oops!</h3>
        <div className="max-w-screen-sm bg-slate-900 p-6 rounded-lg shadow-lg">
          You need to be logged in to see this page.
          <br />
          Use the navigation links above to sign up or log in!
        </div>
      </div>
    );
  }

  return (
    <>
      <main class="min-h-full">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div class="flex items-center space-x-5">
            <div class="flex-shrink-0">
              <div class="relative">
                <img
                  class="h-24 w-24 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  alt=""
                ></img>{" "}
                <span
                  class="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-semibold drop-shadow">
                {userData.username}
              </h1>
              <p className="font-medium text-gray-100">{userData.username}</p>
            </div>
          </div>
          <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
            <a href="/editprofile">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-indigo-200 bg-[#22274f] px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="pl-2">Edit Account</p>
              </button>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2 lg:col-start-1">
            <section>
              <div className="bg-slate-900 px-4 py-5 shadow-lg sm:rounded-lg sm:px-6">
                <div className="text-center pb-8 font-['poppins'] text-2xl font-medium text-indigo-400 inline-flex w-full justify-center items-center">
                  Your goal is
                  <Dropdown
                    className="w-[60px] bg-slate-700 mx-4"
                    options={options}
                    onChange={handleChange}
                    value={selected?.value}
                    isMulti
                    placeholder="0"
                  />
                  books read!
                </div>

                <p className="text-center text-xlfont-medium">
                  You are currently at...
                </p>
                <section>
                  <div className="mt-6 flow-root">
                    <h2 className="animate-pulse text-center text-8xl text-yellow-200 font-semibold">
                      {count}
                    </h2>
                  </div>
                  <div className="justify-center mt-6 flex grid-cols-2">
                    <button
                      type="button"
                      onClick={increase}
                      value={count}
                      className="cursor-pointer inline-flex items-center justify-center rounded-md border bg-[#22274f] px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="pl-2">Add to count</p>
                    </button>
                    <div className="p-2"></div>
                    <button
                      type="button"
                      onClick={handleReset}
                      disabled={count === 0}
                      className="cursor-pointer inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>

                      <p className="pl-2">Reset</p>
                    </button>
                  </div>
                </section>
              </div>
              <div className="py-2"></div>

              <div className="mt-8 px-4 sm:px-6">
                <h2 className="text-4xl text-indigo-300 font-medium drop-shadow">
                  Reading List
                </h2>
              </div>
              <div className="bg-slate-900 shadow-lg sm:rounded-lg mt-8">
                <div className="px-4 py-5 sm:px-6">
                  {" "}
                  {data?.me?.savedBooks?.map((book) => (
                    <>
                      <div className="overflow-hidden bg-[#22274f] shadow sm:rounded-md">
                        <ul role="list" className="divide-y divide-gray-700">
                          <li>
                            <div className="block hover:bg-slate-800">
                              <div className="px-4 py-2 sm:px-6">
                                <div className="flex items-center justify-between">
                                  <p className="truncate font-medium">
                                    {book.title}
                                  </p>
                                  <div>
                                    <RatingStars />
                                  </div>
                                  <div className="ml-2 flex flex-shrink-0">
                                    <button
                                      className="inline-flex rounded-full hover:text-slate-900 bg-rose-900 text-rose-300 px-2 text-sm hover:font-semibold leading-5>"
                                      onClick={() =>
                                        handleDeleteBook(book.bookId)
                                      }
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="p-2"></div>
                      <div className="overflow-hidden bg-slate-800 shadow sm:rounded-md">
                        <ul role="list" className="divide-y divide-gray-700">
                          <li>
                            <div className="px-4 py-2 sm:px-6 flex items-center justify-between ml-2 flex-shrink-0 text-sm text-gray-400">
                              <Comments comments={userData.comments} />
                            </div>
                            <div className="px-8 pb-5">
                              <CommentsForm />
                            </div>
                          </li>
                        </ul>
                      </div>

                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          {/* <Menu.Button className="cursor-pointer inline-flex items-center justify-center rounded-md border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">
														Comment
													</Menu.Button> */}
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="rounded-xl absolute left-0 z-10 mt-2 w-56 origin-top-right bg-slate-700 p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <textarea
                                    id="message"
                                    className={classNames(
                                      active
                                        ? "bg-slate-900 text-gray-100"
                                        : "text-gray-100",
                                      "block px-4 text-sm bg-slate-900"
                                    )}
                                  >
                                    Write your comment here
                                  </textarea>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <div className="pt-2">
                                    <a
                                      href
                                      className={classNames(
                                        active
                                          ? "bg-slate-900 cursor-pointer inline-flex items-center justify-center rounded-md border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                          : "bg-slate-900 cursor-pointer inline-flex items-center justify-center rounded-md border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100",
                                        "bg-slate-900 cursor-pointer inline-flex items-center justify-center rounded-md border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                                      )}
                                    >
                                      Submit your comment
                                    </a>
                                  </div>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <div className="p-2"></div>
                    </>
                  ))}
                  <a
                    href="/search"
                    className="cursor-pointer block bg-[#090c26] hover:bg-slate-800 px-4 py-4 text-center font-medium sm:rounded-b-lg"
                  >
                    Add to list
                  </a>
                </div>
              </div>
            </section>
          </div>

          <section className="lg:col-span-1 lg:col-start-3">
            {/* FRIENDS */}
            <div className="bg-slate-900 px-4 py-5 shadow-lg sm:rounded-lg sm:px-6">
              <h2 className="text-4xl text-indigo-300 font-medium pb-4">
                Friends List
              </h2>

              <FriendList
                username={userData.username}
                friendCount={userData.friendCount}
                friends={userData.friends}
              />

              <div className="justify-stretch mt-6 flex flex-col">
                {/* {userParam && ( */}
                <button
                  onClick={handleClick}
                  type="button"
                  className="cursor-pointer inline-flex items-center justify-center rounded-md border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  ADD FRIENDS
                </button>
                {/* )} */}
              </div>
            </div>

            <div className="bg-slate-900 mt-8 pb-5 pt-3 shadow-lg sm:rounded-lg sm:px-6">
              <h2 className="text-2xl tracking-widest text-center text-indigo-300 font-medium">
                Stay in touch!
              </h2>

              <div className="columns-2 flex justify-center gap-4 mt-4">
                <tr>
                  <a
                    className="bg-[#22274f] hover:bg-slate-700 rounded-md border border-indigo-200 py-2 px-4 text-base"
                    href="https://www.instagram.com/thebooknookproject/"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "a4b4fc" }}
                    />
                    <td>
                      <div className="flex items-center ml-2 text-center">
                        <div className="text-indigo-200 font-normal uppercase tracking-widest">
                          Instagram
                        </div>
                      </div>
                    </td>
                  </a>
                </tr>

                <tr>
                  <a
                    className="bg-[#22274f] hover:bg-slate-700 rounded-md border border-indigo-200 py-2 px-4 text-base"
                    href="mailto:traveltothestars.booknook@gmail.com"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "a4b4fc" }}
                    />
                    <td>
                      <div className="flex items-center ml-2 text-center">
                        <div className="text-indigo-200 font-normal uppercase tracking-widest">
                          Email
                        </div>
                      </div>
                    </td>
                  </a>
                </tr>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Profile;
