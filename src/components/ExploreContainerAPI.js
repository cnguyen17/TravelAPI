import axios from "axios";

const options = {
  method: "GET",
  url: "https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20191217/",
  headers: {
    "X-RapidAPI-Key": "09e00ed454msh75a5925163ac865p17551ejsn01c444cd880e",
    "X-RapidAPI-Host": "timetable-lookup.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });