import React from 'react';
import './ContactUs.css'; // Import the CSS file

function ContactUs() {
  return (
    <div className="contact-us">
      <header className="contact-us-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-details">
        <h2>Address</h2>
        <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <h2>Phone</h2>
        <p>+1 (123) 456-7890</p>
        <h2>Email</h2>
        <p><a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
      </section>
      <section className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <section className="google-maps">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.799717684259!2d-73.98171628431602!3d40.759140379326476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25851d1d1a0b5%3A0x6c2a6d56a9e1d19b!2sThe%20Empire%20State%20Building!5e0!3m2!1sen!2sus!4v1652713601272!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;
