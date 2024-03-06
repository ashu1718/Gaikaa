import styles from "./location.module.css";
const LocationBar = () => {
  return (
    <>
      <div className={styles.headDiv}>
        <div className={styles.locations}>
          <h3>Location</h3>
        </div>
        <div className={styles.city}>
          <h1>San Francisco, </h1>
        </div>
        <div className={styles.state}>
          <h1>California</h1>
        </div>
      </div>
      <div className={styles.regdiv}>
        <p>37.7830593° N, 122.404101° W</p>
        <button className={styles["button-17"]}>Register</button>
      </div>
    </>
  );
};
export default LocationBar;
