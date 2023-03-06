import { useCallback } from "react";
import { TextField } from "@mui/material";
import styles from "./WeeklyUpdatesSection.module.css";

const WeeklyUpdatesSection = () => {
  const onButtonClick = useCallback(() => {
    window.location.href = "mailto:cvnguyenco@gmail.com?subject=Hello there!";
  }, []);

  return (
    <div className={styles.rectangleParent}>
      <img className={styles.frameChild} alt="" src="../rectangle-186@2x.png" />
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <b className={styles.formTitle}>Get weekly updates</b>
        </div>
        <form className={styles.form}>
          <div className={styles.formText}>
            <div className={styles.fillInYour}>
              Fill in your details to join the party!
            </div>
          </div>
          <div className={styles.formFields}>
            <TextField
              className={styles.destinationNameInput}
              color="primary"
              variant="outlined"
              type="text"
              label="Your name"
              placeholder="Your name"
              size="medium"
              margin="none"
            />
            <div className={styles.formText}>
              <TextField
                className={styles.destinationNameInput}
                color="primary"
                variant="outlined"
                type="text"
                label="Email address"
                size="medium"
                margin="none"
              />
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.unstyledbutton}>
              <div className={styles.button1}>submit</div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default WeeklyUpdatesSection;
