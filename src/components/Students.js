import React from 'react';
import './Students.css'; // Import the CSS file

function Students() {
  return (
    <div className="students">
      <header className="students-header">
        <h1>Students</h1>
      </header>
      <section className="life-activities">
        <h2>Life at Springdale</h2>
        <h3>Extracurricular Activities</h3>
        <p>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>
        <h3>Clubs and Societies</h3>
        <p>Literary Society, Environmental Club, Astronomy Club, Coding Club</p>
        <h3>Achievements</h3>
        <ul>
          <li>John Smith - National Level Math Olympiad Winner</li>
          <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
          <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
        </ul>
        <h3>Student Council</h3>
        <p>President: Amy Parker, Grade 12</p>
        <p>Vice President: Rajiv Mehta, Grade 11</p>
        <p>Secretary: Lisa Wong, Grade 10</p>
      </section>
    </div>
  );
}

export default Students;
