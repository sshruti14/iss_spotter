const { fetchMyIP, fetchCoordsByIP } = require("./iss");

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
