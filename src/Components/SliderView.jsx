import React from 'react';
import Price from './Price';
import PriceDiscount from './PriceDiscount';
import DiscountPercentage from './DiscountPercentage';

function SliderView() {
  return (
    <div className="slider-view">
      <div className="slider-container">
        <div className="static-image">
          <img src="/Images/Image_pc.png" alt="Static Image" />
        </div>
        
        <div className="product-slider">
          <div className="product-content">
            <div className="product-image">
              <img src="/Images/Product_guitar_copy.png" alt="Product" />
            </div>
            
            <h3 className="product-title">
              Acoustic Left Handed Guitar wooden texture
            </h3>
            
            <div className="price-container">
              <Price>₹4,899.00</Price>
              <PriceDiscount>₹7,506.00</PriceDiscount>
              <DiscountPercentage>35% OFF</DiscountPercentage>
            </div>
            
            <div className="slider-navigation">
              <button className="nav-button">
                <img src="/Images/nav_arrow_left.svg" alt="Previous" />
              </button>
              <button className="nav-button">
                <img src="/Images/nav_arrow_right.svg" alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderView;
