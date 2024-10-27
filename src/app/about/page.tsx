// src/about/page.tsx

import styles from '../style.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Us</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className={styles.about}>
        <h2>Our Mission</h2>
        <p>
          We strive to deliver the best services to our clients and ensure their satisfaction.
        </p>
        
        <h3>Meet the Team</h3>
        <p>Our team consists of skilled professionals dedicated to excellence.</p>
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

export default AboutPage;
