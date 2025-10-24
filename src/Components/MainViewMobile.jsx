import React, { useState } from 'react';
import Price from './Price';
import PriceDiscount from './PriceDiscount';
import DiscountPercentage from './DiscountPercentage';

function MainViewMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      image: '/Images/guitar_1_sp.png',
      title: 'Acoustic Left Handed Guitar Wooden texture...',
      currentPrice: '₹4,899.00',
      originalPrice: '₹7,506.00',
      discount: '25%',
      buttonText: 'Shop now'
    },
    {
      id: 2,
      image: '/Images/guitar_2_sp.png',
      title: 'Electric Guitar Red with Accessories',
      currentPrice: '₹6,299.00',
      originalPrice: '₹8,999.00',
      discount: '30%',
      buttonText: 'Shop now'
    },
    {
      id: 3,
      image: '/Images/guitar_1_sp.png',
      title: 'Classic Acoustic Guitar Premium',
      currentPrice: '₹5,499.00',
      originalPrice: '₹7,999.00',
      discount: '31%',
      buttonText: 'Shop now'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="main-view_sp">
      <div className="title-container_sp">
        <h1 className="main-title_sp">Back to school</h1>
        <img src="/Images/music_icon.svg" alt="Music Icon" className="music-icon_sp" />
      </div>
      <p className="main-subtitle_sp">
        Find the perfect instrument for your musical journey
      </p>
      <div className="main-image-container_sp">
        <img src="/Images/Image_sp.png" alt="Main Image Mobile" className="main-image_sp" />
      </div>
      <div className="mobile-product-slider_sp">
        <div className="mobile-slider-container_sp">
          <div className="mobile-slider-track_sp" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {products.map((product, index) => (
              <div key={product.id} className="mobile-product-card_sp">
                <div className="mobile-product-image_sp">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="mobile-product-info_sp">
                  <h3 className="mobile-product-title_sp">
                    {product.title}
                  </h3>

                  <div className="mobile-price-container_sp">
                    <Price>{product.currentPrice}</Price>
                    <PriceDiscount>{product.originalPrice}</PriceDiscount>
                    <DiscountPercentage>{product.discount}</DiscountPercentage>
                  </div>

                  <button className="mobile-shop-now-button_sp">
                    {product.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainViewMobile;
