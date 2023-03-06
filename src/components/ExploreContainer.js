import { useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./ExploreContainer.module.css";
import { format } from "date-fns";


const ExploreContainer = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);

    const handleOptionChange = (fieldName, Location) => {
      setDateFieldDateTimePickerValue({ ...dateFieldDateTimePickerValue, [fieldName]: Location });
      console.log(`Selected value for ${fieldName}:`, Location);
    };
    // const handleDateChange = (fieldName, date) => {
    //   setDateFieldDateTimePickerValue({ ...dateFieldDateTimePickerValue, [fieldName]: date });
    //   console.log(`Selected date for ${fieldName}:`, date);
    // };
    const handleDateChange = (value) => {
      setDateFieldDateTimePickerValue(value);
      console.log("Selected date for Date:", format(value, "yyyy/MM/dd"))
    };
    const onSearchFlightsButtonClick = useCallback(() => {
      window.open("https://calvinnguyen.org/");
    }, []);

    const handleSearch = async () => {
      setLoading(true);
      try {
        const options = {
          method: 'GET',
          url: `https://timetable-lookup.p.rapidapi.com/TimeTable/${departure}/${arrival}/${date}/`,
          headers: {
            'X-RapidAPI-Key': '09e00ed454msh75a5925163ac865p17551ejsn01c444cd880e',
            'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
          }
        };
    
        const response = await axios.request(options);
        console.log(response.data); // Add console log statement here
    
        setResults(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.searchSection}>
        <div className={styles.bannerGradient} />
        <img
          className={styles.bannerBackground}
          alt=""
          src="../banner--background@2x.png"
        />
        <div className={styles.searchContainer}>
          <div className={styles.title}>
            <div
              className={styles.letsExplore}
            >{`Let’s explore & travel the world`}</div>
            <div className={styles.findTheBest}>
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className={styles.searchForm}>
            <div className={styles.inputsRow}>
              <div className={styles.inputGroup}>
                <Autocomplete
                  className={styles.departureField}
                  sx={{ width: "100%" }}
                  disablePortal
                  options={["LAX", "DEN", "SAN", "BUR"]}
                  // onChange={handleOptionChange}
                  onChange={(event, value) => handleOptionChange('Departure', value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Departure"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="LAX"
                  size="medium"
                />
              </div>
              <div className={styles.inputGroup1}>
                <Autocomplete
                  className={styles.departureField}
                  sx={{ width: "100%" }}
                  disablePortal
                  options={["LAX", "DEN", "SAN", "BUR"]}
                  onChange={(event, value) => handleOptionChange('Arrivals', value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Arrival"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="DEN"
                  size="medium"
                />
              </div>
              <div className={styles.inputGroup}>
                {/* <div className={styles.departureField}> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}/>
                  <DatePicker
                    className={styles.departureField}
                    sx={{ width: "100%" }}
                    label="Date"
                    value={dateFieldDateTimePickerValue}
                    // width= "150%"
                    // onChange={(newValue) => {
                    //   setDateFieldDateTimePickerValue(newValue),handleOptionChange;
                    // }}
                    onChange={(value) => handleDateChange(value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        variant="outlined"
                        size="medium"
                        renderInput={{ placeholder: "01/05/2022" }}
                        helperText=""
                      />
                    )}
                  />
                {/* </div> */}
              </div>
            </div>
            <button className={styles.buttonGroup}>
              <button
                className={styles.searchFlightsButton}
                onClick={onSearchFlightsButtonClick}
                data-animate-on-scroll
              >
                <div className={styles.button}>Search flights</div>
              </button>
            </button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ExploreContainer;
