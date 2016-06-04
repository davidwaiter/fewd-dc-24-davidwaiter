jQuery(document).ready(function(){

$("#purpleBox").on("click", purPara );
$("#blueBox").on("click", hipsterPara);
$("#redBox").on("click", redToggle );
$(".boxes").on("click", boxBorder );

function purPara () {
	$("p").css("color", "purple");
}

function hipsterPara () {
	$(".hipsterSpeak").css("color", "white");
	$(".hipsterSpeak").css("background-color", "blue");
}

function redToggle () {
	$("li").toggleClass("redForm");
}

function boxBorder () {
	$(".boxes").css("border-bottom", "6px solid black");
}

});



