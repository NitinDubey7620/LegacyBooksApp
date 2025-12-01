📚 LegacyBooksApp – Full-Stack Bookstore Web Application https://legacy-books-app.vercel.app/

LegacyBooksApp is a complete full-stack MERN bookstore application where users can browse books, open any book to read its short content, and interact with a clean UI built with React, TailwindCSS, and DaisyUI. The backend is powered by Node.js, Express, and MongoDB using a structured MVC architecture.

📝 1. Project Overview (Multi-line Explanation)

LegacyBooksApp is designed as a modern, interactive bookstore experience.
The frontend presents a clean interface with an animated banner, image slider, and book cards displayed in a responsive grid layout. When users click on a book, the application retrieves detailed book data from the backend and opens a beautifully designed Book Detail Page, where the short content (fullDescription) is displayed in a readable format.

The backend exposes RESTful APIs following an MVC architecture. Controllers handle business logic, models define MongoDB schemas, and routes map API endpoints. Axios in the frontend communicates with the backend to fetch book lists and single book details. MongoDB stores all book information including titles, categories, images, prices, and full reading descriptions.

Together, the system delivers a smooth full-stack reading platform ideal for learning, browsing, or hobby projects.

⭐ 2. Features
🎨 Frontend Features

Modern UI created using React + TailwindCSS + DaisyUI

Attractive Banner, Quote Slider, and Image Carousel

Book Listing Page using reusable Cards component

Book Detail Page with fullDescription display

React Router for page navigation

Uses Axios to fetch data from backend API

Fully mobile-responsive and optimized layout

Clean UI spacing using min-h-screen to avoid footer overlap

🖥️ Backend Features

Node.js + Express server with clear MVC structure

MongoDB database using Mongoose ODM

APIs to:

Get all books

Get single book by ID

Error handling and clean JSON responses

Scalable folder structure for production-grade organization

CORS enabled to allow communication with frontend

🗄️ Database Features

MongoDB Atlas storage

Book documents structured with:

name

title

price

category

image

fullDescription

🖼️ 3. Screenshots (Add your own)

You can add screenshots like:

/screenshots/home.png  
/screenshots/books.png  
/screenshots/detail.png


(Upload images into a /screenshots folder and reference them.)

🔗 4. Demo Link

Live Demo: Coming Soon

(You may deploy frontend on Vercel/Netlify and backend on Render/Railway.)

🛠 5. Tech Stack
💻 Frontend

React.js

TailwindCSS

Axios


🖥 Backend

Node.js

Express.js

MongoDB

Mongoose

🧰 Tools

Postman

VS Code

MongoDB Atlas

Git & GitHub

🏗️ 6. Folder Structure (Frontend + Backend)
LegacyBooksApp/
│
├── backend/
│   ├── controller/
│   │   └── book.controller.js
│   │   └── user.controller.js (placeholder)
│   ├── model/
│   │   └── book.model.js
│   │   └── user.model.js (placeholder)
│   ├── routes/
│   │   └── book.route.js
│   │   └── user.route.js (placeholder)
│   ├── index.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Banner.jsx
    │   │   ├── Course.jsx
    │   │   ├── Cards.jsx
    │   ├── pages/
    │   │   └── BookDetail.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json

🔌 7. Backend Details (Model, Controller, Routes)
📘 Book Model (MongoDB/Mongoose)

Defines how each book is stored in the database, including reading content.

Fields stored:

name

title

price

category

image

fullDescription

🧠 Book Controller — Responsible for Logic
✔ getBook

Fetches all books from MongoDB.

✔ getSingleBook

Fetches one book using its ID (used when a card is clicked).

🛣 Book Routes
/book

Returns all books.

/book/:id

Returns complete details for a single book.

👤 User Model (Placeholder)

Can be added in future for:

Login/Signup

Saved books

Purchases

🌍 8. API Endpoints (Detailed Explanation)
👉 GET /book

Returns an array of all books.
Used by Course.jsx to display every book on the homepage.

👉 GET /book/:id

Returns complete information for one book, including fullDescription.
Used by BookDetail.jsx.

🎨 9. Frontend Main Files Explained
📌 Navbar.jsx

Persistent navigation bar across all pages.

📌 Banner.jsx

Contains:

Quote fade animation

Image slider

Hero section text

Email input UI

📌 Course.jsx

Fetches all books from backend

Maps over them to show Cards

Acts as the main listing page

📌 Cards.jsx

Displays each book’s:

Image

Name

Title

Category

Price

Wrapped in a Link to open the book detail page

📌 BookDetail.jsx

Fetches single book

Shows fullDescription in a “reading” layout

Clean, readable typography

🌐 10. Axios API Call Explanation (Frontend)

Axios is used in the frontend to fetch data from the backend.

Where it is used:

Course.jsx → Fetch all books

BookDetail.jsx → Fetch one book

Process:

Axios sends GET request to backend

Backend controller retrieves data from MongoDB

JSON is sent back as a response

React updates UI with the data

⚙️ 11. How to Run the Project
▶ Backend
cd backend
npm install
npm start


Runs at:

http://localhost:4001

▶ Frontend
cd frontend
npm install
npm run dev


Runs at:

http://localhost:5173

📘 12. Learnings (Most Important)
🧩 Understanding Full-Stack Architecture

Learned how frontend and backend communicate

Built structured MVC architecture

⚙️ API Development & Integration

Created REST APIs

Integrated Axios with React

Handled asynchronous requests and responses

🏗 React Component Design

Built reusable components

Managed state using hooks

Used conditional rendering and props

🗄 Database Management

Designed MongoDB schemas

Connected backend with MongoDB Atlas

Understood CRUD operations

🎨 UI/UX Improvements

Implemented responsive layout

Learned TailwindCSS utility classes

Added animations and interactive components

🧠 Problem Solving & Debugging

Resolved CORS, routing issues, API errors

Improved understanding of folder structure

Built production-style separation of concerns

🚀 13. Future Enhancements

User login + JWT authentication

Admin dashboard for adding new books

Payment integration (Razorpay/Stripe)

Search + Filters for books

“Add to Cart” system
