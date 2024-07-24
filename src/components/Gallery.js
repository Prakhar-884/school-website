import React from 'react';
import './Gallery.css'; // Import the CSS file

function Gallery() {
  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1>Gallery</h1>
      </header>
      <section className="photos">
        <h2>Photos</h2>
        <div className="gallery-images">
          <img src="/sports_day.jpg" alt="Sports Day" />
          <img src="/science_exhibition.jpg" alt="Science Exhibition" />
          <img src="/cultural_fest.jpg" alt="Cultural Fest" />
          <img src="/classroom.jpg" alt="Classroom" />
          <img src="/library.jpg" alt="Library" />
        </div>
      </section>
      <section className="videos">
        <h2>Videos</h2>
        <div className="video-list">
          <video width="320" height="240" controls>
            <source src="/school_tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src="/school_tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
