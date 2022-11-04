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
      <div class="container px-20 pb-10">
        <img class="h-34 w-auto" src={WelcomeImg}></img>

        <h1 class="text-4xl font-semibold text-sky-800 pt-5 pb-2 text-center">Make friends with a book!</h1>
        <p class="text-sky-800 text-center">
          Book Nook is an online community for big book worms to discuss books
          for their little book worms. </p><p class="text-sky-800 pb-5 text-center">Join today to find great reads for your
          child!
        </p>

<div class="flex justify-center">
        <a href="#">
          <button class="w-40 p-2 hover:bg-emerald-400 rounded-md bg-emerald-300 text-white font-semibold">
            GET STARTED
          </button>
        </a>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
