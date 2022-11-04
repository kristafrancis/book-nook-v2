import * as React from "react";
import WelcomeImg from "../images/welcome-page.png";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
      <div class="container p-20">
        <img class="h-34 w-auto" src={WelcomeImg}></img>

        <h1 class="text-3xl font-semibold">Make friends with a book!</h1>
        <p>
          Book Nook is an online community for big book worms to discuss books
          for their little book worms. Join today to find great reads for your
          child!
        </p>

        <a href="#">
          <button class="p-2 hover:bg-emerald-400 rounded-none bg-emerald-300 text-white font-semibold">
            GET STARTED
          </button>
        </a>
      </div>

      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
