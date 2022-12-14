import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from '../Products/Product/styles.js';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src=""
              alit="Commerce.js"
              height="25px"
              className={classes.image}
            />
            brand name here
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
