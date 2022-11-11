import * as React from "react";
import { Link } from 'gatsby';
import HomeLayout from '../components/home-layout';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import client from '../gatsby-plugin-apollo/client'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
    <HomeLayout pageTitle="Travel to the stars, read!">
      <h2 class="text-4xl font-normal pb-2">Make friends with a book!</h2>  
        <p className="pb-4 text-left">
          Book Nook is an online community for big book worms to discuss books
          for their little book worms.
        </p>

        <p className="text-sky-800 pb-5 text-center italic">
            Join today to find great reads for your child!
        </p>

        <div class="flex justify-center pb-4">
            <Link to="/signup">
                <button className="px-6 py-2 rounded-md drop-shadow-lg bg-teal-400 hover:bg-teal-300">
                    Get Started
                </button>
            </Link>
        </div>
    </HomeLayout>
    </ApolloProvider>
  );
};

export default IndexPage;