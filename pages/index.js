import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import homeStyles from '../styles/Home.module.css';
import footerStyles from '../styles/Footer.module.css';

export default function Home() {
  return (
    <Layout isHomepage={true}>
      <div className={homeStyles.container}>
        <main className={homeStyles.main}>
          <h1 className={homeStyles.title}>Glassgo.</h1>
          <p className={homeStyles.description}>
            Choose your glass bottle pick-up plan and help us keep the planet clean.
          </p>

          <section className={homeStyles.plans}>
            <Link href="/subscribe" passHref>
              <article className={homeStyles.card} role="button" tabIndex="0">
                <h2>Pick Twice Weekly - $5.99 <span className={homeStyles.smallText}>per month</span></h2>
                <p>Twice a week pickup</p>
                <p>Includes 8 Monthly Glassgo. bags</p>
                <div className={homeStyles.svgContainer}>
                  <img className={homeStyles.svgImage} src="/Bag.svg" alt="Bag Icon" />
                </div>
                <div className={homeStyles.button}>Subscribe</div>
              </article>
            </Link>

            <Link href="/subscribe" passHref>
              <article className={homeStyles.card} role="button" tabIndex="0">
                <h2>Tri-Weekly Treasures - $7.99 <span className={homeStyles.smallText}>per month</span></h2>
                <p>Three times a week pickup</p>
                <p>Enjoy three time weekly pick ups, Includes 12 Monthly Glassgo. bags</p>
                <div className={homeStyles.svgContainer}>
                  <img className={homeStyles.svgImage} src="/Bag2.svg" alt="Bag Icon" />
                </div>
                <div className={homeStyles.button}>Subscribe</div>
              </article>
            </Link>
          </section>
        </main>
      </div>
      <footer className={footerStyles.footer}>
        <p>© 2024 Glassgo LLC</p>
      </footer>
    </Layout>
  );
}
