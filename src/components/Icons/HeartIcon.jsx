export default function HeartIcon({ filled = false, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill={filled ? 'red' : 'none'}
      stroke={filled ? 'red' : 'white'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="heart-icon"
      {...props}
    >
      <path d="M20.84 4.61c-1.54-1.73-4.04-1.91-5.77-.37L12 7.09l-3.06-2.85c-1.73-1.54-4.23-1.36-5.77.37-1.54 1.73-1.36 4.23.37 5.77L12 21.35l8.46-10.97c1.73-1.54 1.91-4.04.37-5.77z" />
    </svg>
  );
}
