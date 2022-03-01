import React from 'react';
import FiltersStyles from '../styles/Filters.module.css';
import { Button, Menu, MenuItem } from '@mui/material';

function FiltersDropdown({ label, action, handleClick, handleClose, open }) {
  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={event => handleClick('FIRST_EL', event)}
        className={FiltersStyles.dropdownBtn}
      >
        Products
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={open}
        open={open}
        onClose={() => handleClose('FIRST_EL')}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose('FIRST_EL')}>Profile</MenuItem>
        <MenuItem onClick={() => handleClose('FIRST_EL')}>My account</MenuItem>
        <MenuItem onClick={() => handleClose('FIRST_EL')}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default FiltersDropdown;
