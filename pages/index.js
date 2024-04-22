// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <img src="https://i.postimg.cc/jn5qj5FF/Glass-Go.png" alt="GlassGo Logo" className={styles.logo} />
        </Link>

      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>GlassGo.</h1>

        <p className={styles.description}>
          Choose your pick up plan.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Monthly Plan - $4.99</h2>
            <p>Includes 10 GlassGo bags</p>
            <p>Twice a week pickup</p>
            <Link href="/subscribe">
              <button className={styles.subscribeButton}>Subscribe</button>
            </Link>
          </div>

          <div className={styles.card}>
            <h2>Premium Plan - $6.99</h2>
            <p>Includes 12 GlassGo bags</p>
            <p>Three times a week pickup</p>
            <Link href="/subscribe">
              <button className={styles.subscribeButton}>Subscribe</button>
            </Link>
            <nav>
            </nav>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 GlassGo.</p>
      </footer>
    </div>
  );
}
