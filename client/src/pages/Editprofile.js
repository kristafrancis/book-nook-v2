import React, { useState } from "react";

const EditProfile = () => {
  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  return (
    <>
      <main className="max-w-screen-md h-full mx-auto">
        <h1 className="my-8 ml-4 text-4xl font-semibold drop-shadow">
          Settings
        </h1>

        <div className="flex justify-center items-center flex-1 bg-slate-900 rounded-lg shadow-lg">
          <div className="w-[90%] py-3 px-4 sm:px- md:px-0">
            <div className="lg:hidden">
              <label for="selected-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="selected-tab"
                name="selected-tab"
                className="mt-1 block w-full rounded-md bg-[#22274f] border-indigo-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option selected>General</option>

                <option>Password</option>
              </select>
            </div>
            <div className="hidden lg:block">
              <div className="border-b divide-slate-700">
                <nav className="-mb-px flex space-x-8">
                  <a
                    href="#"
                    className="border-indigo-500  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-normal"
                  >
                    General
                  </a>

                  <a
                    href="#"
                    className="border-transparent whitespace-nowrap py-4 px-1 border-b-2 font-medium text-normal"
                  >
                    Password
                  </a>
                </nav>
              </div>
            </div>

            <div className="mt-10 divide-y divide-slate-700">
              <div className="space-y-1">
                <h3 className="text-2xl font-medium">Profile</h3>
                <p className="max-w-2xl">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
              <div className="mt-6">
                <dl className="divide-y divide-slate-700">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <dt className="font-medium text-indigo-400">Name</dt>
                    <dd className="mt-1 flex sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">Bob Joe</span>
                      <span className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded font-medium hover:text-indigo-200"
                        >
                          Update
                        </button>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                    <dt className="flex items-center font-medium text-indigo-300">
                      Photo
                    </dt>
                    <dd className="mt-1 flex sm:col-span-2 sm:mt-0">
                      <span className="ml-64 pl-1 flex flex-shrink-0 items-center space-x-4">
                        <div className="hover:bg-indigo-700 rounded-full ease-in duration-300">
                          <label htmlFor="upload-button">
                            {image.preview ? (
                              <div class="relative rounded-full overflow-hidden">
                                <img
                                  src={image.preview}
                                  className="opacity-50 h-16 w-16 rounded-full"
                                />
                                <div class="absolute w-full py-3 bottom-0 inset-0 mt-3 text-white text-xs text-center leading-4 rounded cursor-pointer tracking-widest ease-in duration-300">
                                  UPDATE
                                </div>
                              </div>
                            ) : (
                              <>
                                <span className="fa-stack fa-2x mt-3 mb-2">
                                  <i className="fas fa-circle fa-stack-2x" />
                                  <i className="fas fa-store fa-stack-1x fa-inverse" />
                                </span>
                                <h5 className="text-center hover:bg-indigo-700 rounded cursor-pointer tracking-widest ease-in duration-300">
                                  UPLOAD
                                </h5>
                              </>
                            )}
                          </label>
                          <input
                            type="file"
                            id="upload-button"
                            style={{ display: "none" }}
                            onChange={handleChange}
                          />
                        </div>

                        <span className="" aria-hidden="true">
                          |
                        </span>
                        <button
                          type="button"
                          className="rounded font-medium hover:text-indigo-200"
                        >
                          Remove
                        </button>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                    <dt className="font-medium text-indigo-300">Email</dt>
                    <dd className="mt-1 flex sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">bob.joe@spicegirls.com</span>
                      <span className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded font-medium hover:text-indigo-200"
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
      </main>
    </>
  );
};
export default EditProfile;
