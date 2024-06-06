import React from 'react';
import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';

const Header = ({ isHomepage }) => {
  return (
    <header className={isHomepage ? `${headerStyles.header} ${headerStyles.homepageHeader}` : headerStyles.header}>
      <Link href="/">
        <img src="/GlassGo.svg" alt="GlassGo Logo" className={headerStyles.logo} />
      </Link>
    </header>
  );
};

export default Header;
