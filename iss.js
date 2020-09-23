const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (err, response, body) => {
    const ip = JSON.parse(body).ip;
    if (err) {
      callback(err, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // if we get here, all's well and we got the data
    if (response.statusCode === 200) {
      callback(null, ip);
      return;
    }
  });
};

const fetchCoordsByIP = function (ip, callback) {
  const url = "https://ipvigilante.com/" + ip;

  request(url, (err, response, body) => {
    if (err) {
      callback(err, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinatesIP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const latitude = JSON.parse(body).data.latitude;
    const longitude = JSON.parse(body).data.longitude;

    if (response.statusCode === 200) {
      callback(null, [latitude, longitude]);
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
