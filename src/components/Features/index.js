import React from 'react';
import { useParams } from 'react-router-dom';

import Profile from './Profile';
import Dashboard from './Dashboard';
import Record from './Record';

const Features = () => {
  const { id } = useParams();

  const Currentpage = () => {
    switch (id.toLowerCase()) {
      case 'profile':
        return <Profile />;
      case 'record':
        return <Record />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <h1>Pagina não encontrada</h1>;
    }
  };

  return (
    <>
      <Currentpage />
    </>
  );
};

export default Features;
