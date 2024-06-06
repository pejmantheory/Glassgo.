import React from 'react';
import Header from './Header';
import Footer from './Footer';
import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children, isHomepage }) => {
  return (
    <div className={layoutStyles.layout}>
      <Header isHomepage={isHomepage} /> {}
      <main className={layoutStyles.mainContent}>
        {children}
      </main>
      <div className={layoutStyles.footerWrapper}> {}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
