import { useContext } from 'react';
import { UserContext } from '../components/Context/UserContext';

export default function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Welcom, {user.name}</h1>
      <p>Weight: {user.weight}</p>
      <p>Height: {user.height}</p>
      <p>Age: {user.age}</p>
    </>
  );
}
