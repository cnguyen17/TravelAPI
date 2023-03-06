import { useMemo } from "react";
import styles from "./HotelContainer.module.css";

const HotelContainer = ({
  unsplashtSn8bPOpVEo,
  storyBeachfrontSuite,
  discoveryShores,
  night,
  reviews,
  prop,
  vector,
  propWidth,
  propRight,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.hotelCard2}>
      <a className={styles.hotelCard} href="#">
        <img
          className={styles.unsplashtsn8bpopveoIcon}
          alt=""
          src={unsplashtSn8bPOpVEo}
        />
        <div className={styles.stayDetails}>
          <div className={styles.storyBeachfrontSuiteParent}>
            <div className={styles.storyBeachfrontSuite}>
              {storyBeachfrontSuite}
            </div>
            <b className={styles.discoveryShores}>{discoveryShores}</b>
            <div className={styles.night}>{night}</div>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{reviews}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{prop}</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src={vector}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelContainer;
