import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Jordan', description: 'Nike jordan.', price: '$5', image: 'https://cdn.eyesmag.com/content/uploads/sliderImages/2020/10/27/nike-airjordan-1-mid-co-jp-midnight-navy-01-3974e90c-a5e3-4604-b792-da028eeda654.jpg' },
  { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://cdn.codingworldnews.com/news/photo/202102/img_2570_0.png' },
]

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;