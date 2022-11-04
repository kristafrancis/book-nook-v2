import * as React from "react";

// import components
import Header from '../components/header';
import Home from '../components/home';
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Home />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;