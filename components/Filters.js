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

  const firstOpen = Boolean(anchorElements.firstAnchorEl);
  //const [anchorEl, setAnchorEl] = React.useState(null);
  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleClick = (action, event) => {
    dispatch({
      type: action,
      payload: event.currentTarget,
    });
  };

  const handleClose = action => {
    dispatch({
      type: action,
      payload: null,
    });
  };

  return (
    <div>
      <div className={FiltersStyles.container}>
        <p className={FiltersStyles.title}>Filters</p>
        <Button
          id='basic-button'
          aria-controls={firstOpen ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={firstOpen ? 'true' : undefined}
          onClick={event => handleClick('FIRST_EL', event)}
          className={FiltersStyles.dropdownBtn}
        >
          Dashboard
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={firstOpen}
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
