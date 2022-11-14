import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useSpring, animated } from "react-spring";

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Index from './pages/index';
import Login from './pages/Login';
import Signup from '../src/components/SignupForm';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Editprofile from './pages/Editprofile';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [animFinished, setAnimFinished] = useState(false);
  const navStyle = useSpring(animFinished, null, {
    from: { opacity: 0, transform: animFinished ? "translateY(0)" : "translateY(200px)" },
    to: { opacity: 1 },
    config: { duration: 2000 },
    onRest: () => setAnimFinished(true)
  });

  return (
    <ApolloProvider client = {client}>
      <Router>
      <Header animFinished={animFinished} setAnimFinished={setAnimFinished} />
        <Routes>
              <Route
                path="/"
                element={<Index />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/search"
                element={<Search />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/editprofile"
                element={<Editprofile />}
              />
              <Route
              path='/logout'
              element={<logout />}
              />

          </Routes>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;