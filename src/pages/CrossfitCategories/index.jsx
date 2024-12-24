import classes from './CrossfitCategories.module.css';
import { NavLink, Link } from 'react-router-dom';
import lifting from './../../assets/icons/CrossfitIcons/Lift.png';
import legs from './../../assets/icons/CrossfitIcons/Legs.png';
import arms from './../../assets/icons/CrossfitIcons/Arms.png';
import shoulders from './../../assets/icons/CrossfitIcons/Shoulders.png';
import back from './../../assets/icons/CrossfitIcons/Back3.png';
import gymnastics from './../../assets/icons/CrossfitIcons/Gymnastics.png';
import skills from './../../assets/icons/CrossfitIcons/Skills2.png';
import engine from './../../assets/icons/CrossfitIcons/Engine2.png';
import core from './../../assets/icons/CrossfitIcons/Abs.png';
import BackBtn from '../../components/Icons/BackBtnIcon';

export default function CrossfitCategories() {
  return (
    <>
      <header className={classes.categories}>
        <Link to="/" className={classes.categoryBackBtn}>
          <BackBtn />
        </Link>
        <h1>Crossfit Categories</h1>
      </header>

      <section className={classes.categorySection}>
        <div className={classes.categoryBox}>
          <NavLink to="/categories/1">
            <div className={classes.categoryCard}>
              <img src={lifting} alt="Weight Icon" />
              <h3>Weightlifting</h3>
            </div>
          </NavLink>
        </div>

        <div className={classes.categoryBox}>
          <NavLink to="/categories/2">
            <div className={classes.categoryCard}>
              <img src={legs} alt="Leg Icon" />
              <h3>Legs</h3>
            </div>
          </NavLink>
        </div>

        <div className={classes.categoryBox}>
          <NavLink to="/categories/3">
            <div className={classes.categoryCard}>
              <img src={arms} alt="Arm Icon" />
              <h3>Arms</h3>
            </div>
          </NavLink>
        </div>

        <div className={classes.categoryBox}>
          <NavLink to="/categories/4">
            <div className={classes.categoryCard}>
              <img src={shoulders} alt="Shoulder Icon" />
              <h3>Shoulders</h3>
            </div>
          </NavLink>
        </div>

        <div className={classes.categoryBox}>
          <NavLink to="/categories/5">
            <div className={classes.categoryCard}>
              <img src={back} alt="Back Icon" />
              <h3>Back</h3>
            </div>
          </NavLink>
        </div>

        <div className={classes.categoryBox}>
          <NavLink to="/categories/6">
            <div className={classes.categoryCard}>
              <img src={gymnastics} alt="Gymnastics Icon" />
              <h3>Gymnastics</h3>
            </div>
          </NavLink>
        </div>

        <div className={classes.categoryBox}>
          <NavLink to="/categories/7">
            <div className={classes.categoryCard}>
              <img src={skills} alt="Jumping Rope" />
              <h3>Skills</h3>
            </div>
          </NavLink>
        </div>

        <div className={classes.categoryBox}>
          <NavLink to="/categories/8">
            <div className={classes.categoryCard}>
              <img src={engine} alt="Assult Bike" />
              <h3>Engine</h3>
            </div>
          </NavLink>
        </div>

        <div className={classes.categoryBox}>
          <NavLink to="/categories/9">
            <div className={classes.categoryCard}>
              <img src={core} alt="Abs Icon" />
              <h3>Core</h3>
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
}
