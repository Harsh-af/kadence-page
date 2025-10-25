import React, { useState, useEffect } from 'react';
import Price from './Price';
import PriceDiscount from './PriceDiscount';
import DiscountPercentage from './DiscountPercentage';

function SliderView() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const products = [
    {
      id: 1,
      image: '/Images/Product_1.png',
      title: 'Acoustic Left Handed Guitar wooden texture',
      currentPrice: '₹4,899.00',
      originalPrice: '₹7,506.00',
      discount: '35% OFF'
    },
    {
      id: 2,
      image: '/Images/Product_2.png',
      title: 'Donner HUSH™ I Acoustic-Electric Travel Guitar',
      currentPrice: '₹6,299.00',
      originalPrice: '₹8,999.00',
      discount: '30% OFF'
    },
    {
      id: 3,
      image: '/Images/Product_3.png',
      title: 'Donner HUSH™ X PRO Electric Guitar',
      currentPrice: '₹5,499.00',
      originalPrice: '₹7,999.00',
      discount: '31% OFF'
    },
    {
      id: 4,
      image: '/Images/Product_4.png',
      title: 'Donner HUSH™ C Nylon Acoustic-Electric Guitar',
      currentPrice: '₹8,499.00',
      originalPrice: '₹12,999.00',
      discount: '25% OFF'
    }
  ];

  const nextProduct = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const prevProduct = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const goToProduct = (index) => {
    if (isAnimating || index === currentProduct) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentProduct(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  // Handle arrow key navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        prevProduct();
      } else if (event.key === 'ArrowRight') {
        nextProduct();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="slider-view">
      <div className="slider-container">
        <div className="static-image">
          <div className="image-container">
            <img src="/Images/Image_sp.png" alt="Static Image" className="desktop-image" />
            <img src="/Images/Image_sp.png" alt="Static Image Mobile" className="mobile-image" />

            {/* PC Image Pointers */}
            <div className="image-pointers desktop-pointers">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`image-pointer ${index === currentProduct ? 'active' : ''}`}
                  onClick={() => goToProduct(index)}
                  aria-label={`Go to product ${index + 1}`}
                  style={{
                    position: 'absolute',
                    // Rough positions for 4 products - you can adjust these
                    left: index === 0 ? '15%' : index === 1 ? '35%' : index === 2 ? '55%' : '75%',
                    top: index === 0 ? '40%' : index === 1 ? '25%' : index === 2 ? '60%' : '45%'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="product-slider">
          <div className="product-content">
            <div className={`product-info ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              <div className="product-image">
                <img src={products[currentProduct].image} alt="Product" />
              </div>

              <h3 className="product-title">
                {products[currentProduct].title}
              </h3>

              <div className="price-container">
                <Price>{products[currentProduct].currentPrice}</Price>
                <PriceDiscount>{products[currentProduct].originalPrice}</PriceDiscount>
                <DiscountPercentage>{products[currentProduct].discount}</DiscountPercentage>
              </div>
            </div>

            <div className="slider-navigation">
              <button className="nav-button" onClick={prevProduct}>
                <img src="/Images/nav_arrow_left.svg" alt="Previous" />
              </button>
              <button className="nav-button" onClick={nextProduct}>
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
