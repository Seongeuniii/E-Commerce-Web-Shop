import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();
  console.log(product.image)
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} title={product.name}></CardMedia>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant='hs' gutterBottom>
              {product.name}
            </Typography>
            <Typography variant='hs' gutterBottom>
              {product.price}
            </Typography>
          </div>
          <Typography variant='body2' color="textSecondary">{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cartActions}>
          <IconButton aria-label='Add to Cart'>
            <AddShoppingCart/>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Product;