
$(document).ready(function(){

//Bind function to #city-type element 
$("#city-type").on('change',function(){

        //Create variable to store value of input
        var city = $(this).val();
        city = city.toLowerCase();
        console.log(city); //For testing

         //Change background to NYC skyline if New York City is chosen
	    if (city == "new york city") {
	    	$("body").attr("class", "nyc")
	    } 
	      //Change background to San Francisco skyline if SF is chosen
	      else if (city == "san francisco") {
	      	$("body").attr("class", "sf")
	      }  
	      //Change background to Los Angeles skyline if Los Angeles is chosen
	      else if (city == "los angeles") {
	      	$("body").attr("class", "la")
	      } 
	      //Change background to Austin skyline if Austin is chosen
	      else if (city == "austin") {
	      	$("body").attr("class", "austin")
	      } 
	      //Change background to Sydney skyline if Sydney is chosen
	      else {
	      	$("body").attr("class", "sydney")
	      }

});

//Create Array with city names
var places = ["New York City", "San Francisco", "Los Angeles", "Austin", "Sydney"]; 

//Create For loop to append each city on to the #city-type element
for (var i = 0; i < places.length; i++) {
	$("#city-type").append("<option>"+places[i]+"</option>");
};

});
