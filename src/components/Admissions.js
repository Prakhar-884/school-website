import React from 'react';
import './Admissions.css'; // Import the CSS file

function Admissions() {
  return (
    <div className="admissions">
      <header className="admissions-header">
        <h1>Admissions</h1>
      </header>
      <section className="process-criteria">
        <h2>Admission Process</h2>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <h2>Criteria</h2>
        <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        <h2>Important Dates</h2>
        <ul>
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </section>
    </div>
  );
}

export default Admissions;
