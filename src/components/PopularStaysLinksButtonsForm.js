import HotelCardContainer from "../components/HotelCardContainer";
import HotelContainer from "../components/HotelContainer";
import styles from "./PopularStaysLinksButtonsForm.module.css";

const PopularStaysLinksButtonsForm = () => {
  return (
    <form className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <a className={styles.viewAllStaysParent} href="#">
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="../arrowright4.svg"
          />
        </a>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardContainer
          unsplashHhRfsdWxXus="../unsplashrlwe8f8anoc@2x.png"
          entireBungalow="Entire bungalow"
          matterhornSuites="Matterhorn Suites"
          night="$575/night"
          video="../video.svg"
          reviews="(60 reviews)"
          prop="4.9"
          vector="../vector3.svg"
        />
        <HotelContainer
          unsplashtSn8bPOpVEo="../unsplashtsn8bpopveo@2x.png"
          storyBeachfrontSuite="2-Story beachfront suite"
          discoveryShores="Discovery Shores"
          night="$360/night"
          reviews="(116 reviews)"
          prop="4.8"
          vector="../vector4.svg"
          propWidth="37.53%"
          propRight="62.47%"
        />
        <HotelContainer
          unsplashtSn8bPOpVEo="../unsplashrlwe8f8anoc1@2x.png"
          storyBeachfrontSuite="Single deluxe hut"
          discoveryShores="Arctic Hut "
          night="$420/night"
          reviews="(78 reviews)"
          prop="4.7"
          vector="../vector5.svg"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardContainer
          unsplashHhRfsdWxXus="../unsplashyqrybvxug5q@2x.png"
          entireBungalow="Deluxe King Room"
          matterhornSuites="Lake Louise Inn"
          night="$244/night"
          video="../video1.svg"
          reviews="(63 reviews)"
          prop="4.6"
          vector="../vector6.svg"
        />
      </div>
      <div className={styles.viewAllStaysGroup}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img
          className={styles.arrowRightIcon}
          alt=""
          src="../arrowright5.svg"
        />
      </div>
    </form>
  );
};

export default PopularStaysLinksButtonsForm;
