
document.getElementById("grayButton").onclick = changeToGrey;
document.getElementById("whiteButton").onclick = changeToWhite;


function changeToGrey (){

	document.body.style.backgroundColor = "grey";
	document.body.style.color = "white";
	console.log ("It works!")

}

function changeToWhite (){

	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";

}