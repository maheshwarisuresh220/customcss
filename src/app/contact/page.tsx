// src/contact/page.tsx

import styles from '../style.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className={styles.contact}>
        <h2>Get in Touch</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
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

export default ContactPage;
