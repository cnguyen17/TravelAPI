import Header from "../components/Header";
import ExploreContainer from "../components/ExploreContainer";
import FlightContainer from "../components/FlightContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysLinksButtonsForm from "../components/PopularStaysLinksButtonsForm";
import WeeklyUpdatesSection from "../components/WeeklyUpdatesSection";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.heroSection}>
        <Header />
        <ExploreContainer />
      </div>
      <div className={styles.homeContents}>
        <FlightContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysLinksButtonsForm />
      </div>
      <footer className={styles.footerSection} id="footer">
        <WeeklyUpdatesSection />
        <Footer />
      </footer>
    </div>
  );
};

export default Homepage;
