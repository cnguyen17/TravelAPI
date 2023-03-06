import { useMemo } from "react";
import styles from "./DestinationCard.module.css";

const DestinationCard = ({
  destinationImageUrl,
  destinationName,
  destinationPrice,
  propPadding,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propLeft,
}) => {
  const card1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const unsplashnnzkZNYWHaUIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const destinationDetailsStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className={styles.card1} style={card1Style}>
      <div className={styles.unsplashnnzkznywhauParent}>
        <img
          className={styles.unsplashnnzkznywhauIcon}
          alt=""
          src={destinationImageUrl}
          style={unsplashnnzkZNYWHaUIconStyle}
        />
        <div
          className={styles.destinationDetails}
          style={destinationDetailsStyle}
        >
          <b className={styles.paris}>{destinationName}</b>
          <div className={styles.parent} style={groupDivStyle}>
            <div className={styles.div} style={divStyle}>
              {destinationPrice}
            </div>
            <div className={styles.from} style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DestinationCard;
