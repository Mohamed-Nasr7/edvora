import React, { useReducer, useContext } from 'react';
import FiltersDropdown from './FiltersDropdown';
import { ProductsContext } from '../pages';
import FiltersStyles from '../styles/Filters.module.css';

function Filters() {
  const initialState = {
    firstAnchorEl: null,
    secondAnchorEl: null,
    thirdAnchorEl: null,
  };
  const [anchorElements, dispatch] = useReducer(reducer, initialState);
  const productsContext = useContext(ProductsContext);

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

  const open = Object.values(anchorElements);

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
        {[
          {
            label: 'Products',
            action: 'FIRST_EL',
          },
          {
            label: 'State',
            action: 'SECOND_EL',
          },
          {
            label: 'City',
            action: 'THIRD_EL',
          },
        ].map((item, index) => (
          <FiltersDropdown
            label={item.label}
            action={item.action}
            handleClick={handleClick}
            handleClose={handleClose}
            open={open[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Filters;
