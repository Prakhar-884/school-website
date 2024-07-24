import React from 'react';
import './Academics.css'; // Import the CSS file

function Academics() {
  return (
    <div className="academics">
      <header className="academics-header">
        <h1>Academics</h1>
      </header>
      <section className="curriculum">
        <h2>Curriculum</h2>
        <h3>Primary (Grades 1-5)</h3>
        <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        <h3>Secondary (Grades 6-10)</h3>
        <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        <h3>Senior Secondary (Grades 11-12)</h3>
        <p>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
        <p>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</p>
      </section>
      <section className="methodologies-resources">
        <h2>Teaching Methodologies</h2>
        <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        <h2>Educational Resources</h2>
        <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
      </section>
    </div>
  );
}

export default Academics;
