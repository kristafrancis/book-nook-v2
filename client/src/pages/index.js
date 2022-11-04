import * as React from "react";

// import components
import Header from '../components/header';
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
