$(document)ready(function (){

$("#submit").click(compareNumbers)


function compareNumbers() {
    var result;
	var a = $('#a').val();
    var b = $('#b').val();

if (a > b) {
	result = "A is bigger than B!";
} else if (a < b) {
	result = "B is bigger than A!";
} else if (a == b) {
	result = "A and B are equal!";
} else {
	result = "You messed up. One of those isnt a number";
}

$("#result").text(result);

};

});