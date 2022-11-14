// import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import Layout from "../components/Layout/dashboard";
// import Auth from '../utils/auth';
import ReadingList from "../components/ReadingList";

const Profile = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prevCount) => {
      const newCount = Number(prevCount) + 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  useEffect(() => {
    const initialValue = localStorage.getItem("count");
    if (initialValue) setCount(initialValue);
  }, []);

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const defaultOption = options[0];
  const selectedValue = "SelectedValue";
  const [selected, setSelected] = useState([]);
  const handleChange = (s) => {
    localStorage.setItem(selectedValue, JSON.stringify(s));
    setSelected(s);
  };
  React.useEffect(() => {
    const lastSelected = JSON.parse(
      localStorage.getItem(selectedValue) ?? "[]"
    );
    setSelected(lastSelected);
  }, []);

  return (
    <Layout>
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
                <h1 className="text-4xl font-semibold drop-shadow">Username</h1>
                <p className="font-medium text-gray-100">Bob Joe</p>
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
                      // onChange={handleChange}
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
                    <div className="overflow-hidden bg-[#22274f] shadow sm:rounded-md">
                      <ul role="list" className="divide-y divide-gray-700">
                        <li>
                          <a href="#" className="block hover:bg-slate-800">
                            <div className="px-4 py-2 sm:px-6">
                              <div className="flex items-center justify-between">
                                <p className="truncate font-medium">
                                  Book Title
                                </p>
                                <div className="ml-2 flex flex-shrink-0">
                                  <p className="inline-flex rounded-full bg-[#090c26] px-2 text-sm font-semibold leading-5 text-indigo-300">
                                    View
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="p-2"></div>
                    <div className="overflow-hidden bg-[#22274f] shadow sm:rounded-md">
                      <ul role="list" className="divide-y divide-gray-700">
                        <li>
                          <a href="#" className="block hover:bg-slate-800">
                            <div className="px-4 py-2 sm:px-6">
                              <div className="flex items-center justify-between">
                                <p className="truncate font-medium">
                                  Book Title
                                </p>
                                <div className="ml-2 flex flex-shrink-0">
                                  <p className="inline-flex rounded-full bg-[#090c26] px-2 text-sm font-semibold leading-5 text-indigo-300">
                                    View
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="p-2"></div>
                    <div className="overflow-hidden bg-[#22274f] shadow sm:rounded-md">
                      <ul role="list" className="divide-y divide-gray-700">
                        <li>
                          <a href="#" className="block hover:bg-slate-800">
                            <div className="px-4 py-2 sm:px-6">
                              <div className="flex items-center justify-between">
                                <p className="truncate font-medium">
                                  Book Title
                                </p>
                                <div className="ml-2 flex flex-shrink-0">
                                  <p className="inline-flex rounded-full bg-[#090c26] px-2 text-sm font-semibold leading-5 text-indigo-300">
                                    View
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="p-2"></div>
                    <div className="overflow-hidden bg-[#22274f] shadow sm:rounded-md">
                      <ul role="list" className="divide-y divide-gray-700">
                        <li>
                          <a href="#" className="block hover:bg-slate-800">
                            <div className="px-4 py-2 sm:px-6">
                              <div className="flex items-center justify-between">
                                <p className="truncate font-medium">
                                  Book Title
                                </p>
                                <div className="ml-2 flex flex-shrink-0">
                                  <p className="inline-flex rounded-full bg-[#090c26] px-2 text-sm font-semibold leading-5 text-indigo-300">
                                    View
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
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
                <h2 className="text-4xl text-indigo-400 font-medium">
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
            </section>
          </div>

      </main>
    </Layout>
  );
};

export default Profile;
