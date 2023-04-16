import styles from './investments.module.scss'
import {gsap} from "gsap";
import React, { useRef, useEffect, createRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Investments = () => {
  const items = [
    {
      img: '/investmens1.png',
      title: 'Autonomous greenhouses',
      linkText: 'SAIA Agrobotics'
    },
    {
      img: '/investmens2.png',
      title: 'Autonomous agricultural robots',
      linkText: 'Zenon Energy'
    },
    {
      img: '/investmens3.png',
      title: 'Large battery energy storage systems based on titanium and LFP chemistry',
      linkText: 'Ekobot'
    },
  ]
  const target = useRef(items.map(() => createRef()))
  let section = useRef(null)
  
  useEffect(() => {
    target.current.forEach((el, index) => {
      gsap.fromTo(target.current[index],
        {
          y: !(index % 2) ? -200 : 200,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'Power1.easeInOut',
          scrollTrigger: {
            start: 'top center+=100',
            trigger: section.current,
            toggleActions: "play pause pause reverse"
          },
          stagger: 0.5
        });
    })
  });
  
  return (
    <section className="container">
      <div className={`container-inner ${styles.inner}`} ref={section}>
        <h2 className={styles.title}>Investments</h2>
        <button type="button" className={styles.link}>
          <div className={styles.linkContainer}>
            <div className={styles.linkText}>
              View all
            </div>
            <div className={`${styles.linkText} ${styles.linkText__twin}`}>
              View all
            </div>
          </div>
        </button>
        
        <div className={styles.items}>
          {items.map((item, index) => (
            <div className={styles.item} key={index} ref={e => target.current[index] = e}>
              <img src={item.img} alt={item.title}/>
              <h6>{item.title}</h6>
              <div>
                <button type="button" className={styles.link}>
                  <div className={styles.linkContainer}>
                    <div className={styles.linkText}>
                      {item.linkText}
                    </div>
                    <div className={`${styles.linkText} ${styles.linkText__twin}`}>
                      {item.linkText}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  </section>
  )
};
