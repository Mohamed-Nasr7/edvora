import React, { useState, useEffect } from 'react';
import productStyles from '../styles/ProductCategory.module.css';
import ProductItem from './ProductItem';
import TablePagination from '@mui/material/TablePagination';

function ProductCategory({ productName, products }) {
  const [productsCount, setProductsCount] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    setProductsCount(products.length);
  }, []);

  const displayProducts = () => {
    let productsPerPage = [];
    for (let index = page * 4; index < page * 4 + 4; index++) {
      productsPerPage.push(products[index]);
    }
    return productsPerPage;
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  return (
    <div className={productStyles.container}>
      <h3 className={productStyles.title}>{productName}</h3>
      <div className={productStyles.cardsContainer}>
        {products &&
          displayProducts().map(item => (
            <ProductItem key={item.time} product={item} />
          ))}
      </div>
      {productsCount && (
        <TablePagination
          component='div'
          count={productsCount}
          page={page}
          rowsPerPage={4}
          onPageChange={handleChangePage}
        />
      )}
    </div>
  );
}

export default ProductCategory;
