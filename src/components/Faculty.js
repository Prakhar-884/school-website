import React from 'react';
import './Faculty.css'; // Import the CSS file

function Faculty() {
  const facultyMembers = [
    { name: "John Doe", role: "Principal", description: "M.Ed, 20 years of experience in educational administration.", imgSrc: "/dummy1.jpg" },
    { name: "Jane Smith", role: "Vice Principal", description: "M.Sc. in Physics, 15 years of teaching experience.", imgSrc: "/dummy2.jpg" },
    { name: "Emily Johnson", role: "English Teacher", description: "M.A. in English, 10 years of teaching experience.", imgSrc: "/dummy3.jpg" },
    { name: "Michael Brown", role: "Mathematics Teacher", description: "M.Sc. in Mathematics, 8 years of teaching experience.", imgSrc: "/dummy4.jpg" },
    { name: "Sophia Davis", role: "Science Teacher", description: "M.Sc. in Chemistry, 12 years of teaching experience.", imgSrc: "/dummy5.jpg" },
    { name: "David Wilson", role: "Computer Science Teacher", description: "B.Tech in Computer Science, 5 years of teaching experience.", imgSrc: "/dummy6.jpg" }
  ];

  return (
    <div className="faculty">
      <header className="faculty-header">
        <h1>Faculty</h1>
      </header>
      <section className="faculty-profiles">
        {facultyMembers.map((member, index) => (
          <div key={index} className="faculty-member">
            <img src={member.imgSrc} alt={member.name} className="faculty-photo" />
            <div className="faculty-info">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Faculty;
