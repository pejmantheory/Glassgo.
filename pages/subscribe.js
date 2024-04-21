// pages/subscribe.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Subscribe.module.css'; // Ensure the CSS module exists and is properly linked

const Subscribe = () => {
  return (
    <div className={styles.subscribeContainer}>
      <h1>Choose Your Plan</h1>
      <div className={styles.plan}>
        <h2>Monthly Plan - $4.99</h2>
        <p>Get access to our service with a convenient monthly plan.</p>
        {/* Use the Link component correctly by passing the URL and using a button as a child */}
        <Link href="/paymentPlan499" passHref>
          <button className={styles.subscribeButton}>Subscribe Now</button>
        </Link>
      </div>
      <div className={styles.plan}>
        <h2>Premium Plan - $6.99</h2>
        <p>Enjoy premium features with our best value plan.</p>
        {/* Use the Link component correctly by passing the URL and using a button as a child */}
        <Link href="/paymentPlan699" passHref>
          <button className={styles.subscribeButton}>Subscribe Now</button>
        </Link>
      </div>
      {/* Add more plans as needed */}
    </div>
  );
};

export default Subscribe;
