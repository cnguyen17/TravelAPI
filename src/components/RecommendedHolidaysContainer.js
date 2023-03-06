import RecommendedHolidayCard from "../components/RecommendedHolidayCard";
import styles from "./RecommendedHolidaysContainer.module.css";

const RecommendedHolidaysContainer = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <a className={styles.viewAllHolidaysParent} href="#">
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="../arrowright2.svg"
          />
        </a>
      </div>
      <div className={styles.recCardsContainer}>
        <RecommendedHolidayCard
          unsplash5MV818tzxeo="../unsplash5mv818tzxeo@2x.png"
          bali="Bali"
          d3N="4D3N"
          prop="$899"
        />
        <RecommendedHolidayCard
          unsplash5MV818tzxeo="../unsplashj82dskoxvy8@2x.png"
          bali="Switzerland"
          d3N="6D5N"
          prop="$900"
        />
        <RecommendedHolidayCard
          unsplash5MV818tzxeo="../unsplash4ezkckxolre@2x.png"
          bali="Boracay"
          d3N="5D4N"
          prop="$699"
        />
        <RecommendedHolidayCard
          unsplash5MV818tzxeo="../unsplashuyqmxhjr3ne@2x.png"
          bali="Palawan"
          d3N="4D3N"
          prop="$789"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img
          className={styles.arrowRightIcon}
          alt=""
          src="../arrowright3.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
