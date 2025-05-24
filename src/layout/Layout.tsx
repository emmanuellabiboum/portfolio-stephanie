import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function Layout() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="relative font-sans">
      {!isContactPage && <Navbar />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
