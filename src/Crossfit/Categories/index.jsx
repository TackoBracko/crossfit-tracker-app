import classes from './CrossfitCategories.module.css';
import { crossfitData } from '../data/CrossfitData';
import { NavLink } from 'react-router-dom';

export default function CrossfitCategories() {
  return (
    <>
      <section className={classes.categorySection}>
        <h1>Crossfit Categories</h1>
        {crossfitData.map((category) => {
          return (
            <div key={category.id} className={classes.categoryBox}>
              <NavLink to={`/categories/${category.id}`}>
                <div className={classes.categoryCard}>
                  <img src={category.icon} alt="Body Region Icon" />
                  <h3>{category.title}</h3>
                </div>
              </NavLink>
            </div>
          );
        })}
      </section>
    </>
  );
}
