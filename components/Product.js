import React from 'react';

function Product({ productName, data }) {
  return (
    <div>
      <h4>{productName}</h4>
      <hr />
      <div>Cards</div>
    </div>
  );
}

export default Product;
