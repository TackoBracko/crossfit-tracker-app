import { useContext } from 'react';
import classes from './FilterTabs.module.css';
import { RecipeContext } from '../../../Context/RecipeContext';

export default function MealFilterTabs({ showAllTabs = false }) {
  const { activeTab, changeActiveTab } = useContext(RecipeContext);
  const isAllTabs = showAllTabs;

  const filterTabs = isAllTabs
    ? [
        { key: 'All', label: 'All', icon: '🌍' },
        { key: 'Breakfast', label: 'Breakfast', icon: '🍳' },
        { key: 'Lunch', label: 'Lunch', icon: '🥗' },
        { key: 'Dinner', label: 'Dinner', icon: '🍽️' },
        { key: 'Dessert', label: 'Dessert', icon: '🍪' },
        { key: 'Chicken', label: 'Chicken', icon: '🍗' },
        { key: 'Beef', label: 'Beef', icon: '🥩' },
        { key: 'Pork', label: 'Pork', icon: '🥓' },
        { key: 'Pasta', label: 'Pasta', icon: '🍝' },
        { key: 'Salmon', label: 'Salmon', icon: '🐟' },
      ]
    : [
        { key: 'Breakfast', label: 'Breakfast', icon: '🍳' },
        { key: 'Chicken', label: 'Chicken', icon: '🍗' },
        { key: 'Beef', label: 'Beef', icon: '🥩' },
        { key: 'Pork', label: 'Pork', icon: '🥓' },
        { key: 'Pasta', label: 'Pasta', icon: '🍝' },
        { key: 'seafood', label: 'Saefood', icon: '🐟' },
        { key: 'Dessert', label: 'Dessert', icon: '🍪' },
      ];

  return (
    <>
      <section className={classes.mealTabs}>
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            className={`${classes.tabBtns} ${activeTab === tab.key ? classes.activeTab : ''}`}
            onClick={() => changeActiveTab(tab.key)}
          >
            <span>{tab.icon} </span>
            <span>{tab.label}</span>
          </button>
        ))}
      </section>
    </>
  );
}

/*const filterTabs = [
    {
      key: 'breakfast',
      label: 'Breakfast',
      icon: '🍳',
      description: 'The most important meal of the day, giving you energy and jump-starting your metabolism',
    },
    { key: 'L', label: 'Lunch', icon: '🥗', description: 'The main meal that refuels your body with essential nutrients and energy' },
    { key: 'Dinner', label: 'Dinner', icon: '🍛', description: 'A lighter meal to end the day, helping your body recover and prepare for rest' },
    { key: 'Dessert', label: 'Dessert', icon: '🍪', description: 'A sweet finish that brings joy and a little indulgence to your day' },
    C
    B key: 'smoothie',
    P label: 'Smoothie',
    P icon: '🥤',
    S description: 'A quick, nourishing drink packed with fruits and veggies, perfect for a snack or refreshment',
    },
  ];*/
