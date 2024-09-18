import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Index';

export default function RootLayout() {
  return (
    <div className="container">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
