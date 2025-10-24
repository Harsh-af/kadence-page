import React from 'react';

function PriceDiscount({ children }) {
  return (
    <span className="price-discount">
      {children}
    </span>
  );
}

export default PriceDiscount;
