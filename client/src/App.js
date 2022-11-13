// import logo from './logo.svg';
// import './index.css';
import React from "react";
import Index from "./pages/index";
import Login from "./pages/Login";
import Signup from "./components/SignupForm";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Editprofile from "./pages/Editprofile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <div className="container">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/editprofile" element={<Editprofile />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
