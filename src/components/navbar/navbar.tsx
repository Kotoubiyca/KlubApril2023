import styles from './navbar.module.scss';
import Link from "next/link";

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.navbarItem}>
        <Link href="/#investments">
          <div className={styles.navbarItemContent}>
            <div className={styles.navbarItemText}>
              Investments
            </div>
            <div className={`${styles.navbarItemText} ${styles.navbarItemText__twin}`}>
              Investments
            </div>
          </div>
        </Link>
      </li>
      <li className={styles.navbarItem}>
        <Link href="/#news">
          <div className={styles.navbarItemContent}>
            <div className={styles.navbarItemText}>
              News
            </div>
            <div className={`${styles.navbarItemText} ${styles.navbarItemText__twin}`}>
              News
            </div>
          </div>
        </Link>
      </li>
      <li className={styles.navbarItem}>
        <Link href="/#about">
          <div className={styles.navbarItemContent}>
            <div className={styles.navbarItemText}>
              About
            </div>
            <div className={`${styles.navbarItemText} ${styles.navbarItemText__twin}`}>
              About
            </div>
          </div>
        </Link>
      </li>
      <li className={styles.navbarItem}>
        <Link href="/#contact">
          <div className={styles.navbarItemContent}>
            <div className={styles.navbarItemText}>
              Contact
            </div>
            <div className={`${styles.navbarItemText} ${styles.navbarItemText__twin}`}>
              Contact
            </div>
          </div>
        </Link>
      </li>
      <li className={`${styles.navbarItem} ${styles.navbarHiring}`}>
        <Link href="https://google.com" target="_blank">
          <div className={styles.navbarItemContent}>
            <div className={styles.navbarItemText}>
              We’re hiring!
            </div>
            <div className={`${styles.navbarItemText} ${styles.navbarItemText__twin}`}>
              We’re hiring!
            </div>
          </div>
        </Link>
      </li>
    </ul>
  )
}
