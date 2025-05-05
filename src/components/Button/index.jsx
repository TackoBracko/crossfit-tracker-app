import classes from './Button.module.css';

export default function Button({ children, variation, iconLeft, iconRight, onClick }) {
  let variationStyleBtn = '';

  if (variation === 'primary') {
    variationStyleBtn = classes.primary;
  } else if (variation === 'secondary') {
    variationStyleBtn = classes.secondary;
  } else if (variation === 'tertiary') {
    variationStyleBtn = classes.tertiary;
  } else if (variation === 'quaternary') {
    variationStyleBtn = classes.quaternary;
  } else if (variation === 'fifth') {
    variationStyleBtn = classes.fifth;
  }

  return (
    <button className={variation === 'tertiary' ? `${classes.tertiary}` : `${classes.base} ${variationStyleBtn}`} onClick={onClick}>
      {iconLeft && <span>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
}
