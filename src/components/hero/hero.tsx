import styles from './hero.module.scss';
import {Marquee} from "@/components/marquee/marquee";
import gsap from 'gsap'
import {useEffect, useRef} from "react";

export const Hero = () => {
  let container = useRef(null)
  let food = useRef(null)
  let energy = useRef(null)
  
  gsap.registerPlugin({
    name: "gradient",
    init(target, value) {
      let forceDeg = value => ~value.indexOf("deg") ? value : (value = value.split("(")) && value.shift() + "(180deg, " + value.join("(");
      this.add(target.style, "backgroundImage", forceDeg(window.getComputedStyle(target).backgroundImage + ""), forceDeg(value));
    }
  });
  
  const initShowImage = ( items ) => {
    items.forEach((el) => {
      const image = el.current.querySelector('img');
      
      el.current.addEventListener('mouseenter', () => {
        gsap.to(image, { autoAlpha: 1 })
      })
      
      el.current.addEventListener('mouseleave', () => {
        gsap.to(image, { autoAlpha: 0 })
      })
      
      el.current.addEventListener('mousemove', (e) => {
        gsap.set(image, { x: e.offsetX - 100 })
      })
    })
  }

  useEffect(() => {
    gsap.to(container.current, {
      gradient: "linear-gradient(180deg, rgba(254,210,51,1) 0%, rgba(253,155,36,1) 100%)",
      duration: 10,
      repeat: 3,
      yoyo: true
    });
    
    initShowImage([food, energy])
  }, [])
  
  return (
    <section className={`container ${styles.container}`} ref={container}>
      <div className={`container-inner ${styles.inner}`}>
        <h1 className={styles.title}>
          No-nonsense funding for tech companies
          in <span className={styles.hoveredText} ref={food}> food <img src="/food.png"/> </span> and <span className={styles.hoveredText} ref={energy}>energy <img src="/energy.png"/></span>
        </h1>
        
        <p className={styles.text}>
          We partner with high-tech companies that drive sustainable transitions in food and energy, by providing funds, knowledge and network.
        </p>
        
        <button type="button" className={styles.btn}>our investments</button>
        
        <Marquee />
      </div>
    </section>
  )
}
