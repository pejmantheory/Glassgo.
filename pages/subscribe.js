// pages/subscribe.js

import React from 'react';
import Layout from '../components/Layout'; // Ensure the import path is correct
import styles from '../styles/Subscribe.module.css';

const Subscribe = () => {
  return (
    <Layout> {/* The isHomepage prop is not passed here, as it's not needed */}
      <div className={styles.subscribeContainer}>
        <h1 className={styles.title}>Recycle more, hassle less</h1>
        <div className={styles.plan}>
          <img src="/Bag.svg" alt="Recycling Bag" className={styles.planImage} />
          <h2 className={styles.price}>Pick Twice Weekly - $5.99</h2>
          <p className={styles.description}>
            Twice-weekly doorstep bottle pickup and 8 monthly bags for effortless recycling with GlassGo.
          </p>
          <button
            className={styles.subscribeButton}
            onClick={() => window.location.href = 'https://buy.stripe.com/6oE9Eu4LM71v8i4000'}
          >
            Pick-up My Glasses
          </button>
        </div>
        <div className={styles.plan}>
          <img src="/Bag.svg" alt="Recycling Bag" className={styles.planImage} />
          <h2 className={styles.price}>Tri-Weekly Treasures - $7.99</h2>
          <p className={styles.description}>
            Enjoy premium features with our best value plan. Three weekly pickups, 12 bags monthly.
          </p>
          <button
            className={styles.subscribeButton}
            onClick={() => window.location.href = 'https://buy.stripe.com/9AQeYObaa1Hb8i4289'}
          >
            Pick-up My Glasses
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Subscribe;
