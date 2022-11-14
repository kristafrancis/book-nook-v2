import React from "react";
import { useSpring, animated, useTransition } from "react-spring";
import Sparkle from 'react-sparkle';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import RandomAnimal from "../../hooks/RandomAnimal";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const HomeLayout = ({ pageTitle, children }) => {
  const style1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <>
      <main className="w-full h-full relative flex flex-col justify-center items-center">
        <div className="w-full h-[350px] z-[-5]">
          <Sparkle 
            // color={'#f9d18f'}
            count={10}
            minSize={5}
            maxSize={15}
            fadeOutSpeed={20}
            flickerSpeed={'slowest'}
          />
        <animated.div style={style1}>
          <div className="mt-20 flex justify-center items-center">
            <RandomAnimal />
          </div>
        </animated.div>
        </div>

        <h1 className="font-medium drop-shadow-lg pb-8 text-6xl md:text-8xl md:mt-10">
          book<span className="text-[#7286ff]">nook</span>
        </h1>

        <div className="bg-[#090c26] p-8 rounded-lg shadow-lg">
          {children}
        </div>
      </main>

      <footer>
        <p class="text-center p-6 md:text-base text-sm tracking-wider font-medium text-gray-400">
          &copy; {new Date().getFullYear()} <a href="https://github.com/kristafrancis/book-nook-v2" target="_blank">The Spice Girls</a>, LLC.
        </p>
      </footer>
    </>
  );
};

export default HomeLayout;
