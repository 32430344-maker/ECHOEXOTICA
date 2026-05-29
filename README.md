ECHOEXOTICA

A modern React photography and digital art gallery website featuring immersive animations, cinematic UI design, interactive galleries, and dynamic order customization.

🌌 Overview

ECHOEXOTICA is a creative digital gallery experience focused on:

Nature photography
Human emotional moments
Interactive image showcases
Cinematic animations
Dynamic artwork ordering system

The project combines:

React.js
React Router
Custom CSS animations
Spline 3D integration
Interactive overlays
Responsive layouts
✨ Features
🏠 Home Page
3D rotating cylinder gallery
Animated glowing effects
Floating logo animation
Fullscreen image overlay viewer
Smooth transitions and scaling effects
🌿 Nature Page
Horizontal artwork gallery
Interactive cards
Fullscreen image previews
Dynamic descriptions
3D Spline robot integration
Cinematic overlay effects
👥 Humans Page
Human emotion photography showcase
Interactive image cards
Story-based descriptions
Responsive gallery design
Fullscreen preview overlay
🛒 Info / Order Page

Interactive order customization system including:

Registration time selector
Quantity selector
Dynamic discount system
Location selection
Date & time booking
Express delivery option
File upload
Notes section
Real-time price calculation
Order summary panel
🛠 Technologies Used
Technology	Purpose
React.js	Frontend framework
React Router DOM	Page routing
CSS3	Styling & animations
Spline Viewer	3D interactive scene
JavaScript ES6	Logic & interactions
📁 Project Structure
src/
│
├── components/
│   ├── Home.jsx
│   ├── Nature.jsx
│   ├── Humans.jsx
│   ├── Info.jsx
│   ├── Collection.jsx
│   ├── Event.jsx
│   └── Navbar.jsx
│
├── App.jsx
├── App.css
│
├── Home.css
├── Nature.css
├── Humans.css
├── Info.css
└── Navbar.css
🚀 Installation
1. Clone the repository
git clone (https://github.com/32430344-maker/ECHOEXOTICA.git)
2. Open the project
cd echoexotica
3. Install dependencies
npm install
4. Start development server
npm run dev
📦 Required Packages

Install these packages if needed:

npm install react-router-dom
npm install @splinetool/viewer
🎨 Main Components
App.jsx

Handles:

Routing
Splash screen
Navigation rendering
Page transitions
Navbar.jsx

Provides:

Fixed navigation bar
Page links
Transparent blur effect
Responsive navigation
Home.jsx

Includes:

Rotating cylinder animation
Image overlay modal
Floating logo
Dynamic scroll effects
Nature.jsx & Humans.jsx

Features:

Interactive image galleries
Active image highlighting
Overlay fullscreen previews
Spline 3D scene integration
Info.jsx

Implements:

Dynamic pricing logic
Discounts
Order summary calculations
Form interactions
Delivery options
💰 Pricing Logic
Hourly Price
let hourlyPrice =
  quantity >= 100 && quantity <= 120
    ? 120
    : 100;
Discount System
Quantity	Discount
1 - 50	0%
51 - 100	10%
100+	20%
Total Calculation
let total =
  subtotal -
  discountAmount +
  deliveryPrice +
  expressPrice;
🎥 Animations Included
Floating logo animation
Cylinder rotation animation
Pulse glow effect
Hover scaling
Smooth transitions
Overlay fade effects
📱 Responsive Design

The website supports:

Desktop
Tablet
Mobile devices

Using:

@media (max-width: 768px)

Responsive adjustments include:

Gallery resizing
Spline resizing
Overlay optimization
Typography scaling
🌐 Routing

Implemented using React Router:

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/nature" element={<Nature />} />
  <Route path="/humans" element={<Humans />} />
  <Route path="/collection" element={<Collection />} />
  <Route path="/events" element={<Events />} />
  <Route path="/info" element={<Info />} />
</Routes>
🧠 Future Improvements

Possible future enhancements:

Backend integration
User authentication
Database storage
Payment gateway
Admin dashboard
Favorites system
Dark/Light mode
Search & filtering
Responsive hamburger menu
Framer Motion animations
⚡ Performance Optimizations

Recommended future optimizations:

Lazy loading images
Image compression
Component memoization
Code splitting
API integration
CDN hosting
👩‍💻 Author

Created by:

Fatima and sara
س
س
سشقش
📜 License

This project is for educational and portfolio purposes.

💫 Final Note

ECHOEXOTICA is designed to create an emotional digital experience through immersive visuals, cinematic layouts, and interactive storytelling using modern frontend technologies.
