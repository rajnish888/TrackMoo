import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="app-container">
      {currentPath === '/signup' && <Header />}
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
