import styles from "./Header.module.css";

const Header = () => {
  return (
    <form className={styles.topHeader}>
      <div className={styles.topContainer}>
        <img
          className={styles.fickleflightLogoIcon}
          alt=""
          src="../fickleflight-logo.svg"
        />
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <a className={styles.explore}>Explore</a>
            <div className={styles.search}>Search</div>
            <div className={styles.hotels}>Hotels</div>
            <div className={styles.offers}>Offers</div>
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="../notification.svg"
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="../notification1.svg"
            />
            <img
              className={styles.unsplashd1upkifd04aIcon}
              alt=""
              src="../top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Header;
