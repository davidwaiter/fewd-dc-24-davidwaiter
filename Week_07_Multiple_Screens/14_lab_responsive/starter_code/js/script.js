$(".hamburger").on("click", hideMenu);
console.log("it works");


function hideMenu () {
	event.preventDefault();
	$(".navigation").slideToggle();
	$(".navigation").toggleClass("newClass")
}