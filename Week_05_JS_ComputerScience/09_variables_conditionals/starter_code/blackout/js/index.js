// $(document).ready(function () {

// $("#light_switch").on("click", changeBackground);

// function changeBackgroundc () {
//         $("body").toggle("body.dark");
// }

	
// });


var lights = "on";

function switchLights () {
	if (lights == "on"){
		$('body').addClass('dark');
		lights = "off";
	} else {
		$('body').removeClass();
		lights = "on";
	}
}

$("#light_switch").click(switchLights);