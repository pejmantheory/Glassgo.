import React from 'react';
import Header from './Header';
import Footer from './Footer';
import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children, isHomepage }) => {
  return (
    <div className={layoutStyles.layout}>
      <Header isHomepage={isHomepage} /> {/* Pass isHomepage prop to Header */}
      <main className={layoutStyles.mainContent}>
        {children}
      </main>
      <div className={layoutStyles.footerWrapper}> {/* Footer now within a wrapper */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
