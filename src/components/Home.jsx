import React, { useEffect, useRef, useState } from 'react';
import './Home.css';

const Home = () => {

    const containerRef = useRef(null);
    const [activeImage, setActiveImage] = useState(null);
    const [showSplash, setShowSplash] = useState(true);

    const images = [
        '/12.jpeg',
        '/35.jpeg',
        '/25.jpeg',
        '/10.jpeg',
        '/14.jpeg',
        '/22.jpeg',
        '/36.jpeg',
        '/27.jpeg',
        '/20.jpeg',
        '/146.jpeg',
        '/139.jpeg',
        '/76.jpeg',
        '/26.jpeg',
        '/142.jpeg',
        '/158.jpeg',
        '/15.jpeg',
        '/19.jpeg',
        '/39.jpeg',
        '/173.jpeg',
        '/149.jpeg',
        '/167.jpeg',
        '/125.jpeg',
        '/130.jpeg',
        '/129.jpeg',
        '/144.jpeg',
        '/61.jpeg',
        '/151.jpeg',
    ];

    const handleImageClick = (src) => {
        setActiveImage(src);
    };

    const closeOverlay = () => {
        setActiveImage(null);
    };


 useEffect(() => {

        const container = containerRef.current;
        if (!container) return;

        const items = Array.from(
            container.querySelectorAll('.photo-box')
        );

        const radius = 300; 
        const angleStep = 360 / items.length;

        let rotation = 0;

        const updateCylinder = () => {

            items.forEach((item, i) => {

                const angle = i * angleStep + rotation;

                
                const stepDown = i * 100;

                item.style.transform = `
                    rotateY(${angle}deg)
                    translateZ(${radius}px)
                    translateY(${stepDown}px)
                    translate(-50%, -50%)
                    scale(0.85)
                `;

               
                const normalized = ((angle % 360) + 360) % 360;

                if (normalized < 30 || normalized > 330) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }

            });

        };

        const animate = () => {

            rotation +=0.15  ; 
            updateCylinder();

            requestAnimationFrame(animate);
        };

        animate();

        
        const onScroll = () => {
            rotation += window.scrollY * 0.00001;
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };

    }, []);



    return (

        <div
            className="home-container"
            ref={containerRef}
        >

            {/* HERO */}

            <section className="hero">

                <div className="hero-content">

                    <h1>
                       <span>ECHOEXOTICA</span>
                    </h1>

                    <p>
                       A collection of 100 unique digital artworks that capture deep emotional moments inspired by the quiet 
                       beauty of nature, the shifting moods of the earth, and the endless mysteries of the universe that spark
                       wonder, nostalgia, and imagination.
                    </p>

                </div>

            </section>

            <div className="logo-middle">
    <img src="/logo.png" alt="Logo" />
</div>

            

            <div className="cylinder-wrapper">
                {images.map((src) => (
                    <div className="photo-box" key={src}>
                        <img
                            src={src}
                            alt="Artwork"
                            onClick={() => handleImageClick(src)}
                        />
                    </div>
                ))}
            </div>


            

            {activeImage && (
                <div className="image-overlay" onClick={closeOverlay}>
                    <div className="image-overlay-content" onClick={(e) => e.stopPropagation()}>
                        <button className="image-close" onClick={closeOverlay}>
                            ×
                        </button>
                        <img src={activeImage} alt="Enlarged artwork" />
                    </div>
                </div>
            )}
            <div style={{ height: '140vh' }}></div>

          
            </div>
        

    );

};

export default Home;