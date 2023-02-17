const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(`Error fetching breed data: ${error}`, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`No results found for breed: ${breedName}`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };