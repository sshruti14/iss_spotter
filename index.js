const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didnt work!", error);
    return;
  }

  console.log("It worked! Returned Ip", ip);
});

fetchCoordsByIP("67.70.70.238", (error, coordinates) => {
  if (error) {
    console.log("It didnt work!", error);
    return;
  }

  console.log(coordinates);
});

const coordinates = [45.2501, -75.9161];
fetchISSFlyOverTimes(coordinates, (error, raiseTimes) => {
  if (error) {
    console.log("It didnt work!", error);
    return;
  }

  console.log(raiseTimes);
});
