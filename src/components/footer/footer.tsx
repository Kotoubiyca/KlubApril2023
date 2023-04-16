import Link from "next/link";
import styles from './footer.module.scss'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  
  let ref = useRef(null)
  let section = useRef(null)
  
  useEffect(() => {
    gsap.fromTo(ref.current,
      {
        y: 500,
        autoAlpha: 0
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          start: 'top center+=120',
          trigger: section.current,
          toggleActions: "play pause pause reverse"
        }
      });
  }, []);
  
  return (
    <section className={`container ${styles.container}`} ref={section}>
      <div className={`container-inner ${styles.inner}`} ref={ref}>
        <div className={styles.left}>
          <h2 className={styles.title}>Let’s grow your business together.</h2>
          <ul className={styles.menuLinks}>
            <li className={styles.link}>
              <Link href="https://google.com">
                <div className={styles.linkContainer}>
                  <div className={styles.linkText}>
                    More about us
                  </div>
                  <div className={`${styles.linkText} ${styles.linkText__twin}`}>
                    More about us
                  </div>
                </div>
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="https://google.com">
                <div className={styles.linkContainer}>
                  <div className={styles.linkText}>
                    Get in touch
                  </div>
                  <div className={`${styles.linkText} ${styles.linkText__twin}`}>
                    Get in touch
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <ul className={`${styles.menu} ${styles.menuLeft}`}>
            <li className={styles.link}>
              <Link href="https://google.com">
                <div className={styles.linkContainer}>
                  <div className={styles.linkText}>
                    Join us
                  </div>
                  <div className={`${styles.linkText} ${styles.linkText__twin}`}>
                    Join us
                  </div>
                </div>
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="https://google.com">
                <div className={styles.linkContainer}>
                  <div className={styles.linkText}>
                    Apply for funding
                  </div>
                  <div className={`${styles.linkText} ${styles.linkText__twin}`}>
                    Apply for funding
                  </div>
                </div>
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="https://google.com" className={styles.linkedin}>
                <div className={styles.linkContainer}>
                  <div className={styles.linkText}>
                    LinkedIn
                  </div>
                  <div className={`${styles.linkText} ${styles.linkText__twin}`}>
                    LinkedIn
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.rightContent}>
            <p>Ventures is part of the Lely family office and an (independent but synergetic) sister company of Lely
              Industries. Learn more</p>
            <img src="/footer-logo.png" alt="lely" width={73} height={47}/>
          </div>
          <ul className={`${styles.menu} ${styles.menuRight}`}>
            <li>© 2023 N Ventures</li>
            <li className={styles.link}>
              <Link href="https://google.com">
                <div className={styles.linkContainer}>
                  <div className={styles.linkText}>
                    Privacy
                  </div>
                  <div className={`${styles.linkText} ${styles.linkText__twin}`}>
                    Privacy
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};
