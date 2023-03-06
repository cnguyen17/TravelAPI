import styles from "./HotelCardContainer.module.css";

const HotelCardContainer = ({
  unsplashHhRfsdWxXus,
  entireBungalow,
  matterhornSuites,
  night,
  video,
  reviews,
  prop,
  vector,
}) => {
  return (
    <div className={styles.hotelCard1}>
      <a className={styles.hotelCard} href="#">
        <img
          className={styles.unsplashhhrfsdwxxusIcon}
          alt=""
          src={unsplashHhRfsdWxXus}
        />
        <div className={styles.stayDetails}>
          <div className={styles.entireBungalowParent}>
            <div className={styles.entireBungalow}>{entireBungalow}</div>
            <b className={styles.matterhornSuites}>{matterhornSuites}</b>
            <div className={styles.night}>{night}</div>
          </div>
          <img className={styles.videoIcon} alt="" src={video} />
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{reviews}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{prop}</div>
            <img className={styles.vectorIcon} alt="" src={vector} />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardContainer;
