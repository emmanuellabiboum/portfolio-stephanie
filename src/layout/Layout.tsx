import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar.js';

export default function Layout() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="relative font-sans min-h-screen">
      {!isContactPage && <Navbar />}
      <main role="main" className="pt-16 sm:pt-20">
        <Outlet />
      </main>
    </div>
  );
}
