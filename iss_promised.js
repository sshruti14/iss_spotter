const request = require('request-promise-native');

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};


/* 
 * Makes a request to ipvigilante.com using the provided IP address, to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = function (body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/json/${ip}`);
};


const fetchISSFlyOverTimes = function (body) {

  const lat = JSON.parse(body).data.latitude;
  const lon = JSON.parse(body).data.longitude;
  const coords = {
    lat: lat,
    lon: lon
  };

  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.lat}&lon=${coords.lon}`);

};


const nextISSTimesForMyLocation = function(body){
 return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data)=>{
    const {response} = JSON.parse(data);
    return response;
  })
  
}

module.exports = {nextISSTimesForMyLocation } ;