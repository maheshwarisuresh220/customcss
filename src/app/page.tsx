// src/page.tsx

import Link from 'next/link';
import styles from './style.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Website</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <h2>Welcome to Our Website</h2>
        <p>Your tagline here</p>
        <Link href="/contact" className={styles.cta}>Get Started</Link>
      </section>

      <section className={styles.features}>
        <h3>Our Services</h3>
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <h4>Service 1</h4>
            <p>Description of Service 1</p>
          </div>
          <div className={styles.feature}>
            <h4>Service 2</h4>
            <p>Description of Service 2</p>
          </div>
          <div className={styles.feature}>
            <h4>Service 3</h4>
            <p>Description of Service 3</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h3>What Our Clients Say</h3>
        <div className={styles.testimonial}>
          <p>Great service! Highly recommend.</p>
          <span>- Client Name</span>
        </div>
        <div className={styles.testimonial}>
          <p>Absolutely loved working with them.</p>
          <span>- Client Name</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 My Website</p>
        <p>
          <span className={styles.linkedinHover}>SURESH MAHESHWARI</span>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
