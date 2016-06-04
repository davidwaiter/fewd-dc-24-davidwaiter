$(document).ready(function(){

$(".readmore").on("click", showMore );
$(".readless").on("click", showLess );
$(".learnmore").on("click", learnMore );

function showMore (event) {
	event.preventDefault();
	$("#show-this-on-click").slideDown();
	$(".readmore").hide();
	$(".readless").show();
}

function showLess (event) {
	event.preventDefault();
	$("#show-this-on-click").slideUp();
	$(".readless").hide();
	$(".readmore").show();
}

function learnMore (event) {
	event.preventDefault();
	$("#learnmoretext").slideDown();
	$(".learnmore").hide();
}

});
