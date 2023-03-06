import { useCallback } from "react";
import styles from "./FlightContainer.module.css";

const FlightContainer = () => {
  const onHotelClick = useCallback(() => {
    window.open(
      "https://www.booking.com/index.en-us.html?aid=309654;label=hotels-english-en-caus-Uka*YKnbpTpo8Hs00QDW4AS166194690220:pl:ta:p1:p22,563,000:ac:ap:neg:fi:tikwd-12196901:lp1014221:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg;ws=&gclid=CjwKCAiAr4GgBhBFEiwAgwORrQUx30ceB-xqrVtJjT_7tnEQEYw79slNKPVOc2BRnWNAsp2lgRdkbRoC0EIQAvD_BwE"
    );
  }, []);

  const onAttractionsClick = useCallback(() => {
    window.open(
      "https://www.sftravel.com/article/top-20-attractions-san-francisco"
    );
  }, []);

  const onEatsClick = useCallback(() => {
    window.open("https://www.yelp.com/biz/eats-san-francisco");
  }, []);

  return (
    <div className={styles.upcomingFlightSection}>
      <b className={styles.upcomingFlight}>Upcoming Flight</b>
      <div className={styles.flightDetails}>
        <div className={styles.flightMainContainer}>
          <div className={styles.toAndFrom}>
            <div className={styles.fromDetails}>
              <b className={styles.sin}>SIN</b>
              <div className={styles.singapore}>Singapore</div>
            </div>
            <div className={styles.duration}>
              <b className={styles.h55m}>15H 55M</b>
              <img
                className={styles.durationChild}
                alt=""
                src="../group-17.svg"
              />
            </div>
            <div className={styles.toDetails}>
              <b className={styles.lax}>LAX</b>
              <div className={styles.losAngeles}>Los Angeles</div>
            </div>
          </div>
          <div className={styles.horizontalLine} />
          <div className={styles.departureDetails}>
            <div className={styles.departsOn1}>Departs on: 1 May, 08:00 AM</div>
            <div className={styles.daysToGoContainer}>
              <b>4 days</b>
              <span> to go</span>
            </div>
          </div>
        </div>
        <div className={styles.lineSeparator} />
        <div className={styles.prepareMenu}>
          <div className={styles.prepareForYour}>Prepare for your trip</div>
          <div className={styles.tripMenus}>
            <button className={styles.hotel} onClick={onHotelClick}>
              <img className={styles.hotelChild} alt="" src="../group-21.svg" />
              <div className={styles.hotel1}>Hotel</div>
            </button>
            <button className={styles.attractions} onClick={onAttractionsClick}>
              <div className={styles.hotelChild}>
                <div className={styles.groupChild} />
                <img className={styles.groupIcon} alt="" src="../group.svg" />
              </div>
              <div className={styles.attractions1}>Attractions</div>
            </button>
            <button className={styles.eats} onClick={onEatsClick}>
              <img
                className={styles.hotelChild}
                alt=""
                src="../group-211.svg"
              />
              <div className={styles.eats1}>Eats</div>
            </button>
            <button className={styles.commute}>
              <div className={styles.hotelChild}>
                <div className={styles.groupItem} />
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              </div>
              <div className={styles.commute1}>Commute</div>
            </button>
            <button className={styles.commute}>
              <div className={styles.rectangleContainer}>
                <div className={styles.groupInner} />
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector1.svg"
                />
              </div>
              <div className={styles.taxi1}>Taxi</div>
            </button>
            <button className={styles.commute}>
              <div className={styles.hotelChild}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="../vector2.svg"
                />
              </div>
              <div className={styles.movies1}>Movies</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightContainer;
