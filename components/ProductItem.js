import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import productStyles from '../styles/ProductItem.module.css';

function ProductItem({ product }) {
  return (
    <Card className={productStyles.card}>
      <CardMedia
        component='img'
        height='40'
        image={product.image}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {product.product_name}
        </Typography>
        <Typography variant='body2' color='text.secondary'></Typography>
      </CardContent>
    </Card>
  );
}

export default ProductItem;
