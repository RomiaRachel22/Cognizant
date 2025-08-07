// src/components/BlogDetails.js
import React from "react";

const BlogDetails = ({ show }) => {
  if (!show) return null; // Short-circuit rendering

  const blogs = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!",
    },
    {
      title: "Installation",
      author: "Schewzdenier",
      content: "You can install React from npm.",
    },
  ];

  return (
    <div>
      <h1>Blog Details</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title}</h2>
          <i>{blog.author}</i>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
