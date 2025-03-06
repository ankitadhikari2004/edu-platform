import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const Settings = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const lastPath = pathSegments[pathSegments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="px-6 py-2">
      <h2 className="text-2xl font-semibold mb-4">{lastPath}</h2>
      <Outlet />
    </div>
  );
};
