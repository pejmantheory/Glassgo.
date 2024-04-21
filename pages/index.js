// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img src="https://i.postimg.cc/jn5qj5FF/Glass-Go.png" alt="GlassGo Logo" className={styles.logo} />
          </a>
        </Link>
        <nav>
          <Link href="/about"><a>About Us</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to GlassGo</h1>

        <p className={styles.description}>
          Choose your sustainable living plan.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Monthly Plan - $4.99</h2>
            <p>Includes 10 GlassGo bags</p>
            <p>Twice a week pickup</p>
            <Link href="/subscribe">
              <a className={styles.subscribeButton}>Subscribe</a>
            </Link>
          </div>

          <div className={styles.card}>
            <h2>Premium Plan - $6.99</h2>
            <p>Includes 12 GlassGo bags</p>
            <p>Three times a week pickup</p>
            <Link href="/subscribe" className={styles.subscribeButton}>Subscribe</Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 GlassGo. All rights reserved.</p>
      </footer>
    </div>
  );
}
