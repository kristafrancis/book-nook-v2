// import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useParams, Navigate, useRouteLoaderData } from "react-router-dom";
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useParams, Navigate } from "react-router-dom";
>>>>>>> d88159356233713ff08edd82cfa8ef59f54f6061
import Dropdown from "react-dropdown";
import Auth from '../utils/auth';
import ReadingList from "../components/ReadingList";
import { useMutation, useQuery} from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { removeBookId } from "../utils/localStorage";
import { REMOVE_BOOK } from "../utils/mutations";

const Profile = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const increase = () => {
    setCount((prevCount) => {
      const newCount = Number(prevCount) + 1;
      sessionStorage.setItem("count", newCount);
      return newCount;
    });
  };
  const { loading, data } = useQuery(QUERY_ME);
  console.log(data);
  const userData = data?.me || {};
  useEffect(() => {
    const initialValue = sessionStorage.getItem("count");
    if (initialValue) setCount(initialValue);
  }, []);

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const defaultOption = options[0];
  const selectedValue = "SelectedValue";
  const [selected, setSelected] = useState([]);
  const handleChange = (s) => {
    sessionStorage.setItem(selectedValue, JSON.stringify(s));
    setSelected(s);
  };
  React.useEffect(() => {
    const lastSelected = JSON.parse(
      sessionStorage.getItem(selectedValue) ?? "[]"
    );
    setSelected(lastSelected);
  }, []);


  

 

  const [deleteBook] = useMutation(REMOVE_BOOK);
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      await deleteBook({
        variables: {bookId}
      });

      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <main class="min-h-full">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div class="flex items-center space-x-5">
            <div class="flex-shrink-0">
              <div class="relative">
                <img
                  class="h-24 w-24 rounded-full"
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  alt=""
                ></img>{" "}
                <span
                  class="absolute inset-0 rounded-full shadow-inner"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-semibold drop-shadow">{userData.username}</h1>
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
                    className="w-[60px] text-yellow-100 text-lg font-semibold ml-3 py-2 rounded-sm mr-4 border border-slate-600"
                    options={options}
                    onChange={handleChange}
                    value={defaultOption}
                    isMulti
                    placeholder="Select an option"
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
                      onClick={() => setCount(0)}
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
                            <a href="#" className="block hover:bg-slate-800">
                              <div className="px-4 py-2 sm:px-6">
                                <div className="flex items-center justify-between">
                                  <p className="truncate font-medium">
                                    {book.title}
                                  </p>
                                  <div className="ml-2 flex flex-shrink-0">
                                    <button className="inline-flex rounded-full hover:text-slate-900 bg-emerald-800 text-emerald-300 px-2 text-sm hover:font-semibold leading-5">
                                      View
                                    </button>
                                    <div class="px-2"></div>
                                    <button className="inline-flex rounded-full hover:text-slate-900 bg-rose-900 text-rose-300 px-2 text-sm hover:font-semibold leading-5>"
                                    onClick={()=> handleDeleteBook(book.bookId)}>
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
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
              <h2 className="text-4xl text-indigo-300 font-medium">
                Friends List
              </h2>

              <div className="mt-6">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        ></img>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">Lindsay Walton</div>
                        <div className="text-[#6bfbce]">Username</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        ></img>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">Lindsay Walton</div>
                        <div className="text-[#6bfbce]">Username</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        ></img>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">Lindsay Walton</div>
                        <div className="text-[#6bfbce]">Username</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </div>
              <div className="justify-stretch mt-6 flex flex-col">
                <button
                  type="button"
                  className="cursor-pointer inline-flex items-center justify-center rounded-md border border-indigo-200 px-4 py-2 text-sm font-medium text-indigo-200 shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  ADD FRIENDS
                </button>
              </div>
            </div>

            <div className="p-10"></div>
            <div className="bg-slate-900 pb-5 pt-3 shadow-lg sm:rounded-lg sm:px-6">
              <h2 className="text-1xl text-center text-indigo-300 font-medium">
                Stay in touch!
              </h2>

              <div className="columns-2 flex justify-center gap-4 mt-2">
                <tr>
                  <a
                    className="bg-[#22274f] rounded-lg px-2 hover:opacity-50 ease-in duration-300"
                    href="https://www.instagram.com/thebooknookproject/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                    <td>
                      <div className="flex items-center">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          // class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                          />
                        </svg> */}

                        <div className="ml-2 text-center">
                          <div className="font-medium">Instagram</div>
                        </div>
                      </div>
                    </td>
                  </a>
                </tr>

                <tr>
                  <a
                    className="bg-[#22274f] rounded-lg px-2 hover:opacity-50 ease-in duration-300"
                    href="mailto:traveltothestars.booknook@gmail.com"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <td>
                      <div className="flex items-center">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                          />
                        </svg> */}

                        <div className="ml-2">
                          <div className="font-medium">Email</div>
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
