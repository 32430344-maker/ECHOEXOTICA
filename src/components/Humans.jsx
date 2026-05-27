import React, { useState } from 'react';
import '@splinetool/viewer';
import './Humans.css';

const Humans = () => {
  const [active, setActive] = useState(0);
  const [overlayIndex, setOverlayIndex] = useState(null);
  
  const data = [
    {
      image: '/48.jpeg',
      
      subtitle: 'looking to art',
      description: 'A person gazing at a captivating piece of art in a gallery, immersed in the beauty and emotion of the artwork.'
    },
    {
      image: '/61.jpeg',
    
      subtitle: 'Picture tookn for art',
      description: 'A person taking a picture of a captivating piece of art in a gallery, capturing the beauty and emotion of the artwork through their lens.'
    },
    {
      image: '/66.jpeg',
      
      subtitle: 'Wadding',
      description: 'Pepole engjoying a wedding ceremony, celebrating love and commitment in a joyous and heartfelt occasion.'
    },
    {
      image: '/63.jpeg',
      
      subtitle: 'Couple',
      description: 'A couple sharing a tender moment, expressing love and affection in a heartfelt embrace.'
    },
   {
      image: '/80.jpeg',
      
      subtitle: 'Museum ',
      description: 'A person exploring a museum, discovering the wonders of history and culture.'
    },
    {
      image: '/106.jpg',
      subtitle: 'Graduation',
      description: 'A person celebrating their graduation, marking the achievement of an important milestone in their academic journey.'
    },
    {
      image: '/207.jpeg',
      subtitle: 'Music',
      description: 'A person enjoying music, immersed in the rhythm and melody that brings joy and emotion to their soul.'
    },
    {
      image: '/92.jpg',
      subtitle: 'Child',
      description: 'A child playing and having fun, embracing the innocence and joy of childhood.'
    },
    {
      image: '/79.jpeg',
      subtitle: 'Staircase',
      description: 'A person standing on a staircase, looking out towards a starry sky, symbolizing the journey of life and the infinite possibilities ahead.'
    },
    {
      image: '/54.jpeg',
      subtitle: 'Family',
      description: 'A family enjoying together, creating cherished memories and bonding over shared moments of joy and togetherness.'
    },
   
  ];

  return (
    <div className="nature-container">
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span> Humans Moments </span>
          </h1>
          <p>
            Every photo we take is a piece of someone’s story held in time, remembered in the mind, and felt in the heart.
            This space is dedicated to telling human stories, transforming beautiful moments into memories that linger in the 
            heart long after they pass.
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
              }}
            >
              <img src={item.image} alt={item.title} />
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
          <div
            className="overlay-image"
            style={{ backgroundImage: `url(${data[overlayIndex].image})` }}
          />
          <button
            type="button"
            className="overlay-close"
            onClick={() => setOverlayIndex(null)}
            aria-label="Close image overlay"
          >
            ×
          </button>
          <div className="overlay-content">
            <span>{data[overlayIndex].subtitle}</span>
            <p>{data[overlayIndex].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Humans;



