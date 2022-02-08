import React, { useReducer } from 'react';
import FiltersStyles from '../styles/Filters.module.css';
import { Button, Menu, MenuItem } from '@mui/material';

function Filters() {
  initialState = {
    firstAnchorEl: null,
    secondAnchorEl: null,
    ThirdAnchorEl: null,
  };
  const [anchorElements, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case 'FIRST_EL':
        return { ...state, firstAnchorEl: action.payload };

      case 'SECOND_EL':
        return { ...state, secondAnchorEl: action.payload };

      case 'THIRD_EL':
        return { ...state, thirdAnchorEl: action.payload };

      default:
        return state;
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className={FiltersStyles.container}>
        <p className={FiltersStyles.title}>Filters</p>
        <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className={FiltersStyles.dropdownBtn}
        >
          Dashboard
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Filters;
