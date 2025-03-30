import classes from './DropDown.module.css';
import DropDownIcon from '../../components/Icons/DropDownIcon';
import { useState } from 'react';
import { crossfitData } from '../../data/CrossfitData';

export default function DropDownCalendar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={classes.dropdown}>
        <div className={classes.iconWrapper} onClick={toggleMenuOpen}>
          <DropDownIcon />
        </div>

        {isMenuOpen && (
          <ul className={classes.dropdownMenu}>
            <li className={classes.menuItem}>
              Categories
              <ul className={classes.subMenu}>
                {crossfitData.map((category) => {
                  return (
                    <li key={category.id} className={classes.subMenuItem}>
                      {category.title}
                    </li>
                  );
                })}
              </ul>
            </li>

            <li className={classes.menuItem}>Exercise</li>
            <li className={classes.menuItem}>Notes</li>
          </ul>
        )}
      </div>
    </>
  );
}
