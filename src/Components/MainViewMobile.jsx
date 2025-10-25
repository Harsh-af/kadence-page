import React, { useState, useEffect, useRef, useCallback } from 'react';
import Price from './Price';
import PriceDiscount from './PriceDiscount';
import DiscountPercentage from './DiscountPercentage';

function MainViewMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

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
    },
    {
      id: 4,
      image: '/Images/guitar_2_sp.png',
      title: 'Electric Guitar Red with Accessories',
      currentPrice: '₹6,299.00',
      originalPrice: '₹8,999.00',
      discount: '30%',
      buttonText: 'Shop now'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev >= products.length - 1) {
        return 0; // Loop back to start
      }
      return prev + 1;
    });
  }, [products.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev <= 0) {
        return products.length - 1; // Loop to end
      }
      return prev - 1;
    });
  }, [products.length]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < products.length) {
      setCurrentSlide(index);
    }
  }, [products.length]);

  // Handle arrow key navigation for mobile view
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [nextSlide, prevSlide]);

  // Handle touch/swipe functionality
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let startY = 0;
    let isScrolling = false;
    let isDragging = false;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isScrolling = false;
      isDragging = false;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) {
        const deltaX = Math.abs(e.touches[0].clientX - startX);
        const deltaY = Math.abs(e.touches[0].clientY - startY);
        isScrolling = deltaY > deltaX;
        isDragging = deltaX > 10 || deltaY > 10;
      }
    };

    const handleTouchEnd = (e) => {
      if (!isScrolling && isDragging) {
        const endX = e.changedTouches[0].clientX;
        const deltaX = endX - startX;
        const threshold = 30;

        if (Math.abs(deltaX) > threshold) {
          if (deltaX > 0) {
            prevSlide();
          } else {
            nextSlide();
          }
        }
      }
      isDragging = false;
    };

    slider.addEventListener('touchstart', handleTouchStart, { passive: true });
    slider.addEventListener('touchmove', handleTouchMove, { passive: true });
    slider.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

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
        <div className="mobile-image-container">
          <img src="/Images/Image_sp.png" alt="Main" className="main-image_sp" />

          {/* Mobile Image Pointers */}
          <div className="image-pointers mobile-pointers">
            {products.map((_, index) => (
              <button
                key={index}
                className={`image-pointer mobile-image-pointer ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  position: 'absolute',
                  // Rough positions for 4 products on mobile - you can adjust these
                  left: index === 0 ? '20%' : index === 1 ? '40%' : index === 2 ? '60%' : '80%',
                  top: index === 0 ? '35%' : index === 1 ? '20%' : index === 2 ? '50%' : '65%'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mobile-product-slider_sp">
        <div className="mobile-slider-container_sp" ref={sliderRef}>
          <div className="mobile-slider-track_sp" style={{ transform: `translateX(-${currentSlide * 280}px)` }}>
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
