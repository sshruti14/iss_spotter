const { nextISSTimesForMyLocation  } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }

//   console.log("It worked! Returned Ip", ip);
// });

// fetchCoordsByIP("67.70.70.238", (error, coordinates) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }

//   console.log(coordinates);
// });

// const coordinates = [45.2501, -75.9161];
// fetchISSFlyOverTimes(coordinates, (error, raiseTimes) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }

//   console.log(raiseTimes);
// });

const printPassTimes = function(passTimes) {

  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});