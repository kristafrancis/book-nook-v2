# BookNook (V2)

![read-me-header](https://user-images.githubusercontent.com/107075274/202079760-4586b6b9-9bfe-4cc0-9479-13b19574a3c6.png)

## Description

This application is designed to provide a platform and community for parents and/or teachers of young readers. This platform is designed to allow parents to discover and discuss new reads for their child based on their individual reading level and interest. The main features of this application include account registration, searching for books through Google Books API, creating a profile page where you can save books, have reading goals for your child and add friends.

## Link to Deployed Application

<p align="center">:sparkles: <a href="https://book-nook-v2.herokuapp.com/">Visit deployed application here</a> :sparkles:</p>

![Live view of Book Nook](/../main/client/src/images/screenshots/homepage.png)

## Table of Contents

- [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)

## User Story

```
As A parent of a child who loves to read
I WANT an educational discussion application
SO THAT I can search for books and connect with other parents to get book recommendations for my child
```

## Acceptance Criteria:

```
GIVEN an educational discussion application
WHEN I visit the site for the first time
THEN I am presented with a homepage with sign-up and login options
WHEN I choose to sign up
THEN I am prompted to add an email and create a username and password
AFTER I sign up, I am taken to a search page where I can search for any book, create a profile or logout
WHEN I choose to search for a book
THEN I am presented with the book(s) in a card with title, author, short discription and option to save book in my profile
WHEN I choose profile
THEN I am taken to a page with my avatar where I can create a reading goal for my child, see my saved books and connect with BookNook on Instagram and through email
WHEN I want to choose a reading goal for my child
THEN a click an arrow on the dropdown menu and make a selection
WHEN my child finishes a book
THEN I can update the count with the `ADD TO COUNT` button
WHEN I click on the `Instagram` button
THEN I am taken to the BookNook Instagram page
WHEN I click on the `Email` button
THEN I am sent to a page with the BookNook email is already filled in for you
```

## Installation

1. To install this application, `git clone` this repository, or download the `.zip` file in the dropdown after clicking the green ‘Code’ button at the top of this repository—as long as it is in your local branch.
2. Ensure Node.js is installed in your operating system.
3. Install **_all_** of the npm packages via command-line in terminal by entering `npm install` in the `root` directory.

## Usage

Enter `npm run develop` at the root directory in terminal. This will start up the React app and initialize the back-end at the same time. The application will open automatically in your browser. Navigating through the application is fairly straight-forward with the navigation links at the top-right corner of the screen. Dive into a good book!

## Screenshots

![Sign up page](/../main/client/src/images/screenshots/signup.png)
![Search page](/../main/client/src/images/screenshots/search.png)
![Profile page](/../main/client/src/images/screenshots/profile.png)

## Technologies Used

- [React.js](https://reactjs.org/)
- JavaScript
- CSS / [Tailwind CSS](https://tailwindcss.com/)
- HTML
- [MongoDB](https://www.mongodb.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) + [Apollo Client](https://www.apollographql.com/docs/react/)
- [Mongoose](https://mongoosejs.com/docs/)
- [Express.js](https://expressjs.com/)
- npm packages:
  - [apollo-server-express](https://www.npmjs.com/package/apollo-server-express)
  - [React Router](https://www.npmjs.com/package/react-router-dom)
  - [concurrently](https://www.npmjs.com/package/concurrently)
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [dotenv](https://github.com/motdotla/dotenv#readme)
  - [React-Spring](https://react-spring.dev/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [dotenv](https://github.com/motdotla/dotenv#readme)
- [Google Books API](https://developers.google.com/books)

## Contributors

- Demi Hayashi - [demivlkv](https://github.com/demivlkv)
- Sam Karpovck - [samkarp700](https://github.com/samkarp700)
- Chloe Byrnes - [chloebyrnes](https://github.com/chloebyrnes)
- Andrea Jared - [adj0609](https://github.com/adj0609)
- Krista Francis - [kristafrancis](https://github.com/kristafrancis)
- Monique Meas - [moniquemeas](https://github.com/moniquemeas)
