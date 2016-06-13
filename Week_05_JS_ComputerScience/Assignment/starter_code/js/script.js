$(document).ready(function () {

function changeCityImage () {
 // Prevent default browser action
	 event.preventDefault();
 // Create variable to store input value
	var city = $("#city-type").val();
	city = city.toLowerCase().trim();

        // If user inputs some variation of NYC, change background to NY skyline
        if ( city == "new york" || city == "new york city" || city == "nyc") {
            $('body').attr('class', 'nyc');
            
        }  // If user inputs some variation of San Francisco, change background to SF skyline
          else if (city == "san francisco" || city == "sf" || city == "bay area"){
            $('body').attr('class', 'sf')
       
        } // If user inputs some variation of Los Angeles, change background to LA skyline
          else if (city == "los angeles" || city == "la" || city == "lax") {
            $('body').attr('class', 'la')

        } // If user inputs some variation of Austin, change background to TX skyline
          else if (city == "austin" || city == "tx") {
            $('body').attr('class', 'austin')

        } // If user inputs some variation of Sydney, change background to Sydney skyline
          else if (city == "sydney" || city == "syd") {
            $('body').attr('class', 'sydney')

        }

};

// Listen for user interaction on the submit button.
$("#submit-btn").on("click", changeCityImage);
   
});


