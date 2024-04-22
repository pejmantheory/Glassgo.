import React from 'react';
import styles from '../styles/Subscribe.module.css'; 
const Subscribe = () => {
  return (
    <div className={styles.subscribeContainer}>
      <h1>Choose Your Plan</h1>
      <div className={styles.plan}>
        <h2>Monthly Plan - $4.99</h2>
        <p>Get access to our service with a convenient monthly plan.</p>
        <button
          className={styles.subscribeButton}
          onClick={() => window.location.href = 'https://buy.stripe.com/6oE9Eu4LM71v8i4000'}
        >
          Subscribe Now
        </button>
      </div>
      <div className={styles.plan}>
        <h2>Premium Plan - $6.99</h2>
        <p>Enjoy premium features with our best value plan.</p>
        <button
          className={styles.subscribeButton}
          onClick={() => window.location.href = 'https://buy.stripe.com/9AQeYObaa1Hb8i4289'}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
