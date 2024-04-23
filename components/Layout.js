// components/Layout.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children, isHomepage }) => { // Add isHomepage prop
  return (
    <div className={layoutStyles.layout}>
      <Header isHomepage={isHomepage} /> {/* Pass isHomepage prop to Header */}
      <main className={layoutStyles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
