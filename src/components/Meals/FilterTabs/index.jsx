import { useContext } from 'react';
import Button from '../../Button';
import classes from './FilterTabs.module.css';
import { RecipeContext } from '../../../Context/RecipeContext';

export default function MealFilterTabs() {
  const { activeTab, changeActiveTab } = useContext(RecipeContext);

  const filterTabs = [
    {
      key: 'breakfast',
      label: 'Breakfast',
      icon: '🍳',
      description: 'The most important meal of the day, giving you energy and jump-starting your metabolism',
    },
    { key: 'lunch', label: 'Lunch', icon: '🥗', description: 'The main meal that refuels your body with essential nutrients and energy' },
    { key: 'dinner', label: 'Dinner', icon: '🍛', description: 'A lighter meal to end the day, helping your body recover and prepare for rest' },
    { key: 'dessert', label: 'Dessert', icon: '🍪', description: 'A sweet finish that brings joy and a little indulgence to your day' },
    {
      key: 'smoothie',
      label: 'Smoothie',
      icon: '🥤',
      description: 'A quick, nourishing drink packed with fruits and veggies, perfect for a snack or refreshment',
    },
  ];

  const activeTabDescription = filterTabs.find((tab) => tab.key === activeTab);

  return (
    <>
      <section className={classes.mealTabs}>
        {filterTabs.map((tab) => (
          <Button key={tab.key} variation="fifth" onClick={() => changeActiveTab(tab.key)}>
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </Button>
        ))}
      </section>
      {activeTabDescription && <p className={classes.mealDescription}>{activeTabDescription.description}</p>}
    </>
  );
}
