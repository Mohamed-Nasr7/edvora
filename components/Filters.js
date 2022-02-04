import FiltersStyles from '../styles/Filters.module.css';
import { Button, Menu, MenuItem } from '@mui/material';

function Filters() {
  return (
    <div>
      <div className={FiltersStyles.container}>
        <p className={FiltersStyles.title}>Filters</p>
      </div>
    </div>
  );
}

export default Filters;
