require("dotenv").config();

var keys = require("./keys.js");

// request info from API 
const axios = require('axios');

 
// Make a request for a user with a given ID
axios.get('http://www.omdbapi.com/?t=titanic&apikey=817f7d4f')
  .then(function (response) {
    // display retrieved movie info from movie database
    console.log(response);
    console.log(response.data.Title); 
    console.log(response.data.Year);
    console.log(response.data.imdbRating);
    console.log(response.data.Ratings[1]);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
  })




  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

//   to just rerun code above 
return 




// SPOTIFY DOWN HERE 

// request info from API 
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);



// process.argv is now equal to spotify this song which is the command line -- creating if statement if user tiypes command line run this request
if(process.argv[2] == "spotify-this-song"){
// got from spotify site
spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
//  display artist info from spotify data base 
  console.log(data.tracks.items[0].artists[0].name); 
  console.log(process.argv[3]);
  console.log(data.tracks.items[0].external_urls.spotify); 
  console.log(data.tracks.items[0].album.name);

  });
    }

//   console.log(process.argv[2]);
//   console.log(process.argv[3]);


//   process.argv  is the commands line 

//   example (node liri.js spotify-this-song "i kissed a girl")
//   0- is Node
//   1 - liri.js
//   2 - 4 choice of api commands 
//   3 - string that user is going to provide 

