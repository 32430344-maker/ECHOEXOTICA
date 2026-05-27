import React, { useState } from 'react';
import '@splinetool/viewer';
import './Collection.css';

const Collection = () => {
  const [active, setActive] = useState(0);
  const [overlayIndex, setOverlayIndex] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const data = [
    {
      subtitle: "Sleepy Cat",
      image: '/149.jpeg',
      
      description: 'cute cat sleeping peacefully on the grass',

      photos: [
                "/149.jpeg",
              
                "/138.jpeg",
                "/153.jpeg"
            ]
    },
    {
      subtitle: "Birds House",
      image: '/147.jpeg',
      description: 'Birds hous on a tree branch, symbolizing shelter and the beauty of nature.',
     
       photos: [
                "/147.jpeg",
                
            ]
    },
    {
      subtitle: "Old Singers",
      image: '/144.jpeg',
      
      description: 'Two photos of two old singers, capturing the essence of their passion and the timeless nature of music.',
    
      photos: [
                '/144.jpeg',
                "/51.jpeg",  
                "/45.jpeg"
    ]    
    },
    {
      image: '/148.jpeg',
      subtitle: 'Drinks',
      description: 'Two friends enjoying drinks together, sharing laughter and creating cherished memories in a moment of camaraderie and joy.',
     
    },
   {
      image: '/181.jpeg',
      
      subtitle: 'Friends Night',
      description: 'A group of friends enjoying a night out together, creating unforgettable memories and strengthening their bond through laughter and shared experiences.',

      photos: [
                "/181.jpeg",
                "/183.jpeg",  
      ]
    },
    {
      image: '/150.jpeg',
      subtitle: 'Flowers',
      description: 'A white flowers on the seat, symbolizing purity and beauty in a serene and peaceful setting.',

      photos: [
                '/150.jpeg',
                "/170.jpeg", 
                "/151.jpeg",
                "/175.jpeg",
      ]

    },
    {
      image: '/140.jpeg',
      subtitle: 'Dining Table',
      description: 'A cozy dining table set for a quiet evening, evoking a sense of warmth and togetherness.',

      photos: [
                "/140.jpeg",
                "/157.jpeg", 
                "/155.jpeg",
               
      ]
    },
    {
      image: '/88.jpeg',
      subtitle: 'Art',
      description: 'A captivating piece of art displayed in a museum, inviting viewers to immerse themselves in its beauty and meaning.',

      photos: [
                "/88.jpeg",
                "/137.jpeg", 
                
      ]
    },
    {
      image: '/127.jpeg',
      subtitle: 'Snowe',
      description: 'Beautiful snowfall covering the landscape.',

      photos: [
                '/127.jpeg',
                "/126.jpeg", 
                "/125.jpeg",
                "/128.jpeg",
                "/188.jpeg",
                "/132.jpeg",
                "/23.jpeg",
                
      ]
    },
    {
      image: '/167.jpeg',
      subtitle: 'Ice Cream',
      description: 'A delicious ice cream cone, tempting with its sweet and creamy indulgence on a warm day.'
    },
   
  ];

  return (
    <div className="nature-container">
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span> Collection Of Life</span>
          </h1>
          <p>
           A journey through our lens where nature’s beauty,human stories, and unforgettable events come together as moments meant to be felt forever
           This is more than a collection of photos; it’s a story of life itself nature, people, and moments of celebration, all preserved as memories 
           that never fade A cinematic collection of emotional digital artworks blending mystery, atmosphere, and immersive visual storytelling.
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

export default Collection;



