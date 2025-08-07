// src/components/CourseDetails.js
import React from "react";

const CourseDetails = ({ courses }) => {
  return (
    <div>
      <h1>Course Details</h1>
      {courses.length ? (
        courses.map((course) => (
          <div key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </div>
        ))
      ) : (
        <p>No Course Data</p> // Fallback UI
      )}
    </div>
  );
};

export default CourseDetails;
