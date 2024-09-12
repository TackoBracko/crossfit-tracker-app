import { Outlet } from 'react-router-dom';
import AppNavigation from '../components/AppNavigation';

export default function RootLayout() {
  return (
    <div className="container">
      <AppNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
