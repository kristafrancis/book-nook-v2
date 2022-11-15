import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const ReadingList = () => {
  const { data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
  

  return (
    <>
      <main class="min-h-full pb-10 mx-32">
        <div className="bg-slate-900 shadow sm:rounded-lg ">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="pb-4 text-4xl font-medium drop-shadow-md">
              Reading List
            </h2>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            {" "}
            <div className="overflow-hidden bg-white shadow sm:rounded-md">
              <ul role="list" className="divide-y divide-gray-200">
                <li>
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-sm font-medium text-blue-900"></p>

                        <div className="ml-2 flex flex-shrink-0">
                          <p className="inline-flex rounded-full bg-teal-100 px-2 text-sm font-semibold leading-5 text-teal-700">
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
        </div>
      </main>
    </>
  );
};

export default ReadingList;
