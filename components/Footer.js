import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2025 Glassgo LLC</p>
            <div className={styles.companyContainer}>
                <span className={styles.companyText}>a</span>
                <a href="https://helloblue.ai/">
                    <img src="/Logo.svg" alt="Helloblue Logo" className={styles.logo} />
                </a>
                <span className={`${styles.companyText} ${styles.companyTextHigher}`}>company</span>
            </div>
        </footer>
    );
}
