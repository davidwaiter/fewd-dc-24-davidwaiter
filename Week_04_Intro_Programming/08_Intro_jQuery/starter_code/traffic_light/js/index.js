//Implement the red light using jQuery. Don't forget to add the script tags.

 $("#stopButton").on("click", illuminateRed );
 $("#slowButton").on("click", illuminateOrange );
 $("#goButton").on("click", illuminateGreen );

 function illuminateRed () {
 	clearLights();
 	$("#stopLight").css("background-color", "red");
 	$("#stopLight").css("border", "5px solid white");
 };

 function illuminateOrange () {
 	clearLights();
 	$("#slowLight").css("background-color", "orange");
 	$("#slowLight").css("border", "5px solid white");
 	
 };

 function illuminateGreen () {
 	clearLights();
 	$("#goLight").css("background-color", "green");
 	$("#goLight").css("border", "5px solid white");
 	
 };

 function clearLights () {
 	$("#stopLight").css("background-color", "black");
 	$("#stopLight").css("border", "0");
 	$("#slowLight").css("background-color", "black");
 	$("#slowLight").css("border", "0");
 	$("#goLight").css("background-color", "black");
 	$("#goLight").css("border", "0");
 };