import React, { useState } from "react";
import { Link } from "gatsby";
import DashboardLayout from "../components/dashboard-layout";
import Footer from "../components/footer";

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <DashboardLayout pageTitle="Edit Profile">
        <main class="flex-1 bg-gray-50 p-10">
          <div class="relative mx-auto max-w-4xl md:px-8 xl:px-0">
            <div class="pt-10 pb-16">
              <div class="px-4 sm:px-6 md:px-0">
                <h1 class="text-3xl font-medium tracking-tight text-gray-800">
                  Account Settings
                </h1>
              </div>
              <div class="px-4 sm:px-6 md:px-0">
                <div class="py-6">
                  

                  <div class="mt-10 divide-y divide-gray-200">
                    <div class="space-y-1">
                      <h3 class="text-lg font-medium leading-6 text-[#345995]">
                        Profile
                      </h3>
                      <p class="max-w-2xl text-sm text-gray-500">
                        This information will be displayed publicly so be
                        careful what you share.
                      </p>
                    </div>
                    <div class="mt-6">
                      <dl class="divide-y divide-gray-200">
                        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                          <dt class="text-sm font-medium text-gray-500">
                            Name
                          </dt>
                          <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow">Bob Joe</span>
                            <span class="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                class="rounded-md bg-white font-medium text-blue-900  hover:bg-gray-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900  focus:ring-offset-2"
                              >
                                Update
                              </button>
                            </span>
                          </dd>
                        </div>
                        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                          <dt class="text-sm font-medium text-gray-500">
                            Photo
                          </dt>
                          <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow">
                              <img
                                class="h-16 w-16 rounded-full"
                                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                alt=""
                              ></img>{" "}
                            </span>
                            <span class="ml-4 flex flex-shrink-0 items-start space-x-4">
                              <button
                                type="file"
                                name="myImage"
                                onChange={(event) => {
                                  console.log(event.target.files[0]);
                                  setSelectedImage(event.target.files[0]);
                                }}
                                class="rounded-md bg-white font-medium text-blue-900 hover:bg-gray-50 hover:text-text-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                              >
                                Update
                              </button>
                              <span class="text-gray-300" aria-hidden="true">
                                |
                              </span>
                              <button
                                type="button"
                                class="rounded-md bg-white font-medium text-blue-900 hover:bg-gray-50 hover:text-text-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                              >
                                Remove
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
      </DashboardLayout>
      <Footer />
    </div>
  );
};
export default EditProfile;
