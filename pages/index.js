// pages/index.js

import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout isHomepage={true}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>GlassGo.</h1>
          <p className={styles.description}>
            Choose your glass bottle pick up plan and help us keep the planet clean.
          </p>

          <section className={styles.plans}>
            <Link href="/subscribe" passHref>
              <article className={styles.card} role="button" tabIndex="0">
                <h2>Pick Twice Weekly - <span className={styles.price}>$5.99</span></h2>
                <p>Twice a week pickup</p>
                <p>Includes 8 GlassGo. bags</p>
                <div className={styles.svgContainer}>
                  <img src="/Bag.svg" alt="Bag Icon" />
                </div>
                <div className={styles.button}>Subscribe</div>
              </article>
            </Link>

            <Link href="/subscribe" passHref>
              <article className={styles.card} role="button" tabIndex="0">
                <h2>Tri-Weekly Treasures - <span className={styles.price}>$7.99</span></h2>
                <p>Three times a week pickup</p>
                <p>Enjoy three time weekly pick ups, Includes 12 Monthly GlassGo. bags</p>
                <div className={styles.svgContainer}>
                  <img src="/Bag.svg" alt="Bag Icon" />
                </div>
                <div className={styles.button}>Subscribe</div>
              </article>
            </Link>
          </section>
        </main>
      </div>
    </Layout>
  );
}
