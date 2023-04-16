import styles from './about.module.scss'

export const About = () => (
  <section className={`container ${styles.container}`} id={'about'}>
    <div className={`container-inner ${styles.inner}`}>
      <h5 className={styles.title}>About us</h5>
      <article className={styles.text}>
        <h6 className={styles.textTitle}>Long term vision</h6>
        <p className={styles.textContent}>
          As a family-funded VC, NV invests both in typical VC setup as well as for longer holding periods. That means we can easily adapt to changing business- and market developments, supporting the long-term development of sustainable businesses.
        </p>
      </article>
      <article className={styles.text}>
        <h6 className={styles.textTitle}>Active support</h6>
        <p className={styles.textContent}>
          As active shareholders we support our portfolio companies by sharing knowledge, network and experience. We draw on the family’s longstanding history in high-tech product development and successful market entry of innovations.
        </p>
      </article>
    </div>
  </section>
);
