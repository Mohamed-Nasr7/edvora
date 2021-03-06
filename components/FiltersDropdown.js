import React, { useContext } from 'react';
import FiltersStyles from '../styles/Filters.module.css';
import { Button, Menu, MenuItem } from '@mui/material';
import { ProductsContext } from '../pages';

function FiltersDropdown({ label, action, handleClick, handleClose, open }) {
  const productsContext = useContext(ProductsContext);

  return (
    <>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={event => handleClick(action, event)}
        className={FiltersStyles.dropdownBtn}
      >
        {label}
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={open}
        open={open}
        onClose={() => handleClose(action)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose(action)}>Profile</MenuItem>
        <MenuItem onClick={() => handleClose(action)}>My account</MenuItem>
        <MenuItem onClick={() => handleClose(action)}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default FiltersDropdown;
