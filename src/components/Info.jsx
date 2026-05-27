import React, { useState } from 'react';
import './Info.css';

const Info = () => {
 

const [quantity, setQuantity] = useState(1);

const [location, setLocation] = useState('Beirut');

const [expressDelivery, setExpressDelivery] = useState(false);
const [hours, setHours] = useState(1);



let hourlyPrice =
  quantity >= 100 && quantity <= 120
    ? 120
    : 100;
let subtotal =
  hourlyPrice * hours;


let discountPercent = 0;

if (quantity >= 51 && quantity <= 100) {
  discountPercent = 10;
}

if (quantity > 100) {
  discountPercent = 20;
}

let discountAmount =
  subtotal * (discountPercent / 100);

let deliveryPrice = 5;

let expressPrice =
  expressDelivery ? 20 : 0;

let total =
  subtotal -
  discountAmount +
  deliveryPrice +
  expressPrice;

  return (
  <div>

    <div className="container">

      <img src="/Infopage.png" id="pic" />

      <div className="text-box">
        <h1 id="info1">Create Your Order</h1>

        <h2 id="info2">
          choose your preferences and we'll take care of the rest
        </h2>
      </div>

    </div>

    




     <div className="registration-container">

  <h2 className="section-title">
    1. Time of Registration
  </h2>

   

  <div className="registration-card">

    <div className="hours-box">

      <h3>Choose Hours</h3>

      <div className="hours-controls">

        <button
          className="hour-btn"
          onClick={() => {
            if (hours > 1) {
              setHours(hours - 1);
            }
          }}
        >
          -
        </button>

        <div className="hours-number">
          {hours}
        </div>

        <button
          className="hour-btn"
          onClick={() => setHours(hours + 1)}
        >
          +
        </button>

      </div>

    </div>

    <div className="price-box">

      <h3>Price Per Hour</h3>

      <p>
        {
          quantity >= 100 && quantity <= 120
            ? '120$'
            : '100$'
        }
      </p>

    </div>

  </div>

  <div className="registration-note">

    ⏳ Large orders may require additional processing time

  </div>

</div>






 
 <div className="quantity-container">
  <h2 className="section-title">
    2. Choose Number of Prints
  </h2>
   <div className="quantity-controls">

    

  <button
    className="quantity-btn"
    onClick={() => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }}
  >
    -
  </button>

  <div className="quantity-number">
    {quantity}
  </div>

  <button
    className="quantity-btn"
    onClick={() => setQuantity(quantity + 1)}
  >
    +
  </button>

</div>

<div className="discount-boxes">

  <div className="discount-card">
    <h3>1 - 50</h3>
    <p>No Discount</p>
  </div>

  <div className="discount-card">
    <h3>51 - 100</h3>
    <p>10% OFF</p>
  </div>

  <div className="discount-card">
    <h3>100+</h3>
    <p>20% OFF</p>
  </div>

</div>

  </div>





  <div className="location-container">

  <h3>3. Choose Location</h3>

     

  <select
  className="location-select"
  value={location}
  onChange={(e) =>
    setLocation(e.target.value)
  }
>

  <option value="">
    Select your location
  </option>

  <option>Beirut</option>

  <option>Tripoli (North Lebanon)</option>

  <option>Sidon</option>

  <option>Tyre</option>

  <option>Zahle (Bekaa Valley)</option>

  <option>Baalbek</option>

</select>

</div>




<div className="datetime-container">

  <h3>4. Choose Date and Time</h3>



  <div className="datetime-buttons">

    <input
      type="date"
      className="date-btn"
    />

    <input
      type="time"
      className="time-btn"
    />

  </div>

  <div className="availability-text">

    <span className="clock-icon">
      🕒
    </span>

    <p>
      We are available from 10:00 AM to 8:00 PM
    </p>

    

  </div>

</div>





      <div className="options-container">

  <h3>5. Additional Options</h3>

 

  <div className="option-card">

    <div>

      <h4>Express Delivery</h4>

      <p>Get your order faster</p>

    </div>

    <div className="option-right">

      <span>+20.00$</span>

      <input
        type="checkbox"
        className="checkbox"
        onChange={(e) =>
            setExpressDelivery(
      e.target.checked
    )
        }
      />

    </div>

  
  </div>

  {/* UPLOAD IMAGE */}

  <div className="option-card">

    <div>

      <h4>
        Upload Reference Image

        <span className="optional-text">
          (Optional)
        </span>

      </h4>

      <p>helps us match your vision</p>

    </div>

    <label className="upload-btn">

      Upload ⬆

      <input
        type="file"
        hidden
      />

    </label>

  </div>

  {/* ADD NOTE */}

  <div className="option-card">

    <div>

      <h4>
        Add a Note

        <span className="optional-text">
          (Optional)
        </span>

      </h4>

      <p>Any special requests?</p>

    </div>

    <input
      type="checkbox"
      className="checkbox"
    />

  </div>

  {/* NOTE INPUT */}

  <textarea
    className="note-input"
    placeholder="Write your note here..."
  />

  {/* PLACE ORDER BUTTON */}

  <button className="place-order-btn">

    Place Your Order

  </button>

   </div>






 <div className="summary-container">

  <h2>Order Summary</h2>

  <div className="summary-row">

  <span className="gray-text">
    Registration Time
  </span>

  <span>
    {hours} Hours
  </span>

  <span>
    {subtotal.toFixed(2)}$
  </span>

</div>
  <div className="summary-row">

    <span className="gray-text">
      Quantity
    </span>

    <span>{quantity}</span>

  </div>

  <div className="summary-row">

    <span className="gray-text">
      Discount
    </span>

    <span>

      {discountPercent === 0
        ? 'No Discount'
        : `${discountPercent}% OFF`}

    </span>

    <span>
      -{discountAmount.toFixed(2)}$
    </span>

  </div>

  <div className="summary-row">

    <span className="gray-text">
      Delivery
    </span>

    <span>{location}</span>

    <span>5.00$</span>

  </div>

  <div className="summary-row">

    <span className="gray-text">
      Express Delivery
    </span>

    <span>
      {expressDelivery ? 'Yes' : 'No'}
    </span>

    <span>

      {expressDelivery
        ? '+20.00$'
        : ''}

    </span>

  </div>

  <hr className="summary-line" />

  <div className="total-row">

    <h3>Total</h3>

    <h3>
      {total.toFixed(2)}$
    </h3>

  </div>

  {discountPercent > 0 && (

    <div className="saving-box">

      💳 You are saving
      {' '}
      {discountPercent}%
      {' '}
      with our bulk discount

    </div>

  )}

</div>





<div className="aboutus-container">

  <h2>The Spatial About US</h2>

  <div className="aboutus-card">

    <div className="about-icon">
      🖨️
    </div>

    <div>

      <h4>Premium Quality Prints</h4>

      <p>Museum-grade materials</p>

    </div>

  </div>

  <div className="aboutus-card">

    <div className="about-icon">
      🚚
    </div>

    <div>

      <h4>Secure and Fast Delivery</h4>

      <p>Safe delivery to your door</p>

    </div>

  </div>

  <div className="aboutus-card">

    <div className="about-icon">
      ⏰
    </div>

    <div>

      <h4>24/7 Customer Support</h4>

      <p>We're here to help</p>

    </div>

  </div>

  <div className="aboutus-card">

    <div className="about-icon">
      ⭐
    </div>

    <div>

      <h4>100% Satisfaction</h4>

      <p>High quality guaranteed</p>

    </div>

  </div>

</div>





<div className="help-container">

  <h2>Need Help?</h2>

  <p>
    Have a question or custom request?
  </p>

  <a
    href="https://wa.me/9618102017500S"
    target="_blank"
    rel="noreferrer"
    className="contact-btn"
  >

    💬 Contact Us

  </a>

</div>
</div>
 

);

};


export default Info;