import React, { useState } from 'react';
import '@splinetool/viewer';
import './Events.css';

const Events = () => {
  const [active, setActive] = useState(0);
  const [overlayIndex, setOverlayIndex] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const data = [
    {
      image: '/49.jpeg',
      
      subtitle: 'Museum',
      description: 'A museum filled with captivating art pieces, where visitors can immerse themselves in the beauty and creativity of various artworks, exploring the rich tapestry of human expression and culture.',

      photos: [
                "/49.jpeg",
                "/50.jpeg",
                "/48.jpeg",
                "/47.jpeg",
                "/52.jpeg",
              
      ]
    },
    {
      image: '/56.jpeg',
    
      subtitle: 'Culture',
      description: 'A vibrant cultural festival celebrating diversity and heritage, where people come together to share their traditions, music, dance, and cuisine, fostering a sense of unity and appreciation for different cultures around the world.',

      photos: [
                "/56.jpeg",
                "/57.jpeg",
                "/58.jpeg",     
      ]
    },
    {
      image: '/88.jpeg',
      
      subtitle: 'Art',
      description: 'A stunning art exhibition showcasing a diverse range of artistic styles and mediums, where visitors can experience the power of creativity and imagination through thought-provoking and visually captivating artworks.'
    },
    {
      image: '/145.jpeg',
      
      subtitle: 'Sursock Museum',
      description: 'The Sursock Museum, a renowned art museum located in Beirut, Lebanon, housing an impressive collection of modern and contemporary art, providing a platform for artists to showcase their work and engage with the local and international art community.',

      photos: [
                "/145.jpeg",
                "/146.jpeg",
                "/59.jpeg",
                "/62.jpeg",
                "/61.jpeg",
      ]
    },
   {
      image: '/144.jpeg',
      
      subtitle: 'Divas ',
      description: 'A group of talented divas captivating the audience with their powerful voices and mesmerizing performances, leaving a lasting impression and creating an unforgettable experience for all who witness their artistry.',

      photos: [
                "/144.jpeg",
                "/159.jpeg",
                "/47.jpeg",
                "/45.jpeg",
      ]
    },
    {
      image: '/67.jpeg',
      subtitle: 'Wadding',
      description: 'A joyous wedding celebration filled with love, laughter, and cherished moments, where two people come together to embark on a lifelong journey of companionship and happiness, surrounded by family and friends who share in their special day.',

      photos: [
                "/67.jpeg",
                "/68.jpeg",
                "/3.jpeg",
                "/63.jpeg",
                "/66.jpeg",
      ]
    },
    {
      image: '/106.jpg',
      subtitle: 'Graduation',
      description: 'A proud moment of achievement and celebration, where graduates don their caps and gowns, marking the culmination of years of hard work and dedication, as they step into the next chapter of their lives with hope and excitement for the future.',

      photos: [
                "/106.jpg",
                "/108.jpg",
                "/98.jpg",
                "/120.jpeg",
      ]
    },
    {
      image: '/51.jpeg',
      subtitle: 'Celebrities',
      description: 'An old photo capturing the essence of celebrities, showcasing their charisma and influence in the world of entertainment, where they have left an indelible mark on popular culture and continue to inspire and captivate audiences worldwide.'
    },
    {
      image: '/46.jpeg',
      subtitle: 'بنت الحارس',
      description: 'A beautiful moment captured in time, where a young girl stands beside a guard, embodying innocence and curiosity, as she gazes at the world around her with wonder and awe, reminding us of the simple joys and precious moments that can be found in everyday life.',

      photos: [
                "/46.jpeg",
                "/47.jpeg", 
                "/45.jpeg",
      ]
    },
    
   
  ];

  return (
    <div className="nature-container">
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span> Events </span>
          </h1>
          <p>
            Here, we transform the moments of every event into timeless memories, filled with emotion, connection, and life.
            Through every event we capture, we preserve laughter, celebration, and unforgettable moments that remain in the heart forever.
          </p>
        </div>
      </section>

      


      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.94/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/ck-rB6GS8iiB4Div/scene.splinecode"
 class="robot-frame" ></spline-viewer>
        

      <section className="nature-section">
        <div className="nature-gallery">
          {data.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`nature-card ${active === index ? 'active' : ''}`}
              onClick={() => {
                setActive(index);
                setOverlayIndex(index);
                 setSelectedPhoto(item.photos?.[0]  || item.image);
              }}
            >
              <img src={item.image} alt={item.subtitle} />
              <div className="card-overlay">
                <h3>{item.title}</h3>
                <span>{item.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="nature-info">
          <span>{data[active].subtitle}</span>
          <h2>{data[active].title}</h2>
          <p>{data[active].description}</p>
        </div>
      </section>

      {overlayIndex !== null && (
        <div className="nature-overlay">
          <div className="overlay-image">
  <img
    src={selectedPhoto || data[overlayIndex].image}
    alt=""
  />
</div>

          <button
            type="button"
            className="overlay-close"
            onClick={() => setOverlayIndex(null)}
            aria-label="Close image overlay"
          >
            ×
          </button>


           <div className="overlay-content">

  <span>
    {data[overlayIndex].subtitle}
  </span>

  <p>
    {data[overlayIndex].description}
  </p>

  {data[overlayIndex].photos && (

    <div className="overlay-gallery">

      {data[overlayIndex].photos.map((photo, i) => (

        <img
          key={i}
          src={photo}
          alt=""
          onClick={() => setSelectedPhoto(photo)}
          className={selectedPhoto === photo ? 'selected' : ''}
        />

      ))}

    </div>

  )}

</div>


        </div>
      )}
    </div>
  );
};

export default Events;



