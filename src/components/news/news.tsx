import styles from './news.module.scss'
import {gsap} from "gsap";
import {useEffect, useRef} from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const News = () => {
  let ref = useRef(null)
  let section = useRef(null)
  
  useEffect(() => {
    gsap.fromTo(ref.current,
      {
        y: -ref.current.clientHeight,
        autoAlpha: 0
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 2,
        ease: 'none',
        scrollTrigger: {
          start: 'top center+=120',
          trigger: section.current,
          toggleActions: "play pause pause reverse"
        }
      });
  }, []);
  
  return (
    <section className={`container ${styles.container}`} id="news" ref={section}>
      <div className={`container-inner ${styles.inner}`}>
        <div className={styles.imgContainer}>
          <img src="/news1.png" alt="Some text"/>
        </div>
        <div className={styles.textContainer} ref={ref}>
          <h5 className={styles.textTitle}>We believe technology is at the heart of the transition towards a sustainable
            future.</h5>
          <p>That’s why we focus on innovative hardware/software solutions that contribute to the well-being of future
            generations through the transition towards sustainable and efficient food and energy production systems.</p>
        </div>
      </div>
    </section>
  )
};
