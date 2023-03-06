import DestinationCard from "../components/DestinationCard";
import styles from "./PopularDestinationsContainer.module.css";

const PopularDestinationsContainer = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <a className={styles.viewAllTop} href="#">
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="../arrowright.svg"
          />
        </a>
      </div>
      <div className={styles.cardsContainer}>
        <DestinationCard
          destinationImageUrl="../unsplashnnzkznywhau@2x.png"
          destinationName="Paris"
          destinationPrice="$699"
          propPadding="0px 1px"
          propWidth="calc(100% + 0.08px)"
          propWidth1="calc(100% - 0.36px)"
          propWidth2="67.97px"
          propWidth3="67.97px"
          propLeft="28.7px"
        />
        <DestinationCard
          destinationImageUrl="../unsplashltnpejwdsay@2x.png"
          destinationName="Norway"
          destinationPrice="$895"
          propPadding="0px var(--padding-sm)"
          propWidth="100%"
          propWidth1="calc(100% - 0.44px)"
        />
        <DestinationCard
          destinationImageUrl="../unsplashyc8qqp50bda@2x.png"
          destinationName="Greece"
          destinationPrice="$1079"
          propPadding="0px var(--padding-sm)"
          propWidth="100%"
          propWidth1="calc(100% - 0.44px)"
          propWidth2="74.7px"
          propWidth3="74.01px"
          propLeft="35.43px"
        />
        <DestinationCard
          destinationImageUrl="../unsplashm0oiyn5u8zm@2x.png"
          destinationName="Tuscany"
          destinationPrice="$1245"
          propPadding="0px var(--padding-sm)"
          propWidth="100%"
          propWidth1="calc(100% - 0.44px)"
          propWidth2="75.22px"
          propWidth3="75.22px"
          propLeft="35.95px"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img
          className={styles.arrowRightIcon}
          alt=""
          src="../arrowright1.svg"
        />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
