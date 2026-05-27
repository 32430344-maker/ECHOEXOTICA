import React, { useState } from 'react';
import '@splinetool/viewer';
import './Nature.css';

const Nature = () => {
  const [active, setActive] = useState(0);
  const [overlayIndex, setOverlayIndex] = useState(null);
  
  const data = [
    {
      image: '/35.jpeg',
      
      subtitle: 'Wilderness',
      description: 'Raw, untamed landscapes capturing the spirit of the wild.'
    },
    {
      image: '/40.jpeg',
    
      subtitle: 'Serenity',
      description: 'Peaceful ocean scenes with golden sunset reflections.'
    },
    {
      image: '/121.jpeg',
      
      subtitle: 'Romance',
      description: 'Warm sunset hues painting the sky.'
    },
    {
      image: '/69.jpeg',
      
      subtitle: 'Adventure',
      description: 'Dramatic skies over winding rivers.'
    },
   {
      image: '/72.jpeg',
      
      subtitle: 'Tranquility',
      description: 'Serene snowy landscapes capturing the essence of winter.'
    },
    {
      image: '/42.jpeg',
      subtitle: 'Balcony',
      description: 'A cozy balcony overlooking a vibrant cityscape at dusk.'
    },
    {
      image: '/160.jpeg',
      subtitle: 'Tree',
      description: 'A majestic tree standing alone in a misty field, symbolizing strength and solitude.'
    },
    {
      image: '/13.jpeg',
      subtitle: 'Old House',
      description: 'A charming old house standing alone in the forest, evoking a sense of mystery and nostalgia.'
    },
    {
      image: '/134.jpeg',
      subtitle: 'telescope',
      description: 'a telescope pointed towards a starry sky, inviting viewers to explore the wonders of the universe and the mysteries of the cosmos.'
    },
    {
      image: '/135.jpeg',
      subtitle: 'Snow and trees',
      description: 'A serene winter landscape with snow-covered trees, evoking a sense of tranquility and the quiet beauty of nature.'
    },
   {
      image: '/130.jpeg',
      subtitle: 'Old House with a lake in front of it',
      description: 'A charming old house standing alone in the forest, evoking a sense of mystery and nostalgia.'
    },
  ];

  return (
    <div className="nature-container">
      <section className="hero">
        <div className="hero-content">
          
          <h1>
            <span> Nature ART</span>
          </h1>
          <p>
            With every shot, we chase light, emotion, and the untold stories of nature, preserving its beauty in its purest form.
            Through every photograph, we tell the story of nature’s hidden magic moments of beauty that deserve to be seen, felt, and remembered.
          </p>
        </div>
      </section>

      <br></br>


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

export default Nature;



