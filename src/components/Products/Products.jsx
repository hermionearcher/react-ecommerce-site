import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running Shoes',
    price: '$5',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-nike-copy-1651164021.png?crop=1xw:1xh;center,top&resize=480:*',
  },
  {
    id: 2,
    name: 'Computer',
    description: 'Macbook Pro',
    price: '$25',
    image:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HA244?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1631831826000',
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid key={product.id} item xs={12} sm={6} m={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
