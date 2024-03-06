import styles from "./hero.module.css";
const Hero = () => {
  return (
    <div className={styles.heroClass}>
      <div>
        <h1 className={styles.heroHead1}>Sessions</h1>
      </div>
      <div>
        <h1 className={styles.heroHead2}>April 23-25</h1>
      </div>
      <div>
        <h1 className={styles.heroHead3}>2024</h1>
      </div>
    </div>
  );
};
export default Hero;
