import { useContext } from 'react';
import { Context } from '../components/Context';

export default function HomePage() {
  const { user } = useContext(Context);

  return (
    <>
      <h1>Welcom, {user.name}</h1>
      <p>Weight: {user.weight}</p>
      <p>Height: {user.height}</p>
      <p>Age: {user.age}</p>
    </>
  );
}
