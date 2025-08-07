// src/App.js
import React from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import './App.css';

function App() {
  const showBlog = true; // change this to false to hide
  const books = [
    { id: 101, bname: "Master React", price: 670 },
    { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 103, bname: "Mongo Essentials", price: 450 },
  ];

  const courses = [
    { id: 1, name: "Angular", date: "4/5/2021" },
    { id: 2, name: "React", date: "6/3/20201" },
  ];

  return (
    <div className="container">
      {/* Conditional Rendering */}
      {true && <CourseDetails courses={courses} />}
      <BookDetails books={books} />
      <BlogDetails show={showBlog} />
    </div>
  );
}

export default App;
