import styles from "./desc1.module.css";
const Desc1 = () => {
  return (
    <div className={styles.contHead}>
      <div className={styles.headDiv}>
        <div className={styles.locations}>
          <h3>EVENT OVERVIEW</h3>
        </div>
        <div className={styles.city}>
          <h1>The Global</h1>
        </div>
        <div className={styles.city}>
          <h1>Internet Economy</h1>
        </div>
        <div className={styles.state}>
          <h1>Conference</h1>
        </div>
      </div>

      <div className={styles.para}>
        <p>
          Stripe Sessions brings together business leaders and builders to
          discuss the most important internet economy trends. In 2024, we’re
          focusing on what’s possible—and what’s inevitable—as technological
          advancements change the world and the global economy with it.
        </p>
      </div>
    </div>
  );
};
export default Desc1;
