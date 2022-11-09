import React from "react";
import { Link } from "gatsby";
import DashboardLayout from "../components/dashboard-layout";

const Profile = () => {
  return (
    <div>
      <title>Book Nook | Profile</title>
      <header>
        {/* <div
          className="stars-bg bg-fixed bg-repeat-x bg-top absolute top-0 left-0 w-full h-full z-0"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div> */}
      </header>

      <nav>
        <div className="w-[80%] my-8 flex justify-between items-center mx-auto">
          <h1 className="font-light drop-shadow-lg py-4 text-5xl md:text-7xl">
            <Link to="/search" className="text-[#027bce] hover:text-[#03cea4]">
              Book<span className="text-[#03cea4]">Nook</span>
            </Link>
          </h1>
          <ul className="h-full flex items-center list-none z-[5] text-base">
            {/* NAVIGATION LINKS HERE */}
            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900 font-semibold mr-6"
              href="/search"
            >
              Search
            </a>

            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900  font-semibold mr-6"
              href="/profile"
            >
              Profile
            </a>
            <a
              class="bg-gray-100 p-2 rounded-lg hover:text-sky-900  font-semibold mr-6"
              href="#"
            >
              Logout
            </a>
          </ul>
        </div>
      </nav>

      <div class="min-h-full bg-sky-50">
        <main class="py-10">
          <div class="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div class="flex items-center space-x-5">
              <div class="flex-shrink-0">
                <div class="relative">
                  <img
                    class="h-16 w-16 rounded-full"
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
                <h1 class="text-2xl font-bold text-gray-900">Username</h1>
                <p class="text-sm font-medium text-gray-500">Bob Joe</p>
              </div>
            </div>
            <div class="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
              <a href="/editprofile">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                  <svg
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
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p class="pl-2">Edit Account</p>
                </button>
              </a>
            </div>
          </div>

          <div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div class="space-y-6 lg:col-span-2 lg:col-start-1">
              <section>
                <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                  <h2 class="text-center text-sm">
                    Your goal is 10 books read!
                  </h2>{" "}
                  <h2 class="text-center text-sm">You are currently at...</h2>
                  <div class="mt-6 flow-root">
                    <h2 class="animate-pulse text-center text-8xl text-amber-500 font-semibold">
                      7
                    </h2>
                  </div>
                  <div class="justify-center mt-6 flex grid-cols-2">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-md border  bg-sky-100 px-4 py-2 text-sm font-medium text-blue-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                      <svg
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
                          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p class="pl-2">Add to count</p>
                    </button>
                    <div class="p-2"></div>
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-md border bg-white px-4 py-2 text-sm font-medium text-blue-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                      <svg
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
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>

                      <p class="pl-2">Update goal</p>
                    </button>
                  </div>
                </div>
                <div class="py-2"></div>

                <div class="bg-white shadow sm:rounded-lg ">
                  <div class="px-4 py-5 sm:px-6">
                    <h2 className="pb-4 text-4xl font-medium drop-shadow-md">
                      Reading List
                    </h2>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    {" "}
                    <div class="overflow-hidden bg-white shadow sm:rounded-md">
                      <ul role="list" class="divide-y divide-gray-200">
                        <li>
                          <a href="#" class="block hover:bg-gray-50">
                            <div class="px-4 py-4 sm:px-6">
                              <div class="flex items-center justify-between">
                                <p class="truncate text-sm font-medium text-blue-900">
                                  Book Title
                                </p>
                                <div class="ml-2 flex flex-shrink-0">
                                  <p class="inline-flex rounded-full bg-teal-100 px-2 text-sm font-semibold leading-5 text-teal-700">
                                    View
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="p-2"></div>
                    <div class="overflow-hidden bg-white shadow sm:rounded-md">
                      <ul role="list" class="divide-y divide-gray-200">
                        <li>
                          <a href="#" class="block hover:bg-gray-50">
                            <div class="px-4 py-4 sm:px-6">
                              <div class="flex items-center justify-between">
                                <p class="truncate text-sm font-medium text-blue-900">
                                  Book Title
                                </p>
                                <div class="ml-2 flex flex-shrink-0">
                                  <p class="inline-flex rounded-full bg-teal-100 px-2 text-sm font-semibold leading-5 text-teal-700">
                                    View
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="p-2"></div>
                    <div class="overflow-hidden bg-white shadow sm:rounded-md">
                      <ul role="list" class="divide-y divide-gray-200">
                        <li>
                          <a href="#" class="block hover:bg-gray-50">
                            <div class="px-4 py-4 sm:px-6">
                              <div class="flex items-center justify-between">
                                <p class="truncate text-sm font-medium text-blue-900">
                                  Book Title
                                </p>
                                <div class="ml-2 flex flex-shrink-0">
                                  <p class="inline-flex rounded-full bg-teal-100 px-2 text-sm font-semibold leading-5 text-teal-700">
                                    View
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="p-2"></div>
                    <div class="overflow-hidden bg-white shadow sm:rounded-md">
                      <ul role="list" class="divide-y divide-gray-200">
                        <li>
                          <a href="#" class="block hover:bg-gray-50">
                            <div class="px-4 py-4 sm:px-6">
                              <div class="flex items-center justify-between">
                                <p class="truncate text-sm font-medium text-blue-900">
                                  Book Title
                                </p>
                                <div class="ml-2 flex flex-shrink-0">
                                  <p class="inline-flex rounded-full bg-teal-100 px-2 text-sm font-semibold leading-5 text-teal-700">
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
                      class="block bg-gray-50 px-4 py-4 text-center text-sm font-medium hover:text-blue-900 sm:rounded-b-lg"
                    >
                      Add to list
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <section class="lg:col-span-1 lg:col-start-3">
              {/* FRIENDS */}

              <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 class="text-lg font-medium text-gray-900">Friends List</h2>

                <div class="mt-6">
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div class="flex items-center">
                        <div class="h-10 w-10 flex-shrink-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          ></img>
                        </div>
                        <div class="ml-4">
                          <div class="font-medium text-gray-900">
                            Lindsay Walton
                          </div>
                          <div class="text-gray-500">Username</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div class="flex items-center">
                        <div class="h-10 w-10 flex-shrink-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          ></img>
                        </div>
                        <div class="ml-4">
                          <div class="font-medium text-gray-900">
                            Lindsay Walton
                          </div>
                          <div class="text-gray-500">Username</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div class="flex items-center">
                        <div class="h-10 w-10 flex-shrink-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          ></img>
                        </div>
                        <div class="ml-4">
                          <div class="font-medium text-gray-900">
                            Lindsay Walton
                          </div>
                          <div class="text-gray-500">Username</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </div>
                <div class="justify-stretch mt-6 flex flex-col">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  >
                    ADD FRIENDS
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
export default Profile;
