import React from "react";
import { Link } from "gatsby";
import bgImg from "../images/bg.png";
import Footer from "../components/footer";

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
            <Link
              to="/dashboard"
              className="text-[#027bce] hover:text-[#03cea4]"
            >
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
              href="/dashboard"
            >
              Dashboard
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

      <div class="min-h-full">
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
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                ADD TO READING LIST
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md border border-transparent bg-[#027bce] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                EDIT GOAL
              </button>
            </div>
          </div>

          <div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div class="space-y-6 lg:col-span-2 lg:col-start-1">
              <section>
                <div class="bg-white shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:px-6">
                    <h2 class="text-lg font-medium leading-6 text-gray-900">
                      Reading List
                    </h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      Your personal picks for future reads.
                    </p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    {" "}
                    <p>Stuff goes here</p>
                  </div>
                  <div>
                    <a
                      href="/dashboard"
                      class="block bg-gray-50 px-4 py-4 text-center text-sm font-medium hover:text-blue-900 sm:rounded-b-lg"
                    >
                      Add to list
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <div class="bg-white shadow sm:overflow-hidden sm:rounded-lg">
                  <div class="divide-y divide-gray-200">
                    <div class="px-4 py-5 sm:px-6">
                      <h2 class="text-lg font-medium text-gray-900">
                        Friends Activity
                      </h2>
                    </div>
                    <div class="px-4 py-6 sm:px-6">
                      <ul role="list" class="space-y-8">
                        <li>
                          <div class="flex space-x-3">
                            <div class="flex-shrink-0">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              ></img>{" "}
                            </div>
                            <div>
                              <div class="text-sm">
                                <a href="#" class="font-medium text-gray-900">
                                  Leslie Alexander
                                </a>
                              </div>
                              <div class="mt-1 text-sm text-gray-700">
                                <p>
                                  Ducimus quas delectus ad maxime totam
                                  doloribus reiciendis ex. Tempore dolorem
                                  maiores. Similique voluptatibus tempore non
                                  ut.
                                </p>
                              </div>
                              <div class="mt-2 space-x-2 text-sm">
                                <span class="font-medium text-gray-500">
                                  4d ago
                                </span>
                                <span class="font-medium text-gray-500">
                                  &middot;
                                </span>
                                <button
                                  type="button"
                                  class="font-medium text-gray-900"
                                >
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="flex space-x-3">
                            <div class="flex-shrink-0">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              ></img>
                            </div>
                            <div>
                              <div class="text-sm">
                                <a href="#" class="font-medium text-gray-900">
                                  Michael Foster
                                </a>
                              </div>
                              <div class="mt-1 text-sm text-gray-700">
                                <p>
                                  Et ut autem. Voluptatem eum dolores sint
                                  necessitatibus quos. Quis eum qui dolorem
                                  accusantium voluptas voluptatem ipsum. Quo
                                  facere iusto quia accusamus veniam id
                                  explicabo et aut.
                                </p>
                              </div>
                              <div class="mt-2 space-x-2 text-sm">
                                <span class="font-medium text-gray-500">
                                  4d ago
                                </span>
                                <span class="font-medium text-gray-500">
                                  &middot;
                                </span>
                                <button
                                  type="button"
                                  class="font-medium text-gray-900"
                                >
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="flex space-x-3">
                            <div class="flex-shrink-0">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              ></img>{" "}
                            </div>
                            <div>
                              <div class="text-sm">
                                <a href="#" class="font-medium text-gray-900">
                                  Dries Vincent
                                </a>
                              </div>
                              <div class="mt-1 text-sm text-gray-700">
                                <p>
                                  Expedita consequatur sit ea voluptas quo ipsam
                                  recusandae. Ab sint et voluptatem repudiandae
                                  voluptatem et eveniet. Nihil quas consequatur
                                  autem. Perferendis rerum et.
                                </p>
                              </div>
                              <div class="mt-2 space-x-2 text-sm">
                                <span class="font-medium text-gray-500">
                                  4d ago
                                </span>
                                <span class="font-medium text-gray-500">
                                  &middot;
                                </span>
                                <button
                                  type="button"
                                  class="font-medium text-gray-900"
                                >
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section class="lg:col-span-1 lg:col-start-3">
              <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 class="text-lg font-medium text-gray-900">Reading Goal</h2>

                <div class="mt-6 flow-root">
                  <ul role="list" class="-mb-8">
                    <li>
                      <div class="relative pb-8">
                        <span
                          class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div class="relative flex space-x-3">
                          <div>
                            <span class="h-8 w-8 rounded-full bg-teal-400 text-white flex items-center justify-center ring-8 ring-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                ng
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p class="text-sm text-gray-500">Read Book 1</p>
                            </div>
                            <div class="whitespace-nowrap text-right text-sm text-gray-500">
                              <time datetime="2020-09-20">Sep 20</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="relative pb-8">
                        <span
                          class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div class="relative flex space-x-3">
                          <div>
                            <span class="h-8 w-8 rounded-full bg-teal-400 text-white flex items-center justify-center ring-8 ring-white">
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
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p class="text-sm text-gray-500">Read Book 2</p>
                            </div>
                            <div class="whitespace-nowrap text-right text-sm text-gray-500">
                              <time datetime="2020-09-22">Sep 22</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="relative pb-8">
                        <span
                          class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div class="relative flex space-x-3">
                          <div>
                            <span class="h-8 w-8 rounded-full bg-teal-400 text-white flex items-center justify-center ring-8 ring-white">
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
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p class="text-sm text-gray-500">Read Book 3</p>
                            </div>
                            <div class="whitespace-nowrap text-right text-sm text-gray-500">
                              <time datetime="2020-09-28">Sep 28</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="relative pb-8">
                        <span
                          class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                        <div class="relative flex space-x-3">
                          <div>
                            <span class="h-8 w-8 rounded-full bg-teal-400 text-white flex items-center justify-center ring-8 ring-white">
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
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p class="text-sm text-gray-500">Read Book 4</p>
                            </div>
                            <div class="whitespace-nowrap text-right text-sm text-gray-500">
                              <time datetime="2020-09-30">Sep 30</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="relative pb-8">
                        <div class="relative flex space-x-3">
                          <div>
                            <span class="h-8 w-8 rounded-full bg-teal-400 text-white flex items-center justify-center ring-8 ring-white">
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
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p class="text-sm text-gray-500">Read Book 5</p>
                            </div>
                            <div class="whitespace-nowrap text-right text-sm text-gray-500">
                              <time datetime="2020-10-04">Oct 4</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="justify-stretch mt-6 flex flex-col">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-[#027bce] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    EDIT GOAL
                  </button>
                </div>
              </div>

              {/* FRIENDS */}
              <div class="p-2"></div>
              <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <h2 class="text-lg font-medium text-gray-900">Friends List</h2>

                <div class="mt-6">
                  <p> Friends go here </p>
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

      <div class="pt-20">
        <Footer />
      </div>
    </div>
  );
};
export default Profile;
