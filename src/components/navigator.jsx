import styles from "./navigator.module.css";
const NavBar = () => {
  return (
    <>
      <div className={styles.headclass}>
        <div className={styles.logo}>
          <a href="/">Stripe</a>
        </div>
        <nav className={styles.headNav}>
          <a className={styles.headNavLink} href="">
            Overview
          </a>
          <a className={styles.headNavLink} href="">
            Talks
          </a>
          <a className={styles.headNavLink} href="">
            Speakers
          </a>
          <a className={styles.headNavLink} href="">
            Tickets
          </a>
          <a className={styles.headNavLink} href="">
            Sponsers
          </a>
          <a className={styles.headNavLink} href="">
            FAQ
          </a>
        </nav>
        <div>
          <button className={` btn btn-dark`}>Register</button>
        </div>
      </div>
    </>
  );
};
export default NavBar;
