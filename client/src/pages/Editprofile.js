import React, { useState } from "react";
import Layout from "../components/Layout/dashboard";

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Layout pageTitle="Edit Profile">
        <main className="flex-1 bg-slate-900">
          <div className="relative mx-auto max-w-4xl md:px-8 xl:px-0">
            <div className="pt-10 pb-16">
              <div className="px-4 sm:px-6 md:px-0">
                <h1 className="text-3xl font-bold tracking-tight">
                  Settings
                </h1>
              </div>
              <div className="px-4 sm:px-6 md:px-0">
                <div className="py-6">
                  <div className="lg:hidden">
                    <label for="selected-tab" className="sr-only">
                      Select a tab
                    </label>
                    <select
                      id="selected-tab"
                      name="selected-tab"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                    >
                      <option selected>General</option>

                      <option>Password</option>
                    </select>
                  </div>
                  <div className="hidden lg:block">
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex space-x-8">
                        <a
                          href="#"
                          className="border-teal-500  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        >
                          General
                        </a>

                        <a
                          href="#"
                          className="border-transparent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        >
                          Password
                        </a>
                      </nav>
                    </div>
                  </div>

                  <div className="mt-10 divide-y divide-gray-200">
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium leading-6">
                        Profile
                      </h3>
                      <p className="max-w-2xl text-sm">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                    </div>
                    <div className="mt-6">
                      <dl className="divide-y divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                          <dt className="text-sm font-medium">
                            Name
                          </dt>
                          <dd className="mt-1 flex text-sm sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">Bob Joe</span>
                            <span className="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                className="rounded-md font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900  focus:ring-offset-2"
                              >
                                Update
                              </button>
                            </span>
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                          <dt className="text-sm font-medium">
                            Photo
                          </dt>
                          <dd className="mt-1 flex text-sm sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">
                              <img
                                className="h-16 w-16 rounded-full"
                                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                alt=""
                              ></img>{" "}
                            </span>
                            <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                              <button
                                type="file"
                                name="myImage"
                                onChange={(event) => {
                                  console.log(event.target.files[0]);
                                  setSelectedImage(event.target.files[0]);
                                }}
                                className="rounded-md font-medium hover:text-text-blue-700 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                              >
                                Update
                              </button>
                              <span className="" aria-hidden="true">
                                |
                              </span>
                              <button
                                type="button"
                                className="rounded-md font-medium hover:text-text-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                              >
                                Remove
                              </button>
                            </span>
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                          <dt className="text-sm font-medium">
                            Email
                          </dt>
                          <dd className="mt-1 flex text-sm sm:col-span-2 sm:mt-0">
                            <span className="flex-grow">
                              bob.joe@spicegirls.com
                            </span>
                            <span className="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                className="rounded-md font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                              >
                                Update
                              </button>
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </Layout>
    </>
  );
};
export default EditProfile;
