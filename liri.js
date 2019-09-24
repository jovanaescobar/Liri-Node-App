require("dotenv").config();
var keys = require("./keys.js");
// request info from API's
const axios = require('axios');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');
// user request for input
var command;
// name of titles user is searching
var input;
var noTxtFile = true;


if(process.argv[2] == "do-what-it-says"){
    noTxtFile = false;
    //get input from txt file
      fs.readFile('random.txt', 'utf8',(err, data) => {
        if(err) throw err;
       // assign values from txt file
        var x = data.split(',');
        command = x[0];
        input = x[1];
        otherApis();
      });

    } else{
        //Run other command options if "do-what-it-says" is not requested
         command = process.argv[2];
        //Run search for song or movie title inputs  
         input = process.argv[3];
         otherApis();
    }


function otherApis(){
//process.argv is now equal to spotify this song
if(command == "spotify-this-song"){
//?????????? needs fruthers explanation

     if( (noTxtFile && process.argv.length < 4 ) || input.length == 0){
//give The Sign Info if no input is added to "spotify-this-song"
        input = "The Sign";
    }
//from spotify site
spotify.search({ type: 'track', query: input }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
//retrieve info from spotify 
  console.log(data.tracks.items[0].artists[0].name); 
  console.log(input);
  console.log(data.tracks.items[0].external_urls.spotify); 
  console.log(data.tracks.items[0].album.name);

  });
 } else if(command == "movie-this"){
    if( (noTxtFile && process.argv.length < 4 ) || input.length == 0){
        input = "Mr.Nobody";
    }
// Request info for input from API with APIkey located in .env
axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=" + process.env.IMDB_KEY)
.then(function (response) {


//retrieve movie info 
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

}
}