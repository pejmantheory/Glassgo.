import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <img src="/GlassGo.svg" alt="GlassGo Logo" className={styles.logo} />
        </Link>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to GlassGo.</h1>

        <p className={styles.description}>
          Choose your pick up plan and help us keep the planet clean.
        </p>

        <section className={styles.plans}>
          <article className={styles.card}>
            <h2>Monthly Plan - $4.99</h2>
            <p>Includes 10 GlassGo. bags</p>
            <p>Twice a week pickup</p>
            <Link href="/subscribe">
              <button className={styles.button}>Subscribe</button>
            </Link>
          </article>

          <article className={styles.card}>
            <h2>Premium Plan - $6.99</h2>
            <p>Includes 12 GlassGo. bags</p>
            <p>Three times a week pickup</p>
            <Link href="/subscribe">
              <button className={styles.button}>Subscribe</button>
            </Link>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>©2024 GlassGo. All rights reserved.</p>
      </footer>
    </div>
  );
}
