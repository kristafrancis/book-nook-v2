import * as React from "react";
import WelcomeImg from "../images/welcome-page.png";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main>
      <div class="container p-20">
        <img src={WelcomeImg}></img>

        <h1>Make friends with a book!</h1>
        <p>
          Book Nook is an online community for big book worms to discuss books
          for their little book worms. Join today to find great reads for your
          child!
        </p>

        <button class="rounded-none bg-emerald-300 text-white font-semi-bold">
          GET STARTED
        </button>
      </div>

      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
