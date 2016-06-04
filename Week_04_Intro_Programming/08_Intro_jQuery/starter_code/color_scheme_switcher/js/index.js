$('#grayButton').on('click', switchGray );
$('#whiteButton').on('click', switchWhite );

function switchGray() {
  $("body").css( {
  	"background-color" : "gray",
	"color" : "white"
});
  $("#newP").html("cool");
}

function switchWhite() {
  $("body").css( {
  	"background-color" : "white",
    "color" : "black"
});
  $("#newP").html("sweet");
}
