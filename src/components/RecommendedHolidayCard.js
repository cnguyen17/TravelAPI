import styles from "./RecommendedHolidayCard.module.css";

const RecommendedHolidayCard = ({ unsplash5MV818tzxeo, bali, d3N, prop }) => {
  return (
    <button className={styles.recCard1}>
      <img
        className={styles.unsplash5mv818tzxeoIcon}
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className={styles.holidayDetails}>
        <div className={styles.frameParent}>
          <div className={styles.baliParent}>
            <div className={styles.bali}>{bali}</div>
            <div className={styles.d3n}>{d3N}</div>
          </div>
          <div className={styles.div}>{prop}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayCard;
