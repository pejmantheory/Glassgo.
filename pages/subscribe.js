import React from 'react';
import styles from '../styles/Subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={styles.subscribeContainer}>
      <h1 className={styles.title}>Recycle more, hassle less</h1> {/* Apply styles.title here */}
      <div className={styles.plan}>
        <img src="/Bag.svg" alt="Bag" className={styles.planImage} />
        <h2 className={styles.price}>Monthly Plan - $4.99</h2> {/* Apply styles.price if you have for h2 */}
        <p className={styles.description}>Twice-weekly doorstep bottle pickup and 8 monthly bags for effortless recycling with GlassGo.</p>
        <button
          className={styles.subscribeButton}
          onClick={() => window.location.href = 'https://buy.stripe.com/6oE9Eu4LM71v8i4000'}
        >
          Subscribe Now
        </button>
      </div>
      <div className={styles.plan}>
        <img src="/Bag.svg" alt="Bag" className={styles.planImage} />
        <h2 className={styles.price}>Premium Plan - $6.99</h2> {/* And also here */}
        <p className={styles.description}>Enjoy premium features with our best value plan.Three weekly pickups, 12 bags monthly.</p>
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
