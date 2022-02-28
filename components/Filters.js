import React, { useReducer } from 'react';
import FiltersStyles from '../styles/Filters.module.css';

function Filters() {
  const initialState = {
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

  const open = Object.values(anchorElements);
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
      </div>
    </div>
  );
}

export default Filters;
