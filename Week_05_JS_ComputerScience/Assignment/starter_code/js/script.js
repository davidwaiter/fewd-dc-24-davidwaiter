$(document).ready(function () {

function changeCityImage () {

	 event.preventDefault();

	var city = $("#city-type").val();
	city = city.toLowerCase().trim();
	console.log(city + " is a terrible city");

        if ( city == "new york" || city == "new york city" || city == "nyc") {
            $('body').attr('class', 'nyc');
            console.log("it works");
        }  else if (city == "san francisco" || city == "sf" || city == "bay area"){
            $('body').attr('class', 'sf')
       
        } else if (city == "los angeles" || city == "la" || city == "lax") {
            $('body').attr('class', 'la')

        } else if (city == "austin" || city == "tx") {
            $('body').attr('class', 'austin')

        } else if (city == "sydney" || city == "syd") {
            $('body').attr('class', 'sydney')

        }

};

// Listen for user interaction on the submit button.
$("#submit-btn").on("click", changeCityImage);
   
});


